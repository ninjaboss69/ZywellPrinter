const ThermalPrinter = require("node-thermal-printer").printer;
const PrinterTypes = require("node-thermal-printer").types;
const sharp = require("sharp");

const transformImage = async (inputImage) => {
  try {
    const success = await sharp(inputImage)
      .resize(384, null)
      .png({
        compressionLevel: 9,
        palette: true,
        quality: 100,
        depth: 8,
      })
      .toFile("output.png");

    console.log("success", success);
  } catch (err) {
    console.log(err);
  }
};

let printer = new ThermalPrinter({
  type: PrinterTypes.EPSON,
  interface: "/dev/usb/lp0",
});

printer.alignCenter();

const printImg = async () => {
  await transformImage("me.jpg");
  await printer.printImage("./output.png");
  await printer.execute();
  console.log("Printing done");
};

printImg();
