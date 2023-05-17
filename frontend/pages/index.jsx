import Image from 'next/image'
import style from '../styles/index.module.css';
import mainImage from "../public/images/image.svg";
import Head from 'next/head';
import Loader from '@/components/Loader';
import Copyright from '@/components/Copyright';
import { useRef } from 'react';

export default function Home() {

  let fileInputRef = useRef(null)

  let imageFile
  let handleAddFile = async () => {
    [imageFile] = await window.showOpenFilePicker();
    console.log(imageFile);
    let realFile = await imageFile.getFile();
    console.log(realFile);
  }
  let clickFileInput = () => {
    fileInputRef.current.click();
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

        <section className={style.imageDrop}>
          <Image
            src={mainImage}
            alt="Drag and drop your image here to upload it"
            priority
          />
          <p>Drag & drop your image here</p>
        </section>

        <p>Or</p>

        <input type="file" name="chooseFile" id="chooseFile" className={style.fileInput} 
         accept=".jpeg,.jpg,.png,.svg,.gif" ref={fileInputRef} onChange={handleAddFile}
        />
        <button className={style.fileButton}
          onClick={clickFileInput}
        >Choose a file</button>
                 
        <Copyright />
      </main>
    </>
  )
}
