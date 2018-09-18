import $ from 'jQuery'

import {
  downloadQrcode,
  toQrcode,
}
from "./qrcode-bg-logo";

export default {
  downloadQrcode: function ({
    el,
    pictureName,
  }) {
    downloadQrcode({
      jQuery: $,
      el: el,
      pictureName: pictureName,
    })
  },
  toQrcode: function ({
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
  },
};
