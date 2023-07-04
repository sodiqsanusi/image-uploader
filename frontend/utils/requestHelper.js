import axios from "axios";

export let postImageFile = async (imageFile) => {
  const formData = new FormData();
  formData.append("image", imageFile);

  try {
    let response = await axios.post("https://image-uploader-f08q.onrender.com/image/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    })  
    return response
  } catch (error) {
    console.log(error);
    return false;
  }
}