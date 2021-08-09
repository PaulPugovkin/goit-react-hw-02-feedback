import { Component } from 'react';
import Section from './Components/Section/Section';
import FeedbackCounter from './Components/FeedbackCounter';
import StaticticList from './Components/StatisticList';

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    total = () => {
        const stateValues = Object.values(this.state);
        return stateValues.reduce((acc, value) => acc + value, 0);
    };

    countPositiveFeedbackPercentage = () => {
        return Math.round((100 / this.total()) * this.state.good);
    };

    handlerClickOnRate = e => {
        const { name } = e.currentTarget;
        this.setState({
            [name]: this.state[name] + 1,
        });
    };

    render() {
        const { total, handlerClickOnRate, countPositiveFeedbackPercentage } =
            this;
        const feedbackOptions = Object.keys(this.state);
        const test = this.state;

        return (
            <>
                <Section title="Please leave your feedback">
                    <FeedbackCounter
                        handlerClickOnRate={handlerClickOnRate}
                        options={feedbackOptions}
                    />
                </Section>
                <Section
                    title={total() > 0 ? 'Statistics' : 'No feedback given'}
                >
                    {total() > 0 ? (
                        <StaticticList
                            options={test}
                            positive={countPositiveFeedbackPercentage()}
                            total={total()}
                        />
                    ) : null}
                </Section>
            </>
        );
    }
}

export default App;
