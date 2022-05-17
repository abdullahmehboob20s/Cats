import FamilyCard from "components/FamilyCard";
import React from "react";
import styles from "scss/layout/Family.module.scss";
import familyImg1 from "assets/images/familyImg1.png";
import familyImg2 from "assets/images/familyImg2.png";
import familyImg3 from "assets/images/familyImg3.png";

function Family() {
  return (
    <div className={`${styles.wrapper}`}>
      <div className="container-wrapper py-100px">
        <h1 className="text-center fs-40px yellow mb-60px uppercase">
          <span className="white">THE</span> BOSS CAT ROCKET CLUB{" "}
          <span className="white">FAMILY</span>
        </h1>

        <main>
          <FamilyCard title="Boss Cat Rocket Club" img={familyImg1} />
          <FamilyCard title="Boss Cat Rocket Parts" img={familyImg2} />
          <FamilyCard title="Boss Planet" img={familyImg3} />
        </main>
      </div>
    </div>
  );
}

export default Family;
