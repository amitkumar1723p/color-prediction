
import { useState, useEffect } from "react";
import './App.css';

function App() {

  const [randomNumber, setrandomNumber] = useState(0)
  const [count, setCount] = useState(null)
  const [countdown, setCountDown] = useState(false)
  const [show, setshow] = useState(false)
  const [background, setBackground] = useState("")
  useEffect(() => {

    if (countdown === true && count !== null) {
      setshow(false)
      let countdowInterval = setTimeout(() => {
        setCount(count - 1)

      }, 1000);
      if (count <= 0) {
        setshow(true)
        setCountDown(false)
        clearInterval(countdowInterval)


        if (randomNumber >= 1 && randomNumber <= 33) {
          setBackground("red")

        }
        else if (randomNumber >= 34 && randomNumber <= 66) {
          setBackground("green")
        }

        else if (randomNumber >= 67 && randomNumber <= 100) {
          setBackground("blue")
        }


      }
    }


  }, [countdown, count])

  const gameLogic = () => {


    setrandomNumber(Math.floor(Math.random() * 100) + 1)
    setCountDown(true)
    setCount(10)





  }

  return (
    <div className="App">
      <h1> click the bottom button </h1>
      <div className="parent">
        <button className="child red" onClick={gameLogic} disabled={countdown === true ? true : false}>

        </button>
        <button className="child green" onClick={gameLogic} disabled={countdown === true ? true : false}>


        </button>
        <button className="child yellow" onClick={gameLogic} disabled={countdown === true ? true : false}>

        </button>
      </div>
      <div className="parent second">
        <div className="secondCount">{count}</div>{
          console.log(count)


        }
        {
          console.log(countdown)
        }


      </div>

      {
        show == true &&

        <div className="parent result">
          <div className="resultChild">

            Result is   <span className="emptychild" style={{ backgroundColor: background }}></span>
          </div>


        </div>}
    </div>
  );
}

export default App;
