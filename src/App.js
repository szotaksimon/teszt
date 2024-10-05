import { useState } from "react";

function App() {
  const [isSUbmit, setSubmit] = useState(false)
  const dataContainer = () => {
    return (
      <>
        <div className="input-container">
          <div className="price-container">
            <label>1 doboz ára</label>
            <input type="number" name="price"></input>
          </div>

          <div className="count-container">
            <label>Szál / nap</label>
            <input type="number" name="count"></input>
          </div>
        </div>

        <div className="date-container">
          <label>Lerakás kezdete: </label>
          <input type="date" name="date"></input>
        </div>
      
      </>
    )
  }
    const congratContainer = () => {
      return (
        <div>
          <p>Congratulations!</p>
        </div>
      )
  } 

  const handleSubmit = () => {
    setSubmit(!isSUbmit)
  }
  return (
    <div className="App">

      {isSUbmit ? congratContainer() : dataContainer()}

      <div className="submit-container">
        <button onClick={handleSubmit}>Bevitel</button>
      </div>


    </div>
  );
}
export default App;
