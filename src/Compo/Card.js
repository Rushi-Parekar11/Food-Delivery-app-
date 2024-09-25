import React from 'react'
import "../Compo/Card.scss"



function Card(props) {
    // console.log(props.ele)
    return (
    
        <div id='crd' className="card shadow-sm" style={{ width: '18rem', height: '365px', borderRadius: '15px', overflow: 'hidden' }}>
        <img  style={{ width: '100%', height: '200px', objectFit: 'cover', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} src={props.ele.image}  className="card-img-top"  alt={props.ele.name}/>
        <div className="card-body" style={{ padding: '15px' }}>
          <p id='nm' className="card-title" style={{  fontSize: '1.25rem', marginBottom: '10px' }}>{props.ele.name}</p>
          <p id='des' className="card-text" style={{ marginBottom: '15px', color: '#666' }}> {props.ele.description.slice(0, 25)}...     <span id='pri'>{props.ele.price}</span></p>
          <p> </p>
          <p id='cat' >Category:{props.ele.category}   </p>
          <a href="/" className="btn btn-outline-danger" style={{ width: '100%', borderRadius: '10px' }}>Add Menu</a>
        </div>
      </div>
      

    )
}
export default Card
