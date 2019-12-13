const path = require("path");
const sharp = require("sharp");
const glob = require("glob");

/**
 * Images
 */
var allImages = glob.sync("src/img/**/*", { nodir: true, absolute: false });
const widths = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
const buildImages = () => {
  widths.map(width => {
      allImages.map(async image => {
        try {
          const imgFullName = path.basename(image);
          const imgExt = image.substr(image.lastIndexOf("."));
          const imgName = imgFullName.replace(imgExt, "");
          const outputName = imgName + "_" + width + "w" + imgExt;

          const destination = image
            .replace("src/img/", "public/img/")
            .replace(imgFullName, outputName);

          await sharp(image)
            .resize(width)
            .toFile(destination);
        } catch (error) {
          console.log("error", error);
        }
      });
  });
};

buildImages();
