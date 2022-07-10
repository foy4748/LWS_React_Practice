import withCounter from "./HOC/withCounter";

const DoubleTapCounter = ({count, handleCount}) => {
	return <h1 onDoubleClick={handleCount}>Double Tapped {count} {count < 2 ? 'time ' : 'times'}</h1>
}

export default withCounter(DoubleTapCounter);
