export let checkFileType = (uploadedFileType) => {
  let acceptedFileTypes = ["image/jpeg", "image/jpg", "image/png", "image/svg+xml", "image/gif"];

  if (acceptedFileTypes.indexOf(uploadedFileType) == -1) {
    return false;
  };
  return true;
}

export let checkFileSize = (uploadedFileSize) => {
  let imageSizeLimit = 1000000;

  return imageSizeLimit >= uploadedFileSize;
}
