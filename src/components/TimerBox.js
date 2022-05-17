import styles from "scss/components/TimerBox.module.scss";

const TimerBox = ({ count, title }) => {
  return (
    <div className={`${styles.timerBox}`}>
      <h1 className="fs-50px white weight-8">{count}</h1>
      <span className="fs-18px white weight-4 uppercase">{title}</span>
    </div>
  );
};

export default TimerBox;
