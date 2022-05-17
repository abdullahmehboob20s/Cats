import React from "react";
import styles from "scss/layout/Footer.module.scss";

function Footer() {
  return (
    <div className={`${styles.footer}`}>
      <div className="container-wrapper py-15px">
        <h1 className="white text-center fs-16px weight-5">
          Copyright © Boss Planet | Boss Cat Rocket Club | Terms & Conditions
        </h1>
      </div>
    </div>
  );
}

export default Footer;
