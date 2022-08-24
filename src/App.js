import React, { useState } from "react";

import "./App.css";

function App() {
    const [isClicked, setIsClicked] = useState(false);
    function clickButton() {
        setIsClicked(!isClicked);
    }

    return (
        <div className="App">
            <button onClick={clickButton}> Change text</button>
            {isClicked ? <h1>not</h1> : <h1>yes</h1>}
        </div>
    );
}

export default App;
