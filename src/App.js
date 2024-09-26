import Resturent from "./Compo/Resturent";
import "./Compo/Res.scss";
import Menu from "./Compo/MenuApi";
import { useState } from "react";
import Firstpage from "./Compo/Firstpage";

function App() {

  const [menudata,setmenudata]=useState(Menu);
  console.log(menudata)
  

  const filterItem=(category)=>{
    if(category==="all" ){
      setmenudata(Menu)
      return
    }


  const updatedlist = Menu.filter((ele)=>{
     return ele.category === category;
  });
  setmenudata(updatedlist)
  
  }
  return (

    <>
    <div className="all">

    <Firstpage/>
    <div className="navdiv">
        <nav>
          <button className="navbtn" tabindex="1" onClick={()=>filterItem("all")}> show All</button>
          <button className="navbtn" tabindex="0" onClick={()=>filterItem("breakfast")}>Breakfast</button>
          <button className="navbtn" tabindex="0" onClick={()=>filterItem("lunch")}>Lunch</button>
          <button className="navbtn" tabindex="0" onClick={()=>filterItem("dinner")} >Dinner</button>
        </nav>
       </div>
    <div className="main" >
     <Resturent  menudata={menudata}/> 
    </div>



    </div>
    </>
  )
}
export default App; 