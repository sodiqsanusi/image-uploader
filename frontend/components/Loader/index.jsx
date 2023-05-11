import style from "./Loader.module.css";

const Loader = () => {
  return ( 
    <section className={style.container}>
      <div className={style.loadingBox}>
        <h1>Uploading...</h1>

        <div className={style.loadingTrack}>
          <span className={style.loadingThumb}></span>
        </div>
      </div>
    </section>
  );
}
 
export default Loader;