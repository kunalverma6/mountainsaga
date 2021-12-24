import React from 'react'
import { Link } from 'react-router-dom'
import Tell from './Tell'

const Card = (props) => {
    return (
        <>
<div className="card" >
  <img src={props.imgsrc} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.texty}</p>
    <Link to="/"   className="btn btn-primary">{props.btnsrc}</Link>
  </div>
</div>
        </>
    )
}

export default Card