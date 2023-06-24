import { useState } from 'react';
import Styles from './itemboard.module.css';
import PropTypes from 'prop-types';

let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];

const setitem = (value, setValue, setChange, change, number) => {
	if (value !== '') {
		return;
	}
	if (setWin(arr)) {
		return;
	}
	change ? setValue('X') : setValue('O');
	change ? (arr[number] = 1) : (arr[number] = -1);
	setChange(!change);
	setWin(arr);
};

const setWin = (arr) => {
	const arrWin =[
		arr[0] + arr[1] + arr[2],
		arr[3] + arr[4] + arr[5],
		arr[6] + arr[7] + arr[8],
		arr[0] + arr[3] + arr[6],
		arr[1] + arr[4] + arr[7],
		arr[2] + arr[5] + arr[8],
		arr[0] + arr[4] + arr[8],
		arr[2] + arr[4] + arr[6],
	];
	let winner = '';
	arrWin.forEach(item => {
		if(item === 3){
			winner = 'Победили крестики';
		}
		if(item === -3){
			winner = 'Победили нолики';
		}
	})
	return winner;
}

const StateLessitem = ({ change, setChange, value0, value1, value2, value3, value4, value5, value6, value7, value8, setValue0, setValue1, setValue2, setValue3, setValue4, setValue5, setValue6, setValue7, setValue8 }) => {
	return (
		<>
		<div className={Styles.board}>
		  <div className={Styles.itemboard} onClick={() => setitem(value0, setValue0, setChange, change, 0)}> {value0} </div>
			<div className={Styles.itemboard} onClick={() => setitem(value1, setValue1, setChange, change, 1)}> {value1} </div>
			<div className={Styles.itemboard} onClick={() => setitem(value2, setValue2, setChange, change, 2)}> {value2} </div>
			<div className={Styles.itemboard} onClick={() => setitem(value3, setValue3, setChange, change, 3)}> {value3} </div>
			<div className={Styles.itemboard} onClick={() => setitem(value4, setValue4, setChange, change, 4)}> {value4} </div>
			<div className={Styles.itemboard} onClick={() => setitem(value5, setValue5, setChange, change, 5)}> {value5} </div>
			<div className={Styles.itemboard} onClick={() => setitem(value6, setValue6, setChange, change, 6)}> {value6} </div>
			<div className={Styles.itemboard} onClick={() => setitem(value7, setValue7, setChange, change, 7)}> {value7} </div>
			<div className={Styles.itemboard} onClick={() => setitem(value8, setValue8, setChange, change, 8)}> {value8} </div>
		</div>
		</>
	);
};

StateLessitem.propTypes = {
	change : PropTypes.bool,
	value0 : PropTypes.string,
	value1 : PropTypes.string,
	value2 : PropTypes.string,
	value3 : PropTypes.string,
	value4 : PropTypes.string,
	value5 : PropTypes.string,
	value6 : PropTypes.string,
	value7 : PropTypes.string,
	value8 : PropTypes.string,
}

const RestartBtn = ({setChange, setValue0, setValue1, setValue2, setValue3, setValue4, setValue5, setValue6, setValue7, setValue8 }) => {
	return (
		<button className = {Styles.restartBtn} onClick={() =>{
			setChange(true);
			setValue0('');
			setValue1('');
			setValue2('');
			setValue3('');
			setValue4('');
			setValue5('');
			setValue6('');
			setValue7('');
			setValue8('');
			arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	    setWin(arr)
		}}>
		Начать заново
		</button>
	);
};

const Inform = ({change}) => {
	const movePlayer = change ? 'Ходят крестики' : 'Ходят нолики'
	const drawOrwin = arr.includes(0) ?  movePlayer: 'Ничья';

	return (
		<div className = {Styles.inform}>
			{setWin(arr) ? 'Игра окончена' : drawOrwin}
		</div>
	)
}

Inform.propTypes = {
	change : PropTypes.bool,
}

const InformWin = () => {
	return (
		<div className = {Styles.inform}>
			{setWin(arr)}
		</div>
	)
}

export default function SetFullItemboard  () {
	const [change, setChange] = useState(true);
	const [value0, setValue0] = useState('');
	const [value1, setValue1] = useState('');
	const [value2, setValue2] = useState('');
	const [value3, setValue3] = useState('');
	const [value4, setValue4] = useState('');
	const [value5, setValue5] = useState('');
	const [value6, setValue6] = useState('');
	const [value7, setValue7] = useState('');
	const [value8, setValue8] = useState('');

	return (
		<div className = {Styles.gameArea}>
		<Inform change={change} />
		<InformWin />
		<StateLessitem
		  change={change}
			setChange={setChange}
			value0={value0}
			setValue0={setValue0}
			value1={value1}
			setValue1={setValue1}
			value2={value2}
			setValue2={setValue2}
			value3={value3}
			setValue3={setValue3}
			value4={value4}
			setValue4={setValue4}
			value5={value5}
			setValue5={setValue5}
			value6={value6}
			setValue6={setValue6}
			value7={value7}
			setValue7={setValue7}
			value8={value8}
			setValue8={setValue8}
		/>
		<RestartBtn
			setChange={setChange}
			setValue0={setValue0}
			setValue1={setValue1}
			setValue2={setValue2}
			setValue3={setValue3}
			setValue4={setValue4}
			setValue5={setValue5}
			setValue6={setValue6}
			setValue7={setValue7}
			setValue8={setValue8}
		/>
		</div>
	);
};
