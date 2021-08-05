import { Component } from 'react';
import styles from './FeedbackCounter.module.css';

class FeedbackCounter extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        clicked: false,
        total: 0,
    };

    clickOnGoodRate = () => {
        this.setState({
            good: this.state.good + 1,
            clicked: true,
            total: this.state.total + 1,
        });
    };
    clickOnNeutralRate = () => {
        this.setState({
            neutral: this.state.neutral + 1,
            clicked: true,
            total: this.state.total + 1,
        });
    };

    clickOnBadRate = () => {
        this.setState({
            bad: this.state.bad + 1,
            clicked: true,
            total: this.state.total + 1,
        });
    };

    countPositiveFeedbackPercentage = () => {
        return Math.round((100 / this.state.total) * this.state.good);
    };

    render() {
        return (
            <div className={styles.wrapper}>
                <h2>Please leave feedback</h2>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <button
                            onClick={this.clickOnGoodRate}
                            type="button"
                            className={styles.good}
                        >
                            Good
                        </button>
                    </li>
                    <li className={styles.item}>
                        <button
                            onClick={this.clickOnNeutralRate}
                            type="button"
                            className={styles.neutral}
                        >
                            Neutral
                        </button>
                    </li>
                    <li className={styles.item}>
                        <button
                            onClick={this.clickOnBadRate}
                            type="button"
                            className={styles.bad}
                        >
                            Bad
                        </button>
                    </li>
                </ul>
                {this.state.clicked ? (
                    <div className={(styles.statWrapper, styles.isActive)}>
                        <h2>Statistics</h2>
                        <ul className={styles.statisticList}>
                            <li className={styles.statisticItem}>
                                <span>Good: {this.state.good}</span>
                            </li>
                            <li className={styles.statisticItem}>
                                <span>Neutral:{this.state.neutral}</span>
                            </li>
                            <li className={styles.statisticItem}>
                                <span>Bad:{this.state.bad}</span>
                            </li>
                            <li className={styles.statisticItem}>
                                <span>Total:{this.state.total}</span>
                            </li>
                            <li>
                                <span>
                                    Positive feedback:{' '}
                                    {this.countPositiveFeedbackPercentage()}%
                                </span>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <h2>No feedback given</h2>
                )}
            </div>
        );
    }
}

export default FeedbackCounter;
