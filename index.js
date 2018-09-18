import $ from 'jQuery'

import {
  downloadQrcode,
  toQrcode,
}
from "./qrcode-bg-logo";

function download({
  el,
  pictureName,
}) {
  downloadQrcode({
    jQuery: $,
    el: el,
    pictureName: pictureName,
  })
}

function qrcodeLogo({
  el,
  text,
  width,
  height,
  background,
  foreground,
  src,
  imgWidth = width / 4,
  imgHeight = height / 4,
}) {
  toQrcode({
    jQuery: $,
    el: el,
    text: text,
    width: width,
    height: height,
    background: background,
    foreground: foreground,
    src: src,
    imgWidth: imgWidth,
    imgHeight: imgHeight,
  });
}
export default {
  download,
  qrcodeLogo,
};