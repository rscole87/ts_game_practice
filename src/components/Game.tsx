import React, {useState, useEffect} from 'react'
import Board from './Board'

const Game = () => {
    const [gameOver, setGameOver] = useState<boolean>(false)
    const [p1Turn, setP1Turn] = useState<boolean>(true)
    


    return (
        <Board gameOver={gameOver} p1Turn={p1Turn} setP1Turn={setP1Turn}/>
    )
}

export default Game