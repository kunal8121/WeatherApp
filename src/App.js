import React from "react";
import WeatherApp from "./WeatherApp";  // Ensure this matches the file name exactly!

function App() {
    return (
        <div>
            <WeatherApp />
        </div>
    );
}

export default App;


















// import React, { useState, useRef } from 'react';

// const App = () => {

//     const [time, setTime] = useState(0);
//     const [isRunning, setIsRunning] = useState(false);
//     const intervalRef = useRef(null);

//     // ✅ Function to Start Timer
//     const startTimer = () => {
//         if (isRunning) return; // Prevent multiple intervals
//         setIsRunning(true);

//         intervalRef.current = setInterval(() => {
//             setTime(prevTime => prevTime + 1);
//         }, 1000);
//     };

//     // ✅ Function to Pause Timer
//     const pauseTimer = () => {
//         clearInterval(intervalRef.current);
//         setIsRunning(false);
//     };

//     // ✅ Function to Reset Timer
//     const resetTimer = () => {
//         clearInterval(intervalRef.current);
//         setTime(0);
//         setIsRunning(false);
//     };

//     // ✅ Format Time in HH:MM:SS
//     const formatTime = () => {
//         const hours = Math.floor(time / 3600).toString().padStart(2, '0');
//         const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
//         const seconds = (time % 60).toString().padStart(2, '0');
//         return `${hours}:${minutes}:${seconds}`;
//     };

//     return (
//         <div style={{ textAlign: 'center', marginTop: '50px' }}>
//             <h1>Stopwatch</h1>
//             <h2>{formatTime()}</h2>
//             <button onClick={startTimer}>Start Timer</button>
//             <button onClick={pauseTimer} style={{ marginLeft: '10px' }}>Pause</button>
//             <button onClick={resetTimer} style={{ marginLeft: '10px' }}>Reset</button>
//         </div>
//     );
// }

// export default App;






// import React, { useState} from 'react';



// const App = () => {

//     const [tasks , setTasks] = useState([]);
//     const [task , setTask] = useState("");

//     const addTask = () =>{
//         if(task.trim()!==""){
//             setTasks([...tasks , task]);
//             setTask("");
//         }
//     };

//     const removeTask = (index) =>{
//         setTasks(tasks.filter((_ , i) => i!==index));
//     };

//     return(
//         <div style ={{textAlign :  "center" , marginTop: "50px"}}>
//             <h1>TO-DO-LIST</h1>
//             <input
//              type="text" 
//              value = {task}
//              onChange={(e) => setTask(e.target.value)} 
//              placeholder = "Enter Task.."
//              />
//              <button onClick={addTask}>Add Task</button>

//              <ul>
//                 {tasks.map((t , index) =>(
//                    <li key = {index}>
//                     {t} <button onClick={() => removeTask(index)}>RemoveTask</button>
//                    </li> 
//                 ))}
//              </ul>
//         </div>
//     );
// };






// import React, { useState} from 'react';



// const App = () => {

//     const [city , setCity] = useState("");
//     const [temperature , setTemperature] = useState(null);

//     const getWeather = (city) => {
//         if(city.trim !==""){
//             const randomTemp = Math.floor(Math.random() * (35 - 15 +1)) + 15;
//             setTemperature(randomTemp);
//         }
//     };

//     return(
//         <div style ={{textAlign :  "center" , marginTop: "50px"}}>
//             <h1>WEATHER-APP</h1>
//             <input
//              type="text" 
//              value = {city}
//              onChange={(e) => setCity(e.target.value)} 
//              placeholder = "Enter City.."
//              />
//              <button onClick={getWeather}> Get Weather</button>
           
//            {temperature !== null && (
//               <h2>The Temperature of {city} is {temperature} c
//               </h2>
//            )}
//         </div>
//     );
// };









// import React, { useState} from 'react';



// const App = () => {

//     const [color , setColor] = useState('#ffffff');
    
//     const generateColor = () => {
//         const random = '#' + Math.floor(Math.random() * 16777215).toString(16);
//         setColor(random);
//     };
  

//     return(
//         <div style ={{
//              backgroundColor : color,
//              height : "100vh",
//              display : "flex",
//              justifyContent : "center",
//              alignItems : "center",
//              flexDirection: "column"
//              }}>
        
//         <h1>Random Color Generator</h1>
//          <button onClick={generateColor}
//          style= {{
//             padding: "10px 20px",
//             fontSize : "18px",
//             curson : "pointer",
//             border : "none",
//             backgroundColor : "black",
//             color : "white",
//             boarderRadius : "5px",
//             marginTop : "20px"
//          }}>
            
//             Change Color</button>
    
//         </div>
//     );
// };

// export default App;