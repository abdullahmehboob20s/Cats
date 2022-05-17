import React from "react";
import styles from "scss/components/ImagesGrid.module.scss";
import gridImg1 from "assets/images/gridImg1.png";
import gridImg2 from "assets/images/gridImg2.png";
import gridImg3 from "assets/images/gridImg3.png";
import gridImg4 from "assets/images/gridImg4.png";
import gridImg5 from "assets/images/gridImg5.png";
import gridImg6 from "assets/images/gridImg6.png";
import gridImg7 from "assets/images/gridImg7.png";
import gridImg8 from "assets/images/gridImg8.png";

function ImagesGrid() {
  return (
    <div className={`${styles.wrapper}`}>
      <img src={gridImg1} alt="" className={`${styles.img1} w-full`} />
      <img src={gridImg2} alt="" className={`${styles.img2} w-full`} />
      <img src={gridImg3} alt="" className={`${styles.img3} w-full`} />
      <img src={gridImg4} alt="" className={`${styles.img4} w-full`} />
      <img src={gridImg5} alt="" className={`${styles.img5} w-full`} />
      <img src={gridImg6} alt="" className={`${styles.img6} w-full`} />
      <img src={gridImg7} alt="" className={`${styles.img7} w-full`} />
      <img src={gridImg8} alt="" className={`${styles.img8} w-full`} />
      <main>
        <section>
          <h1 className="font-secondary fs-46px weight-6 gradient-text mb-5px">
            3,333
          </h1>
          <h2 className="uppercase yellow fs-20px mb-20px">
            <span className="white">::</span> Total Supply
          </h2>

          <p className="fs-18px white weight-4 lh-1_6">
            With the tremendous success of 3 top-ten all-time projects in the
            Cardano NFT space, Boss Planet Vox Cats is the first NFT collection
            from the Boss Cat Rocket Club family to launch on Ethereum. Not only
            making the cross-chain Boss Planet Metaverse a reality, but also
            uniting and building the communities stronger than ever.
          </p>
        </section>
      </main>
    </div>
  );
}

export default ImagesGrid;
