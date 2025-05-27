const ConditionalOutputInLine = () => {
	const loggedIn = false;
	return (
		<div id="wd-conditional-output-in-line">
			{loggedIn && <h2>Welcome In Line</h2>}
			{!loggedIn && <h2>Please login In Line</h2>}
		</div>
	);
}
export default ConditionalOutputInLine;