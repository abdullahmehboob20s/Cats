import React from "react";
import styles from "scss/layout/Hero.module.scss";
import voxCatTitle from "assets/images/vox-cat-title.png";

function Hero() {
  return (
    <div className={`${styles.wrapper}`}>
      <div className="container-wrapper">
        <main>
          <img src={voxCatTitle} className="mb-40px" alt="" />

          <p className="fs-24px lh-1_6 white weight-4 mb-45px">
            Introducing the official cross-chain Boss Planet compatible Avatars,
            a collection of 3,333 unique Vox Cats to be minted for{" "}
            <span className="">FREE</span> on the Ethereum Blockchain.
          </p>

          <button className="button-yellow uppercase pointer white weight-6 fs-22px font-secondary radius-4px">
            connect wallet
          </button>
        </main>
      </div>
    </div>
  );
}

export default Hero;
