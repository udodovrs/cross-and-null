import { SetFullItemboard } from './itemboard'
import Styles from './board.module.css';


export const Board = () =>{
	return(
	 <div className = {Styles.gameArea}>
	   <SetFullItemboard />
	</div>
	)
}
