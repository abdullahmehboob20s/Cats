import HowToMintCard from "components/HowToMintCard";
import React from "react";
import styles from "scss/layout/HowToMint.module.scss";
import metamaskLogo from "assets/images/metamask-logo.png";
import checkIcon from "assets/images/check-icon.png";
import walletIcon from "assets/images/wallet-icon.png";
import lightningIcon from "assets/images/lightning-icon.png";

function HowToMint() {
  return (
    <div className={`${styles.wrapper}`}>
      <div className="container-wrapper py-100px">
        <h1 className="text-center fs-40px yellow mb-50px uppercase">
          How To Mint
        </h1>

        <main>
          <HowToMintCard
            circleImg={<img src={metamaskLogo} alt="img" />}
            circleBg="white"
          >
            <p className="text-center white fs-18px weight-4">
              1. Connect your MetaMask Wallet.
            </p>
          </HowToMintCard>
          <HowToMintCard
            circleImg={<img src={checkIcon} alt="img" />}
            circleBg="#83b784"
          >
            <p className="text-center white fs-18px weight-4">
              2. Check your Whitelist eligibility.
            </p>
          </HowToMintCard>
          <HowToMintCard
            circleImg={<img src={walletIcon} alt="img" />}
            circleBg="#a36969"
          >
            <p className="text-center white fs-18px weight-4">
              3. Max 1 mint per whitelisted wallet.
            </p>
          </HowToMintCard>
          <HowToMintCard
            circleImg={<img src={lightningIcon} alt="img" />}
            circleBg="#e19a12"
          >
            <p className="text-center white fs-18px weight-4">
              4. Mint for <span className="sky-blue">FREE.</span>{" "}
              <span className="dark-blue-2">
                (You will only be responsible for the gas fee.)
              </span>
            </p>
          </HowToMintCard>
        </main>
      </div>
    </div>
  );
}

export default HowToMint;
