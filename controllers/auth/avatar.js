const fs = require("fs/promises");
const path = require("path");
//const Jimp = require("jimp");
const { getResizeImg } = require("../../middlewares");

const { User } = require("../../model");

const userDir = path.join(__dirname, "../../public/avatars");

const avatar = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  console.log(tempUpload);
  const { _id } = req.user;
  await getResizeImg(tempUpload);
  const fileName = `User_${_id}_avatar-${originalname}`;
  try {
    const resultUpload = path.join(userDir, fileName);
    await fs.rename(tempUpload, resultUpload);
    const avatarURL = path.join("./avatars", fileName);

    const result = await User.findOneAndUpdate(
      req.user.avatarURL,
      { avatarURL },
      {
        new: true,
      }
    );
    res.json({
      status: "Success",
      code: 200,
      data: {
        avatarURL: result.avatarURL,
      },
    });
  } catch (error) {
    await fs.unlink(tempUpload);
    throw error;
  }
};

module.exports = avatar;
