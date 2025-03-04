import React from "react"
interface MyComponentProps {
     id: number;
     value: string;
     onChecked: ()=> void; 
}
const Lap: React.FC<MyComponentProps> = ({value, onChecked}) => {
     return (
          <li className="lap-time">
               <h3>{value}</h3>
               <button className="btn" onClick = { () => {onChecked()}} >Delete</button>
          </li>  
     )
}

export default Lap
