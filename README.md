# qrcode-bg-logo

## 介绍

- 可以生成带图片、logo 的二维码

- 可以生成 PNG 图片保存到本地

## 前提

目前支持的浏览器谷歌、火狐，暂不支持safari

二维码中心的 logo 图片会有跨域问题，暂时支持允许跨域的服务器存储的图片

## 使用

### CommonJS
```html
<div id='canvas'></div>
<div @click='downloadFile'>下载</div>
```
```javascript
import qrcode from "qrcode-bg-logo";
methods:{
  downloadFile() {
    qrcode.downloadQrcode({
      el:"#canvas",
      pictureName: 'qrcode' //保存为图片名称
    })
  }
}
mounted() {
  qrcode.toQrcode({
	  el: "#canvas", //id名或class名
	  text: "https://www.baidu.com", //域名
	  width: 200,
	  height: 200,
	  background: "#ffffff", //二维码的后景色
	  foreground: "#000000", //二维码的前景色
	  src:'http://img1.imgtn.bdimg.com/it/u=3386592165,3716246810&fm=200&gp=0.jpg', //图片路径
	  imgWidth: 50, //图片宽度
	  imgHeight: 50, //图片高度
  });
}
```


### script 引入,需依赖 jquery

```html
<div id="output"></div>
<div id='downloadBtn'>下载</div>
```
```js
<script src="jquery-3.1.0.min.js"></script>
<script type="text/javascript" src='qrcode-bg-logo.js'></script>
Qrocde.toQrcode({
    jQuery:$,
    el: '#output',
    text:'https://www.baidu.com',
    width: 200,
    height: 200,
    background:"#ffffff",
    foreground:"#000000",
    src:'http://img1.imgtn.bdimg.com/it/u=3386592165,3716246810&fm=200&gp=0.jpg',
    imgWidth :200 / 4,
    imgHeight :200 / 4,
})

$('.downloadBtn').on('click', function () {
  Qrocde.downloadQrcode({
    jQuery:$,
    el:'#output',
    pictureName: '图片名称',
  })
})
```


