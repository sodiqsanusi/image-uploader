const asyncHandler = require("express-async-handler");
const path = require("path");
const Image = require("../models/imageModel");
const mongoose = require("mongoose");


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
  
  //* Make sure the ID sent is a valid Mongoose ObjectID 
  let isIDValid = mongoose.Types.ObjectId.isValid(imageID);
  const requestedImage = isIDValid && await Image.findById(imageID);
  //* Check if the requested image ID is present in the database
  if(!requestedImage){
    res.status(400);
    throw new Error("The requested image does not exist, make sure the ID in your request is correct");
  }

  let imagePath = path.resolve(__dirname, "../uploads/images/", requestedImage.fileLocation);
  res.status(200).sendFile(imagePath);
})


module.exports = {
  uploadImage,
  getImage,
}