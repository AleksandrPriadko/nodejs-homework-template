const Jimp = require("jimp");

function getResizeImg(path) {
  return Jimp.read(path)
    .then((avatar) => {
      return avatar.resize(250, 250).write(path); // resize
    })
    .catch((err) => {
      console.error(err);
    });
}

module.exports = getResizeImg;
