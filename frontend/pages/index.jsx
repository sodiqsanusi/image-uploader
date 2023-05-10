import Image from 'next/image'
import style from '../styles/index.module.css';
import mainImage from "../public/images/image.svg";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Upload your image here!</title>
      </Head>
      <main className={style.container}>
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

        <button>Choose a file</button>
      </main>
    </>
  )
}
