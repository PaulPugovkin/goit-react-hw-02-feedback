import { Component } from 'react';
import styles from './FeedbackCounter.module.css';
import StatisticList from '../StatisticList';

const options = ['good', 'neutral', 'bad'];

class FeedbackCounter extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        clicked: false,
        total: 0,
    };

    handlerClickOnRate = e => {
        const { name } = e.currentTarget;
        this.setState({
            [name]: this.state[name] + 1,
            clicked: true,
            total: this.state.total + 1,
        });
    };

    countPositiveFeedbackPercentage = () => {
        return Math.round((100 / this.state.total) * this.state.good);
    };

    render() {
        const { good, neutral, bad, total } = this.state;
        return (
            <div className={styles.wrapper}>
                <h2>Please leave feedback</h2>
                <ul className={styles.list}>
                    {options.map(option => (
                        <li className={styles.item}>
                            <button
                                name={option}
                                onClick={this.handlerClickOnRate}
                                type="button"
                                className={styles[option]}
                            >
                                {option}
                            </button>
                        </li>
                    ))}
                </ul>
                {this.state.clicked ? (
                    <StatisticList
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positivePercent={this.countPositiveFeedbackPercentage()}
                    />
                ) : (
                    <h2>No feedback given</h2>
                )}
            </div>
        );
    }
}

export default FeedbackCounter;
