import CountdownDisplay from './CountdownDisplay';
import { useCountdown } from '../../hooks/useCountdown';

const ExpiredNotice = () => {
	return (
		<div className="expired-notice">
			<span>Expired!!!</span>
			<p>Please select a future date and time.</p>
		</div>
	);
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
	return (
		<div className="show-counter">
			<CountdownDisplay value={days} type={'Days'} isDanger={days <= 3} />:
			<CountdownDisplay value={hours} type={'Hours'} isDanger={false} />
			<p>:</p>
			<CountdownDisplay value={minutes} type={'Mins'} isDanger={false} />
			<p>:</p>
			<CountdownDisplay value={seconds} type={'Seconds'} isDanger={false} />
		</div>
	);
};

const CountdownTimer = ({ targetDate }) => {
	const [days, hours, minutes, seconds] = useCountdown(targetDate);

	if (days + hours + minutes + seconds <= 0) {
		return <ExpiredNotice />;
	} else {
		return (
			<ShowCounter
				days={days}
				hours={hours}
				minutes={minutes}
				seconds={seconds}
			/>
		);
	}
};

export default CountdownTimer;
