# qrcode-bg-logo

## 介绍

* 可以生成带图片、logo的二维码

* 可以生成PNG图片保存到本地

## 前提

暂时只支持谷歌浏览器进行下载

二维码中心的logo图片会有跨域问题，暂时支持允许跨域的服务器存储的图片

## 使用

```html
<div id='canvas'></div>
<div @click='downloadFile'>下载</div>
```

```javascript
import qrcode from "qrcode-bg-logo";

data() {
  return {
    el: '',
  };
},

methods:{
  downloadFile() {
    qrcode.downloadQrcode({
      el:this.el,
      pictureName: 'qrcode' //保存为图片名称
    })
  }
},
mounted() {
  this.el = qrcode.toQrcode({
	  el: "#canvas", //id名或class名
	  text: "https://www.baidu.com", //域名
	  width: 200,
	  height: 200,
	  background: "#ffffff", //二维码的后景色
	  foreground: "#000000", //二维码的前景色
	  src:'', //图片路径
	  imgWidth: 50, //图片宽度
	  imgHeight: 50, //图片高度
  });
}
```