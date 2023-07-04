import axios from "axios";
import { useState } from "react";

export let postImageFile = async (imageFile) => {
  const formData = new FormData();
  formData.append("image", imageFile);

  try {
    let response = await axios.post("https://image-uploader-f08q.onrender.com/image/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Accept": 'application/json',
        "X-Requested-With": 'XMLHttpRequest',
      }
    })
    return response.data
  } catch (error) {
    console.log(error);
    return false;
  }
}