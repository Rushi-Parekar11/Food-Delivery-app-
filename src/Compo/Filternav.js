import React from 'react'

function Filternav() {
  return (
    <div>
       <div className="navdiv">
        <nav>
          <button className="navbtn" tabindex="1" onClick={()=>filterItem("all")}>All</button>
          <button className="navbtn" tabindex="0" onClick={()=>filterItem("breakfast")}>Breakfast</button>
          <button className="navbtn" tabindex="0" onClick={()=>filterItem("lunch")}>Lunch</button>
          <button className="navbtn" tabindex="0" onClick={()=>filterItem("dinner")} >Dinner</button>
        </nav>
       </div>
    </div>
  )
}

export default Filternav
