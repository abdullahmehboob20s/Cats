import React from "react";
import styles from "scss/components/SocialIcon.module.scss";

function SocialIcon({ link, target = "_self", rel = "noreferrer", children }) {
  return (
    <a
      href={link}
      target={target}
      rel={rel}
      className={`${styles.link} pointer`}
    >
      {children}
    </a>
  );
}

export default SocialIcon;
