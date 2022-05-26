import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import styles from "scss/components/HowToMintCard.module.scss";

function HowToMintCard({ circleImg, circleBg, children }) {
  const isBellow640px = useMediaQuery("(max-width: 40em)");

  return (
    <div className={`${styles.card}`}>
      <div
        className={`${styles.circle} ${isBellow640px ? "mb-20px" : "mb-40px"}`}
        style={{ backgroundColor: circleBg }}
      >
        {circleImg}
      </div>

      {children}
    </div>
  );
}

export default HowToMintCard;
