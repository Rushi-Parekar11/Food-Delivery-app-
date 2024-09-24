import React from 'react'


function Card(props) {
    // console.log(props.ele)
    return (
    
                <div className="card" style={{ width: '18rem',height:'470px' }}>
                    <img style={{ width: '100%', height: '200px', objectfit: 'cover' }} src={props.ele.image} class="card-img-top" alt="Maggi" />
                    <div class="card-body">
                        <h5 class="card-title">{props.ele.name}</h5>
                        <p class="card-text">{props.ele.description.slice(0, 85)}<a style={{color:'blue'}}>..more</a></p>
                        <p><strong>Category:</strong> {props.ele.category}</p>
                        <p><strong>Price:</strong> {props.ele.price}</p>
                        <a href="/" class="btn btn-primary">Order Now</a>
                    </div>
                </div>

    )
}
export default Card
