// 1) Import the React and ReactDOM librairies
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);
// 4) Create a component
//function App() {
/*
    let message = 'Bye there';
    if(Math.random() > 0.5){
        message = 'hello there';
    }

    return <h1>{message}</h1>; 
*/

//--------------------------------
/*
    return <h1>{new Date().toLocaleTimeString()}</h1>; 
*/

//----------- use variable ---------------------
/*
    const name = 'bla bla';
    const age = 25;
    return (
    <h1>
      hi, my name is   {name} my age is {age}
    </h1>
    );
*/

//--------------- use props-----------------

/*
const inputType = "number";
const inputMin = 5;

return (
    <input 
        type={inputType}
        min={inputMin}
        style={{border: '3px solid blue'}}
    />
);
*/

//--------------------------------
/*
    return <textarea autoFocus={true} spellCheck/>;
*/

// ------- Exercise -------
/*
    return (
        <div className="wrapper">
            <textarea 
                readOnly
                maxLength={3}
                spellCheck
                style={{backgroundColor: 'gray'}}
            />

        </div>
    );
*/
//}




// 5) Show the component on the screen
root.render(<App />);