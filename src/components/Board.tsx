import React, { useState, useEffect } from "react";
import Square from "./Square";

interface Props {
  gameOver: boolean;
  p1Turn: boolean;
  setP1Turn: any
}

const Board = (props: Props) => {
  
  return (
  <div id="board-div">
    <div className="board-row">
      <Square id={1} parent={1} />
      <Square id={2} parent={1} />
      <Square id={3} parent={1} />
      <Square id={4} parent={1} />
      <Square id={5} parent={1} />
      <Square id={6} parent={1} />
      <Square id={7} parent={1} />
      <Square id={8} parent={1} />
    </div>
    <div className="board-row">
      <Square id={9} parent={2} />
      <Square id={10} parent={2} />
      <Square id={11} parent={2} />
      <Square id={12} parent={2} />
      <Square id={13} parent={2} />
      <Square id={14} parent={2} />
      <Square id={15} parent={2} />
      <Square id={16} parent={2} />
    </div>
    <div className="board-row">
      <Square id={17} parent={3} />
      <Square id={18} parent={3} />
      <Square id={19} parent={3} />
      <Square id={20} parent={3} />
      <Square id={21} parent={3} />
      <Square id={22} parent={3} />
      <Square id={23} parent={3} />
      <Square id={24} parent={3} />
    </div>
    <div className="board-row">
      <Square id={25} parent={4} />
      <Square id={26} parent={4} />
      <Square id={27} parent={4} />
      <Square id={28} parent={4} />
      <Square id={29} parent={4} />
      <Square id={30} parent={4} />
      <Square id={31} parent={4} />
      <Square id={32} parent={4} />
    </div>
    <div className="board-row">
      <Square id={33} parent={5} />
      <Square id={34} parent={5} />
      <Square id={35} parent={5} />
      <Square id={36} parent={5} />
      <Square id={37} parent={5} />
      <Square id={38} parent={5} />
      <Square id={39} parent={5} />
      <Square id={40} parent={5} />
    </div>
    <div className="board-row">
      <Square id={41} parent={6} />
      <Square id={42} parent={6} />
      <Square id={43} parent={6} />
      <Square id={44} parent={6} />
      <Square id={45} parent={6} />
      <Square id={46} parent={6} />
      <Square id={47} parent={6} />
      <Square id={48} parent={6} />
    </div>
    <div className="board-row">
      <Square id={49} parent={7} />
      <Square id={50} parent={7} />
      <Square id={51} parent={7} />
      <Square id={52} parent={7} />
      <Square id={53} parent={7} />
      <Square id={54} parent={7} />
      <Square id={55} parent={7} />
      <Square id={56} parent={7} />
    </div>
    <div className="board-row">
      <Square id={57} parent={8} />
      <Square id={58} parent={8} />
      <Square id={59} parent={8} />
      <Square id={60} parent={8} />
      <Square id={61} parent={8} />
      <Square id={62} parent={8} />
      <Square id={63} parent={8} />
      <Square id={64} parent={8} />
    </div>
  </div>
  );
};

export default Board;
