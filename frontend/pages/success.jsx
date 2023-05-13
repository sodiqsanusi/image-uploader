import { MdCheckCircle, MdContentCopy } from "react-icons/md";
import styles from "../styles/success.module.css";
import testImage from "../public/images/FSiE4wdXEAAGkRb.jpeg";
import Image from "next/image";
import Head from "next/head";

const Success = () => {
  return (
    <>
      <Head>
        <title>Image Upload was successful!</title>
      </Head>
      <main className={styles.container}>
        <MdCheckCircle />
        <h1>Uploaded Successfully!</h1>
        <div className={styles.imgContainer}>
          <Image
            src={testImage} priority
            alt="The image uploaded from your device"
          />
        </div>
        <div className={styles.copyLinkContainer}>
          <p>https://images.yourdomain.com/8309i3090u2ifjoj09130jodjej0p9</p>
          <button> <MdContentCopy /> </button>
        </div>
      </main>
    </>
  );
}

export default Success;