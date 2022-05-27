import React, { useState } from "react";
import styles from "scss/layout/Hero.module.scss";
import voxCatTitle from "assets/images/vox-cat-title.png";
import Modal from "components/Modal";
import cat1 from "assets/images/cat1.png";
import cat2 from "assets/images/cat2.png";
import cat3 from "assets/images/cat3.png";
import cat4 from "assets/images/cat4.png";
import cat from "assets/images/hero-bgs/cat.png";

function Hero() {
  const [isConnected, setIsConnected] = useState(false);
  const [isMintAvailable, setIsMintAvailable] = useState(false);
  const [minted, setIsMinted] = useState(false);
  const [counter, setCounter] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((val) => !val);
  };

  const mint = () => {
    if (counter > 1) {
      setCounter(1);
      toggleModal();
      setIsMinted(false);
      return;
    }

    setIsMinted((val) => !val);
    setCounter((val) => (val = val + 1));
  };

  return (
    <div className={`${styles.wrapper}`}>
      <div className="container-wrapper">
        <main>
          <img
            src={voxCatTitle}
            className={`${styles.logoImg} mb-40px`}
            alt=""
          />
          <p className="fs-24px lh-1_6 white weight-4 mb-45px">
            Introducing the official cross-chain Boss Planet compatible Avatars,
            a collection of 3,333 unique Vox Cats to be minted for{" "}
            <span className="">FREE</span> on the Ethereum Blockchain.
          </p>
          {isConnected ? (
            <>
              <button
                className="button-yellow uppercase pointer white weight-6 fs-22px font-secondary radius-4px mb-20px"
                onClick={mint}
              >
                Mint
              </button>

              <div className={styles.walletConnected}>
                <p className="fs-18px sky-blue-2">Wallet Connected :</p>
                <p className={`${styles.walletId} fs-18px white`}>
                  0x2D4e853789754960d06E90c4159e704bA8768478
                </p>
              </div>

              {minted ? (
                <div
                  className={`${styles.mintingNotAvailable} fs-20px white weight-4`}
                >
                  Minting not available yet. / Sorry, the connected wallet is
                  not whitelisted. / Minting is finished.
                </div>
              ) : (
                ""
              )}
            </>
          ) : (
            <button
              className="button-yellow uppercase pointer white weight-6 fs-22px font-secondary radius-4px"
              onClick={() => setIsConnected(true)}
            >
              connect wallet
            </button>
          )}

          <img src={cat} className={`${styles.bg_cat}`} alt="" />
        </main>

        {/* <Modal img={cat4} shouldShow={showModal} setModalState={setShowModal}>
          <h1 className="fs-26px white weight-9 uppercase">
            SORRY...YOU'RE NOT ON THE WHITELIST.
          </h1>
        </Modal> */}

        {/* <Modal img={cat1} shouldShow={showModal} setModalState={setShowModal}>
          <h1 className="fs-26px white weight-9 uppercase">
            <span className="yellow">YAY!</span> YOU ARE WHITELISTED!
          </h1>
        </Modal> */}

        {/* <Modal img={cat4} shouldShow={showModal} setModalState={setShowModal}>
          <h1 className="fs-26px white weight-9 uppercase">
            OOPS...SOMETHING WENT WRONG. <br /> PLEASE TRY AGAIN.
          </h1>
        </Modal> */}

        <Modal img={cat1} shouldShow={showModal} setModalState={setShowModal}>
          <h1 className="fs-26px white weight-9 uppercase">
            MINT <span className="yellow">SUCCESSFUL</span>!
          </h1>
        </Modal>
      </div>
    </div>
  );
}

export default Hero;
