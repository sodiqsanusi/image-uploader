import Image from 'next/image'
import style from '../styles/index.module.css';
import mainImage from "../public/images/image.svg";
import Head from 'next/head';
import Loader from '@/components/Loader';
import Copyright from '@/components/Copyright';
import { useEffect, useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { checkFileSize, checkFileType } from '@/utils/fileHelper';
import "react-toastify/dist/ReactToastify.css";

export default function Home() {

  let fileInputRef = useRef(null);
  let dropzone = useRef(null);

  let [clientError, setClientError] = useState({
    error: false,
    message: "",
  });
  let [dragging, setDragging] = useState(false);

  useEffect(() => {
    dropzone.current.addEventListener("dragover", handleDragOver);
    dropzone.current.addEventListener("drop", handleDrop);
    dropzone.current.addEventListener("dragenter", handleDragEnter);
    dropzone.current.addEventListener("dragleave", handleDragLeave);

    return () => {
      dropzone.current.removeEventListener("dragover", handleDragOver);
      dropzone.current.removeEventListener("drop", handleDrop);
      dropzone.current.removeEventListener("dragenter", handleDragEnter);
      dropzone.current.removeEventListener("dragenter", handleDragEnter);
    }
  }, [])

  let handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }

  let handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setDragging(false);

    let {files} = e.dataTransfer;

    if(files && files.length == 1){
      handleAddFile(files)
      return;
    }

    let excessFilesError = {
      error: true,
      message: "Only one file can be uploaded. Upload a single image",
    }
    setClientError(excessFilesError);
    return; 
  }

  let handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if(e.target === dropzone.current){
      setDragging(true);
    }
  }

  let handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if(e.target != dropzone.current){
      setDragging(false);
    }
  }

  let handleAddFile = async (sentFileList) => {
    let imageFile = sentFileList[0]
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
        message: "Only image files 1MB of size and smaller will be uploaded. Upload a smaller image"
      }

      setClientError(largeFileSizeError);
      return;
    }
    ////doneTodo: If any of the checks fail, send an error toast with the right message and exit the upload process
    console.log(imageFile);
  }
  let clickFileInput = () => {
    fileInputRef.current.click();
  }
  if (clientError.error) {
    toast.error(clientError.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    setClientError({
      error: false,
      message: "",
    })
  }

  //todo: work on the drag and drop feature

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

        <section className={dragging ? `${style.imageDrop} ${style.activeImageDrop}`: style.imageDrop}
         onClick={clickFileInput} ref={dropzone}>
            <>
              <Image
                src={mainImage}
                alt="Drag and drop your image here to upload it"
                priority
              />
              {dragging ? <p>Drop to upload your image</p> : <p>Drag & drop your image here</p>}
            </>
        </section>

        <p>Or</p>

        <input type="file" name="chooseFile" id="chooseFile" className={style.fileInput}
          accept=".jpeg,.jpg,.png,.svg,.gif" ref={fileInputRef} onChange={e => handleAddFile(e.target.files)}
        />
        <button className={style.fileButton}
          onClick={clickFileInput}
        >Choose a file</button>

        <Copyright />
      </main>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
      />
    </>
  )
}
