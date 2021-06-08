import React from "react";
import {FaTimes, FaRegCircle, FaPen} from "react-icons/fa";
import "../App.css";

const Board = (props) => {
    switch(props.name) {
        case "cross":
            if(props.color) {
                return (
                    <FaTimes className="Tile Shape" onClick={props.clicked} style={{color: "abcd14"}}/>
                );
            }
            else {
                return (
                    <FaTimes className="Tile Shape" onClick={props.clicked}/>
                );
            }
        case "circle":
            if(props.color) {
                return (
                    <FaRegCircle className="Tile Shape" onClick={props.clicked} style={{color: "abcd14"}}/>
                );
            }
            else {
                return (
                    <FaRegCircle className="Tile Shape" onClick={props.clicked}/>
                );
            }
        default:
            return <FaPen className="Tile" onClick={props.clicked}/>
    }
}

export default Board;