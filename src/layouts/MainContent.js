import ImagesGrid from "components/ImagesGrid";
import WhiteList from "components/WhiteList";
import React from "react";
import styles from "scss/layout/MainContent.module.scss";

function MainContent() {
  return (
    <div className={`${styles.wrapper}`}>
      <div className="container-wrapper py-100px">
        <div className="mb-50px">
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
