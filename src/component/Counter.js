import withCounter from './HOC/withCounter';

const Counter = ({count, handleCount}) => {
	return <button type="button" onClick={handleCount}> Clicked {count} {count < 2 ? 'time ' : 'times'}</button>
}

export default withCounter(Counter);
