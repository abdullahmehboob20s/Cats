import React, { useEffect, useRef, useState, useMemo } from "react";
import styles from "scss/layout/Mint.module.scss";
import caldendarIcon from "assets/images/calendar-icon.png";
import TimerBox from "components/TimerBox";
import useMediaQuery from "hooks/useMediaQuery";

function Mint() {
  // const [deadline, setDeadline] = useState("May 26, 2022 17:00:00 PST");
  const date = new Date("May 26, 2022 17:00:00 PST");
  const isBellow1024px = useMediaQuery("(max-width : 64em)");

  const deadline = date.getTime().toLocaleString("en-US", {
    // timeZone: "America/Los_Angeles",
    dateStyle: "full",
    timeStyle: "full",
  });

  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  let interval = useRef();

  const startTimer = () => {
    const countdownDate = parseInt(deadline.split(",").join(""));
    // const countdownDate = new Date(deadline).getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        // stop our timer
        clearInterval(interval.current);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

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
            <TimerBox count={timerDays} title="DAYS" />
            <TimerBox
              count={timerHours}
              title={isBellow1024px ? "HRS" : "HOURS"}
            />
            <TimerBox
              count={timerMinutes}
              title={isBellow1024px ? "MIN" : "MINS"}
            />
            <TimerBox count={timerSeconds} title="SEC" />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Mint;
