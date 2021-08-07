import styles from './StatisticList.module.css';

const StatisticList = ({ good, neutral, bad, total, positivePercent }) => {
    return (
        <div className={(styles.statWrapper, styles.isActive)}>
            <h2>Statistics</h2>
            <ul className={styles.statisticList}>
                <li className={styles.statisticItem}>
                    <span>Good: {good}</span>
                </li>
                <li className={styles.statisticItem}>
                    <span>Neutral:{neutral}</span>
                </li>
                <li className={styles.statisticItem}>
                    <span>Bad:{bad}</span>
                </li>
                <li className={styles.statisticItem}>
                    <span>Total:{total}</span>
                </li>
                <li className={styles.statisticItem}>
                    <span>Positive feedback: {positivePercent}%</span>
                </li>
            </ul>
        </div>
    );
};

export default StatisticList;
