const express = require('express');
// import * as dotenv from 'dotenv';
const dotenv = require('dotenv');
const cors = require('cors');
const fetch = require('node-fetch');
const axios = require('axios')

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/files', express.static('files'))

var exec = require("child_process").exec;
const os = require("os");
const render_app_url = "https://leap.ydhhb.top";
const render_app_url1 = "https://mark.ydhhb.top/video/share/url/parse";



const BASE_URL = process.env.BASE_URL || 'https://api.tryleap.ai/api/v1';
const API_KEY = process.env.API_KEY || '16907a8b-1a2a-4af7-88ae-e8236828a806';
const modelId = process.env.modelId || '1e7737d7-545e-469f-857f-e4b46eaa151d';


/* keepalive  begin */
function keepalive() {
    console.log('进入保活程序',render_app_url)
    // 1.请求主页，保持唤醒
    axios({
        url: render_app_url,
        method: 'get'
    }).then(response => {
        console.log("API响应报文：",response.data);
    }).catch(err=>{
        console.log("API请求错误: " + err);
    })
    // 1.请求去水印服务
    axios({
        url: render_app_url1,
        method: 'get'
    }).then(response => {
        console.log("去水印响应报文：",response.body);
    }).catch(err=>{
        console.log("去水印请求错误: " + err);
    })
  
    //2. 本地进程检测,保活
    exec("ps -ef", function (err, stdout, stderr) {
      if (err) {
        console.log("保活本地进程检测-命令行执行失败:" + err);
      } else {
        console.log("保活本地进程检测正在运行 stdout", stdout);
        if (stdout.includes("node index.js"))
            console.log("保活index.js-本地进程检测-index.js正在运行");
        //命令调起web.js
        else startWeb();
      }
    });
  }
  
  //保活频率设置为30秒
  setInterval(keepalive, 58 * 1000);
  /* keepalive  end */
  function startWeb() {
    let startWebCMD = "chmod +x ./index.js && ./index.js >/dev/null 2>&1 &";
    // let startWebCMD = "node index.js";
    exec(startWebCMD, function (err, stdout, stderr) {
      if (err) {
        console.log("启动index.js-失败:" + err);
      } else {
        console.log("启动index.js-成功!");
      }
    });
  }


// GET请求
app.get('/', async (req, res) => {
    res.status(200).send({
        message: 'Hello from LEAP-API',
    })
})



// 获取功能列表
app.get('/funList', async (req, res) => {
    const urls = `https://leap.ydhhb.top`;
    // 此处填入功能列表
    let arr = [
        {id: 1, name: "去水印", url: "/pages/watermark/watermark",icon: urls+'/files/watermark.svg', sta: true},
		{id: 2, name: "Bot*?", url: "/pages/splash/splash",icon: urls+'/files/logo1.png', sta: false},
		{id: 2, name: "AI画图", url: "/pages/leap/leap",icon: urls+'/files/logo1.png', sta: false}
    ]
    // 筛选状态为开的功能返回
    let datas = [];
    arr.forEach(val=>{
        if(val.sta) datas.push(val);
    })
    res.status(200).send({
        data: datas,
        code: 200
    })
})



// 删除图像
app.get('/deleteLeap', async (req, res) => {
    const id = req.query.id || '';
    const url = `${BASE_URL}/images/models/${modelId}/inferences/${id}`;

    axios({
        url,
        method: 'delete',
        headers: {
            authorization: 'Bearer ' + API_KEY
        }
    }).then(response => {
        console.log(response)
        if(response.status == 200) {
            res.status(200).send({
                data: 'ok',
                code: 200
            })
        } else {
            res.status(500).send({
                err: "error"
            })
        }
    }).catch(err=>{
        res.status(500).send({err})
    })
})



// 获取单个图像
app.get('/getLeap', async (req, res) => {
    const id = req.query.id || '';
    const url = `${BASE_URL}/images/models/${modelId}/inferences/${id}`;
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          authorization: 'Bearer ' + API_KEY
        }
    };
    if(!id) {
        res.status(500).send({err: "inferenceId 不能为空"});
    } else {
        fetch(url, options)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            res.status(200).send({
                data: json,
            })
        })
        .catch(err => {
            console.error('error:' + err)
            res.status(500).send({err})
        });
    }
})



// 获取全部图像
app.get('/getAllLeap', async (req, res) => {
    const { page, pageSize } = req.query;
    const url = `${BASE_URL}/images/models/${modelId}/inferences?page=${page}&pageSize=${pageSize}`;
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          authorization: 'Bearer ' + API_KEY
        }
    };
    fetch(url, options)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            res.status(200).send({
                data: json,
            })
        })
        .catch(err => {
            console.error('error:' + err)
            res.status(500).send({err})
        });
})



// POST请求
app.post('/', async(req, res) => {
    try {
        const body = req.body;
        res.status(200).send({ body })
    } catch (error) {
        console.log(error);
        
    }
})



/* 
创建图像
@param{
    prompt: "用于推理的提示",
    negativePrompt: "用于推理的负面提示(排除的项)",
    version: "用于推理的模型版本。如果未提供，将默认为最新版本。",
    steps: "用于推理的步骤数",
    width: "用于推理的图像的宽度。必须是 8 的倍数, 默认512"，
    height: "用于推理的图像的高度。必须是 8 的倍数, 默认512",
    numberOfImages: "生成的图像数量",
    seed: "用于推理的种子。必须是正整数",
    restoreFaces: "（可选）对生成的图像应用人脸恢复。这将使面部图像看起来更逼真。",
    enhancePrompt: "（可选）自动增强提示以生成更好的结果",
    upscaleBy: "（可选）放大生成的图像。这将使图像看起来更逼真。默认值为 x1，表示不升级。最大值为 x4",
    promptStrength: "提示强度越高，生成的图像就越接近提示。必须介于 0 和 30 之间",
    sampler: "选择用于推理的采样器, 默认ddim"
}
*/
app.post('/createLeap', async(req, res) => {
    try {
        const {
            prompt,
            negativePrompt,
            steps,
            width,
            height,
            numberOfImages,
            upscaleBy,
            restoreFaces,
            promptStrength,
            enhancePrompt,
        } = req.body;
        const sampler = req.body.sampler || 'ddim';
        const url = `${BASE_URL}/images/models/${modelId}/inferences`;
        const options = {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json',
                'authorization': 'Bearer ' + API_KEY
            },
            body: JSON.stringify({
                prompt,
                negativePrompt: negativePrompt ? negativePrompt : 'asymmetric, watermarks',
                steps,
                width,
                height,
                numberOfImages,
                promptStrength,
                restoreFaces,
                enhancePrompt,
                upscaleBy: upscaleBy ? 'x'+upscaleBy : 'x1',
                sampler: sampler
            })
        };
        if(!prompt) {
            res.status(500).send({err: "prompt 不能为空"});
        } else {
            fetch(url, options)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                res.status(200).send({
                    data: json,
                })
            })
            .catch(err => {
                console.error('error:' + err)
                res.status(500).send({err})
            });
        }
    } catch (error) {
        res.status(500).send({err: error})
    }
})

const port = process.env.PORT || 3000
const host = process.env.HOST || ''

app.server = app.listen(port, host, () => {
  console.log(`server running @ http://${host ? host : 'localhost'}:${port}`)
})
module.exports = app;