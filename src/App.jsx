import "./App.css";
import { useState , useEffect} from "react";

function App() {
  const [numbers,setNumbers] = useState([1,2,3,4,5])

  useEffect(()=>{
    console.log('render');
  })

  const onClick = () =>{
    setNumbers(oldState =>oldState.slice(0, oldState.length -1) )
  }

 
 
  return (
    <div>
       <ul>
          {numbers.map((number,index) => <li data-key={index} key={index}>{number * 2}</li>)}
    </ul>

    <button onClick={onClick}>remove</button>
    </div>
   
  );
}

export default App;
