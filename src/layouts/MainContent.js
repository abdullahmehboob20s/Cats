import ImagesGrid from "components/ImagesGrid";
import WhiteList from "components/WhiteList";
import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import styles from "scss/layout/MainContent.module.scss";

function MainContent() {
  const isBellow1024px = useMediaQuery("(max-width : 64em)");
  return (
    <div className={`${styles.wrapper}`}>
      <div className="container-wrapper py-100px">
        <div className={isBellow1024px ? "mb-100px" : "mb-50px"}>
          <ImagesGrid />
        </div>
        <div>
          <WhiteList />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
