import Image from 'next/image'
import style from '../styles/index.module.css';
import mainImage from "../public/images/image.svg";
import Head from 'next/head';
import Loader from '@/components/Loader';
import Copyright from '@/components/Copyright';
import { useRef, useState } from 'react';

export default function Home() {

  let fileInputRef = useRef(null);
  let [clientError, setClientError] = useState({
    error: false,
    message: "",
  });

  let checkFileType = (uploadedFileType) => {
    let acceptedFileTypes = ["image/jpeg", "image/jpg", "image/png", "image/svg+xml", "image/gif"];

    if (acceptedFileTypes.indexOf(uploadedFileType) == -1) {
      return false;
    };
    return true;
  }

  let checkFileSize = (uploadedFileSize) => {
    let imageSizeLimit = 1000000;

    return imageSizeLimit >= uploadedFileSize;
  }

  let handleAddFile = async (e) => {
    let imageFile = e.target.files[0]
    if (!imageFile) {
      let noImagePresent = {
        error: true,
        message: "Do upload an image please"
      }
      setClientError(noImagePresent);
      return;
    }
    ////doneTodo: Confirm that the file sent is an image file that has been specified
    if (!checkFileType(imageFile.type)) {
      let wrongFileTypeError = {
        error: true,
        message: "Only image files (the ones specified) can be uploaded, upload a valid file",
      }
      setClientError(wrongFileTypeError);
      return;
    }
    ////doneTodo: Also make sure that the file size of the uploaded file is less than 1mb
    if (!checkFileSize(imageFile.size)) {
      let largeFileSizeError = {
        error: true,
        message: "Only image files of 1MB of size and smaller will be uploaded. Upload a smaller image"
      }

      setClientError(largeFileSizeError);
      return;
    }
    //! If any of the checks fail, send an error toast with the right message and exit the upload process
    console.log(imageFile);
  }
  let clickFileInput = () => {
    fileInputRef.current.click();
  }
  if (clientError) {
    console.log(clientError);
  }

  return (
    <>
      <Head>
        <title>Upload your image here!</title>
      </Head>
      <main className={style.container}>
        {/* <Loader /> */}
        <h1>Upload your image</h1>
        <div className={style.fileClarifications}>
          <h2>File should be a valid image</h2>
          <span>JPEG, JPG, PNG, SVG or GIF</span>
        </div>

        <section className={style.imageDrop} onClick={clickFileInput}>
          <Image
            src={mainImage}
            alt="Drag and drop your image here to upload it"
            priority
          />
          <p>Drag & drop your image here</p>
        </section>

        <p>Or</p>

        <input type="file" name="chooseFile" id="chooseFile" className={style.fileInput}
          accept=".jpeg,.jpg,.png,.svg,.gif" ref={fileInputRef} onChange={e => handleAddFile(e)}
        />
        <button className={style.fileButton}
          onClick={clickFileInput}
        >Choose a file</button>

        <Copyright />
      </main>
    </>
  )
}
