const asyncHandler = require("express-async-handler");
const Image = require("../models/imageModel");


const uploadImage = asyncHandler(async (req, res) => {
  if (!req.file) {
    res.status(400)
    throw new Error("Please upload a valid image!")
  }

  const newImage = await Image.create({
    fileLocation: req.file.filename,
  })

  if (newImage) {
    res.status(201).json({
      message: "Image uploaded successfully",
      imageID: newImage.id,
    });
  } else {
    res.status(500);
    throw new Error("Saving the image details to the database was unsucessful, do try again.");
  }
})

const getImage = asyncHandler(async (req, res) => {
  const imageID = req.params.imageID;

  res.status(200).json({
    message: `You're looking for the image with ID: ${imageID}`
  })
})


module.exports = {
  uploadImage,
  getImage,
}