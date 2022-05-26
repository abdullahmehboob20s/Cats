import styles from "scss/components/TimerBox.module.scss";

const TimerBox = ({ count, title }) => {
  return (
    <div className={`${styles.timerBox}`}>
      <div className="fs-56px">
        <h1 className="white weight-8">
          {count}
          <span className={`${styles.title} fs-18px white weight-4 uppercase`}>
            {title}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default TimerBox;
