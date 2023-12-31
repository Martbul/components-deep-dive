
import { useState , useEffect} from "react";
import styles from './App.module.css'
import StarWars from "./StarWars";

function App() {
  const [numbers,setNumbers] = useState([1,2,3,4,5])
  const [count, setCount] = useState(0)
  useEffect(()=>{
  //  console.log('mount commponnet');
  },[])
  useEffect(()=>{
//console.log(`update ${count}`);
  },[numbers,count])


  //shte se izpulni samo ako count se e promenilo(ako ne e v useEffect pri vsqko prerenderirane na stranicate shte se ispulnqva)
  useEffect(()=>{
    setTimeout(()=> setCount(s=> s+1), 1000)
  },[count])

  const onClick = () =>{
    //za da baca trqbva da polzvash NE MUTIRASHTI FUNKCII ZA MASIVI(neshta kato shift , pop i dr ne bacat shtoto mutirat masiva a ne pravqt nova referenciq)
    setNumbers(oldState =>oldState.slice(0, oldState.length -1) )
  }

 
 
  return (
    <div>
      <StarWars/>
      <h3>Count:{count}</h3>
       <ul>
          {numbers.map((number,index) => (
          <li
               data-key={index}
               key={index}
               className={styles.listItem}
           >
            {number * 2}
            </li>)
            )}
    </ul>

    <button onClick={onClick}>remove</button>
    <button onClick={()=> setCount(c=>c +1)}>+</button>
    </div>
   
  );
}

export default App;
