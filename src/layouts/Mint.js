import React from "react";
import styles from "scss/layout/Mint.module.scss";
import caldendarIcon from "assets/images/calendar-icon.png";
import TimerBox from "components/TimerBox";

function Mint() {
  return (
    <div>
      <div className="container-wrapper py-30px">
        <div className={styles.section}>
          <main>
            <img
              src={caldendarIcon}
              className={`${styles.caldendarIcon}`}
              alt=""
            />
            <h1>
              <span className="fs-40px yellow weight-9">MINT DATE:</span>{" "}
              <span className="fs-40px white weight-4">MAY 20th 17:00 PST</span>
            </h1>
          </main>
          <aside>
            <TimerBox count={7} title="DAYS" />
            <TimerBox count={16} title="HOURS" />
            <TimerBox count={38} title="MINS" />
            <TimerBox count={42} title="SEC" />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Mint;
