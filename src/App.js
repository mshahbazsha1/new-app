import { useEffect, useState } from 'react';
import './App.css';



function App() {
  const [tasbeh, setTasbeh] = useState(0);

// this is useEffect
 useEffect( () => { 

  fetch("https://fakestoreapi.com/products").then((data) => {
    return data.json();
  }).then( (exam) => {
    console.log(exam)

  }).catch((error) => {
    console.log(error);
  })


 },[] );
//  End of useEffect

  return (
    <div className="App">
      <div className="App-header">
        <h1>{tasbeh}</h1>
        <button onClick={()=> setTasbeh(tasbeh +1)}>Plus</button>
       
      </div>
    </div>
  );
}

export default App;
