import React, {useState} from 'react'

interface Props {
    id: number
    parent: number
    piece?: string | null 
}

const Square = (props: Props) => {
    const [occupied, setOccupied] = useState<boolean>(false)
    let piece = props.piece

    if (props.piece){
        setOccupied(true)
    }

    return (
        <div className="board-square" style={{backgroundColor: `${(props.id % 2 === 0 && props.parent % 2 === 0 ? 'transparent' 
        : props.id % 2 !== 0 && props.parent % 2 !== 0 ? 'transparent'
        : 'black') }` }}
        >
            {piece}
        </div>
    )
}

export default Square;
