const arr = {
	id9: `SDXL 目前最强大的模型`,
    id8: `
        <div style="padding-bottom: 12px;">
            <p style="line-height: 2;"><span style="font-size: 12pt;"><strong>使用示例：</strong></span></p>
            <p><span style="color: #cccccc; font-size: 10pt;">关键词: RAW photo, a close up portrait photo of 26 y.o woman in wastelander clothes, long haircut, pale skin, slim body, background is city ruins, (high detailed skin:1.2), 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3</span></p>
            <p><span style="color: #cccccc; font-size: 10pt;">排除项: (deformed iris, deformed pupils, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime:1.4), text, close up, cropped, out of frame, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck</span></p>
            <p><span style="color: #cccccc; font-size: 10pt;">采样器: euler 或者 dpm</span></p>
            <p><span style="color: #cccccc; font-size: 10pt;">步数: 25</span></p>
            <p><span style="color: #cccccc; font-size: 10pt;">图像放大: 1-2</span></p>
            <p><span style="color: #cccccc; font-size: 10pt;">提示强度: 3-7</span></p>
        </div>
        `
    ,
    id7: `
        <div style="padding-bottom: 12px;">
            <br />
            <p>
                <span style="font-size: 12pt;">
                这是在具有未来派科幻主题的高质量3D图像上训练的微调Stable Diffusion 2.0模型，使用时需在关键词中加入"future style"。
                </span>
            </p>
            <br />
            <p>
                <span style="font-size: 11pt;line-height: 2;">
                    <strong>使用模型渲染的人物：</strong>
                </span>
                <img src="https://huggingface.co/nitrosocke/Future-Diffusion/resolve/main/images/future-diffusion-samples01s.png" alt="Characters Samples" />
            </p>
            <p>
                <span style="font-size: 11pt;line-height: 2;">
                    <strong>使用模型渲染的汽车和动物：</strong>
                </span>
                <img src="https://huggingface.co/nitrosocke/Future-Diffusion/resolve/main/images/future-diffusion-samples02s.png" alt="Misc. Samples" />
            </p>
            <p>
                <span style="font-size: 11pt;line-height: 2;">
                    <strong>使用模型渲染的景观：</strong>
                </span>
                <img src="https://huggingface.co/nitrosocke/Future-Diffusion/resolve/main/images/future-diffusion-samples03s.png" alt="Landscape 1" />
            </p>
            <br />
            <h4 class="relative group flex items-center">
                <span style="font-size: 11pt;">人物的提示和设置：</span>
            </h4>
            <p><span style="color: #cccccc; font-size: 10pt;">关键词: future style [subject]</span></p>
            <p><span style="color: #cccccc; font-size: 10pt;">排除项: duplicate heads bad anatomy</span></p>
            <p><span style="color: #cccccc; font-size: 10pt;">步数： 20</span></p>
            <p><span style="color: #cccccc; font-size: 10pt;">采样器： euler_a</span></p>
            <p><span style="color: #cccccc; font-size: 10pt;">宽高： 512x704</span></p>
            <p><span style="color: #cccccc; font-size: 10pt;">提示强度: 7</span></p>
            <br />
            <h4 class="relative group flex items-center">
                <span style="font-size: 11pt;">地形的提示和设置：</span>
            </h4>
            <p><span style="color: #cccccc; font-size: 10pt;">关键词: ffuture style city market street level at night</span></p>
            <p><span style="color: #cccccc; font-size: 10pt;">排除项: blurry fog soft</span></p>
            <p><span style="color: #cccccc; font-size: 10pt;">步数： 20</span></p>
            <p><span style="color: #cccccc; font-size: 10pt;">采样器： euler_a</span></p>
            <p><span style="color: #cccccc; font-size: 10pt;">宽高： 1024x576</span></p>
            <p><span style="color: #cccccc; font-size: 10pt;">提示强度: 7</span></p>
            <br />
            <h4 class="relative group flex items-center">
                <span style="font-size: 11pt;">许可证：</span>
            </h4>
            <p><span style="color: #cccccc; font-size: 10pt;">该模型是开源的，可供所有人使用。</span></p>
        </div>
        `
    ,
    id6: `
        <div style="padding-bottom: 12px;">
            <br />
            <p>
                <span style="font-size: 12pt;">
                    <strong>Modern Disney(现代迪士尼风格)</strong>是一个基于Stable Diffusion 1.5的开源模型，使用时需在关键词中加入"modern disney style"。
                </span>
            </p>
            <br />
            <p>
                <span style="font-size: 11pt;line-height: 2;">
                    <strong>使用模型渲染的视频游戏角色：</strong>
                </span>
                <img src="https://huggingface.co/nitrosocke/mo-di-diffusion/resolve/main/modi-samples-01s.jpg" alt="Videogame Samples" />
            </p>
            <p>
                <span style="font-size: 11pt;line-height: 2;">
                    <strong>使用模型渲染的动物角色：</strong>
                </span>
                <img src="https://huggingface.co/nitrosocke/mo-di-diffusion/resolve/main/modi-samples-02s.jpg" alt="Animal Samples" />
            </p>
            <p>
                <span style="font-size: 11pt;line-height: 2;">
                    <strong>使用模型渲染的汽车和风景：</strong>
                </span>
                <img src="https://huggingface.co/nitrosocke/mo-di-diffusion/resolve/main/modi-samples-03s.jpg" alt="Misc. Samples" />
            </p>
            <br />
            <h4 class="relative group flex items-center">
                <span style="font-size: 11pt;">劳拉&middot;克劳馥的提示和设置：</span>
            </h4>
            <p><span style="color: #cccccc; font-size: 10pt;">关键词: modern disney lara croft</span></p>
            <p><span style="color: #cccccc; font-size: 10pt;">步数： 50</span></p>
            <p><span style="color: #cccccc; font-size: 10pt;">采样器： euler_a</span></p>
            <p><span style="color: #cccccc; font-size: 10pt;">种子： 3940025417</span></p>
            <p><span style="color: #cccccc; font-size: 10pt;">宽高： 512x768</span></p>
            <p><span style="color: #cccccc; font-size: 10pt;">提示强度: 7</span></p>
            <br />
            <h4 class="relative group flex items-center">
                <span style="font-size: 11pt;">狮子的提示和设置：</span>
            </h4>
            <p><span style="color: #cccccc; font-size: 10pt;">关键词: modern disney (baby lion)</span></p>
            <p><span style="color: #cccccc; font-size: 10pt;">排除项: person human</span></p>
            <p><span style="color: #cccccc; font-size: 10pt;">步数： 50</span></p>
            <p><span style="color: #cccccc; font-size: 10pt;">采样器： euler_a</span></p>
            <p><span style="color: #cccccc; font-size: 10pt;">种子： 1355059992</span></p>
            <p><span style="color: #cccccc; font-size: 10pt;">宽高： 512x512</span></p>
            <p><span style="color: #cccccc; font-size: 10pt;">提示强度: 7</span></p>
        </div>
        `
    ,
    id3: `
        <div style="padding-bottom: 12px;">
        <br />
            <p>
                <span style="font-size: 12pt;">
                    <strong>Openjourney</strong>是一个基于Midjourney的微调模型。
                </span>
            </p>
            <br />
            <p>
                <span style="font-size: 11pt;line-height: 2;">
                    <strong>不再需要在关键词中加入"mdjrny-v4 style"</strong>
                </span><br />
                <img src="https://s3.us-east-1.amazonaws.com/prompthero-newsletter/Group-66.png" width="100%" />
            </p>
        </div>
    `
    ,
    id4: `
        <div style="padding-bottom: 12px;">
        <br />
            <p>
                <span style="font-size: 12pt;">
                    <strong>Openjourney</strong>是一个基于Midjourney的微调模型，使用时需在关键词中加入"mdjrny-v4 style"。
                </span>
            </p>
            <br />
            <p>
                <span style="font-size: 11pt;line-height: 2;">
                    <strong>Stable Diffusion v1.5 对比 Openjourney: </strong>
                </span>
                <p><span style="color: #cccccc; font-size: 10pt;">相同的关键词，只是在开头加上"mdjrny-v4 style"。</span></p>
                <br />
                <img src="https://s3.amazonaws.com/moonup/production/uploads/1667904587642-63265d019f9d19bfd4f45031.png" width="100%" />
                <img src="https://s3.amazonaws.com/moonup/production/uploads/1667904587623-63265d019f9d19bfd4f45031.png" width="100%" />
                <img src="https://s3.amazonaws.com/moonup/production/uploads/1667904587609-63265d019f9d19bfd4f45031.png" width="100%" />
                <img src="https://s3.amazonaws.com/moonup/production/uploads/1667904587646-63265d019f9d19bfd4f45031.png" width="100%" />
            </p>
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