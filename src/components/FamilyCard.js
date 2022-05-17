import React from "react";
import styles from "scss/components/FamilyCard.module.scss";

function FamilyCard({ img, title }) {
  return (
    <div className={`${styles.card}`}>
      <img src={img} className="mb-20px" alt="" />
      <p className="text-center white fs-24px weight-4">{title}</p>
    </div>
  );
}

export default FamilyCard;
