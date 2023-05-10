const arr = {
    id8: `
        <div style="padding-bottom: 12px;">
            <p style="line-height: 2;"><span style="font-size: 12pt;"><strong>使用示例：</strong></span></p>
            <p><span style="color: #cccccc; font-size: 10pt;">关键词：RAW photo, a close up portrait photo of 26 y.o woman in wastelander clothes, long haircut, pale skin, slim body, background is city ruins, (high detailed skin:1.2), 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3</span></p>
            <p><span style="color: #cccccc; font-size: 10pt;">排除项：(deformed iris, deformed pupils, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime:1.4), text, close up, cropped, out of frame, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck</span></p>
            <p><span style="color: #cccccc; font-size: 10pt;"> 步数：25，采样器：euler 或者 dpm，图像放大：1.1-2，提示强度：0.25-0.45</span></p>
        </div>
        `
    ,
    id7: `
        <div style="padding-bottom: 12px;">
            <p><span style="font-size: 8pt; color: #cccccc;">这是在具有未来派科幻主题的高质量3D图像上训练的微调Stable Diffusion 2.0模型。</span></p>
            <p style="line-height: 2;"><span style="font-size: 12pt;"><strong>使用模型渲染的人物：</strong></span></p>
            <p><img src="https://huggingface.co/nitrosocke/Future-Diffusion/resolve/main/images/future-diffusion-samples01s.png" alt="Characters Samples" /></p>
            <p style="line-height: 2;"><span style="font-size: 12pt;"><strong>使用模型渲染的汽车和动物：</strong></span></p>
            <p><img src="https://huggingface.co/nitrosocke/Future-Diffusion/resolve/main/images/future-diffusion-samples02s.png" alt="Misc. Samples" /></p>
            <p style="line-height: 2;"><span style="font-size: 12pt;"><strong>使用模型渲染的景观：</strong></span></p>
            <p><img src="https://huggingface.co/nitrosocke/Future-Diffusion/resolve/main/images/future-diffusion-samples03s.png" alt="Landscape 1" /></p>
            <h4 class="relative group flex items-center"><a id="prompt-and-settings-for-the-characters" class="block pr-1.5 text-lg with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full" href="https://huggingface.co/nitrosocke/Future-Diffusion#prompt-and-settings-for-the-characters" rel="noopener nofollow"></a><span style="font-size: 12pt;">人物的提示和设置：</span></h4>
            <blockquote>
            <p><span style="font-size: 8pt; color: #cccccc;">关键词：future style [subject]</span></p>
            <p><span style="font-size: 8pt; color: #cccccc;">排除项：duplicate heads bad anatomy</span></p>
            <p><span style="font-size: 8pt; color: #cccccc;">推理步数： 20， 采样器： euler_a， 宽高： 512x704</span></p>
            </blockquote>
            <h4 class="relative group flex items-center"><a id="prompt-and-settings-for-the-landscapes" class="block pr-1.5 text-lg with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full" href="https://huggingface.co/nitrosocke/Future-Diffusion#prompt-and-settings-for-the-landscapes" rel="noopener nofollow"></a><span style="font-size: 12pt;">地形的提示和设置：</span></h4>
            <blockquote>
            <p><span style="font-size: 8pt; color: #cccccc;">关键词：future style city market street level at night</span></p>
            <p><span style="font-size: 8pt; color: #cccccc;">排除项：blurry fog soft</span></p>
            <p><span style="font-size: 8pt; color: #cccccc;">推理步数： 20， 采样器： euler_a， 宽高： 1024x576</span></p>
            </blockquote>
            <h2 class="relative group flex items-center"><a id="license" class="block pr-1.5 text-lg with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full" href="https://huggingface.co/nitrosocke/Future-Diffusion#license" rel="noopener nofollow"></a><span style="font-size: 12pt;">许可证</span></h2>
            <p><span style="color: #cccccc; font-size: 8pt;">该模型是开源的，可供所有人使用。</span></p>
        </div>
        `
    ,
    id6: `
        <div style="padding-bottom: 12px;">
            <p><span style="font-size: 8pt; color: #cccccc;"><strong>Modern Disney </strong>是一个基于Stable Diffusion 1.5的开源模型。</span></p>
            <p style="line-height: 2;"><span style="font-size: 12pt;"><strong>使用模型渲染的视频游戏角色：<img src="https://huggingface.co/nitrosocke/mo-di-diffusion/resolve/main/modi-samples-01s.jpg" alt="Videogame Samples" />使用模型渲染的动物角色：</strong></span></p>
            <p style="line-height: 2;"><span style="font-size: 12pt;"><strong><img src="https://huggingface.co/nitrosocke/mo-di-diffusion/resolve/main/modi-samples-02s.jpg" alt="Animal Samples" /></strong></span></p>
            <p style="line-height: 2;"><span style="font-size: 12pt;"><strong>使用模型渲染的汽车和风景：</strong></span></p>
            <p style="line-height: 2;"><span style="font-size: 12pt;"><strong><img src="https://huggingface.co/nitrosocke/mo-di-diffusion/resolve/main/modi-samples-03s.jpg" alt="Misc. Samples" /></strong></span></p>
            <h4 class="relative group flex items-center"><span style="font-size: 12pt;">劳拉&middot;克劳馥的提示和设置：</span></h4>
            <p><span style="color: #cccccc; font-size: 8pt;">关键词：modern disney lara croft </span></p>
            <p><span style="color: #cccccc; font-size: 8pt;">步数： 50， 采样器： euler_a， 种子： 3940025417， 宽高： 512x768</span></p>
            <h4 class="relative group flex items-center"><a id="prompt-and-settings-for-the-lion" class="block pr-1.5 text-lg with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full" href="https://huggingface.co/nitrosocke/mo-di-diffusion#prompt-and-settings-for-the-lion" rel="noopener nofollow"></a><span style="font-size: 12pt;">狮子的提示和设置：</span></h4>
            <p><span style="color: #cccccc; font-size: 8pt;">关键词：modern disney (baby lion) </span></p>
            <p><span style="color: #cccccc; font-size: 8pt;">排除项：person human</span></p>
            <p><span style="color: #cccccc; font-size: 8pt;"> 步数：50，采样器：euler_a，种子：1355059992，宽高：512x512</span></p>
        </div>
        `
    ,
    id3: `
        <div style="padding-bottom: 12px;">
            <p><span style="font-size: 8pt; color: #cccccc;">Openjourney是一个免费的Stable Diffusion开源模型。</span></p>
            <p style="line-height: 2;"><span style="font-size: 12pt;"><strong>使用示例：</strong></span><img src="https://s3.amazonaws.com/moonup/production/uploads/1667904587642-63265d019f9d19bfd4f45031.png" width="100%" /><img src="https://s3.amazonaws.com/moonup/production/uploads/1667904587623-63265d019f9d19bfd4f45031.png" width="100%" /><img src="https://s3.amazonaws.com/moonup/production/uploads/1667904587609-63265d019f9d19bfd4f45031.png" width="100%" /><img src="https://s3.amazonaws.com/moonup/production/uploads/1667904587646-63265d019f9d19bfd4f45031.png" width="100%" /></p>
        </div>
    `
    ,
    id1: `
        <div style="padding-bottom: 12px;">
            <p style="line-height: 2;"><span style="font-size: 12pt;"><strong>Stable Diffusion 官方免费开源模型</strong></span></p>
        </div>
    `
    ,
}
export function getContent(id) {
    return arr[id];
}