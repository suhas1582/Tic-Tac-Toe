import React, { Fragment, useState, useEffect } from "react";
import Board from "./components/Board";
import { Container, Button } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const size = new Array(9).fill("empty");

const App = () => {
  // Creating and initializing states
  const [isCross, setIsCross] = useState(false);
  const [turn, setTurn] = useState("Circle");
  const [winMessage, setWinMessage] = useState("");
  const [arr, setArr] = useState([]);

  // Methods for various events

  const callToast = (message, type) => {
    if (type === "error") {
      toast.error(message, { position: toast.POSITION.TOP_RIGHT });
    } else {
      toast.success(message, { position: toast.POSITION.TOP_RIGHT });
    }
  };

  const ButtonClickedHandler = (i) => {
    // console.log("Inside bch");
    if (!winMessage) {
      if (size[i] === "empty") {
        size[i] = isCross ? "cross" : "circle";
        setIsCross(!isCross);
        let newTurn = turn === "Circle" ? "Cross" : "Circle";
        setTurn(newTurn);
      } else {
        callToast("Already Selected", "error");
      }
    } else {
      callToast(winMessage, "success");
    }
    checkWin();
  };

  useEffect(()=>{
    if(winMessage) {
      callToast(winMessage, "success");
    }
  }, [winMessage]);

  const checkWin = () => {
    if (size[0] !== "empty" && size[0] === size[1] && size[1] === size[2]) {
      setWinMessage(`${size[0]} won`);
      setArr([0,1,2]);
      //callToast(winMessage, "success");
    }
    else if (size[3] !== "empty" && size[3] === size[4] && size[4] === size[5]) {
      setWinMessage(`${size[3]} won`);
      setArr([3,4,5]);
      //callToast(winMessage, "success");
    }
    else if (size[6] !== "empty" && size[6] === size[7] && size[7] === size[8]) {
      setWinMessage(`${size[6]} won`);
      setArr([6,7,8]);
      // callToast(winMessage, "success");
    }
    else if (size[0] !== "empty" && size[0] === size[3] && size[3] === size[6]) {
      setWinMessage(`${size[0]} won`);
      setArr([0,3,6]);
      // callToast(winMessage, "success");
    }
    else if (size[1] !== "empty" && size[1] === size[4] && size[4] === size[7]) {
      setWinMessage(`${size[1]} won`);
      setArr([1,4,7]);
      // callToast(winMessage, "success");
    }
    else if (size[2] !== "empty" && size[2] === size[5] && size[5] === size[8]) {
      setWinMessage(`${size[2]} won`);
      setArr([2,5,8]);
      // callToast(winMessage, "success");
    }
    else if (size[0] !== "empty" && size[0] === size[4] && size[4] === size[8]) {
      setWinMessage(`${size[0]} won`);
      setArr([0,4,8]);
      // callToast(winMessage, "success");
    }
    else if (size[2] !== "empty" && size[2] === size[4] && size[4] === size[6]) {
      setWinMessage(`${size[2]} won`);
      setArr([2,4,6]);
      // callToast(winMessage, "success");
    }
    
  };

  const resetGame = () => {
    size.fill("empty");
    setIsCross(false);
    setTurn("Circle");
    setWinMessage("");
    setArr([]);
  };

  // Style
  const style = {
    color: "white",
    textAlign: "center",
  };

  // Main return
  return (
    <Fragment>
      <h1 style={style}>React Tic-Tac-Toe try</h1>
      {
        winMessage ? <h2 style={style}>{winMessage}</h2> : <h2 style={style}>{turn}'s Turn</h2> 
      }
      
      <Container fluid className={"mt-5"}>
        <div className="Board divBoard">
          {
            size.map((ele, index) => {
              return <Board
                name={ele}
                clicked={() => ButtonClickedHandler(index)}
                key={index}
                color={(index===arr[0]) || index === arr[1] || index === arr[2]}
              />
              
          })
          }
        </div>
      </Container>
      <div
        style={{
          alignItems: "center",
          height: "auto",
          justifyContent: "center",
          marginTop: "50px",
          textAlign: "center",
          padding: "0 200px",
        }}
      >
        <Button className="btn-danger btl-lg btn-block" onClick={resetGame}>
          Reset Game
        </Button>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default App;
