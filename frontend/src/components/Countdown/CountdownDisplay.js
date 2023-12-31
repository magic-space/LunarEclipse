const CountdownDisplay = ({ value, type, isDanger }) => {
	return (
		<div className={isDanger ? 'countdown danger' : 'countdown'}>
			<p>{value}</p>
			<span>{type}</span>
		</div>
	);
};

export default CountdownDisplay;
