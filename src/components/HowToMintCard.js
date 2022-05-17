import React from "react";
import styles from "scss/components/HowToMintCard.module.scss";

function HowToMintCard({ circleImg, circleBg, children }) {
  return (
    <div className={`${styles.card}`}>
      <div
        className={`${styles.circle} mb-40px`}
        style={{ backgroundColor: circleBg }}
      >
        {circleImg}
      </div>

      {children}
    </div>
  );
}

export default HowToMintCard;
