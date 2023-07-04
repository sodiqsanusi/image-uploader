import { MdCheckCircle, MdContentCopy } from "react-icons/md";
import styles from "../styles/success.module.css";
import testImage from "../public/images/FSiE4wdXEAAGkRb.jpeg";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";

const Success = () => {

  const router = useRouter();
  let {id, clientImg} = router.query;
  console.log(id, clientImg)
  
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
            src={clientImg} priority
            alt="The image uploaded from your device"
            width={375}
            height={342}
          />
        </div>
        <div className={styles.copyLinkContainer}>
          <p>{`https://image-uploader-f08q.onrender.com/image/${id}`}</p>
          <button> <MdContentCopy /> </button>
        </div>
      </main>
    </>
  );
}

export default Success;