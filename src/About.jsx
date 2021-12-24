import React from 'react'
import rcard from "../src/images/rcard.jpg"
import mcard from "../src/images/mcard.jpg"
import { Link } from 'react-router-dom'
const About = () => {
    return (
        <>
          <div className="row">
              <div className="col-md-8" style={{backgroundColor:"white"}}>

                  <div className="" id="y" style={{margin:"100px"}}>
               hello about we are the Mountsaga in your service we are here to let you know about us,
               we started in 2020 and here we are in your service.<br></br>
               <div className='col-md-8' style={{display:"flex", flexDirection :"row" }}>
               <img  src={rcard}  style={{width:"500px",height:"500px",margin:"100px"}} >
               </img>    <img  src={mcard} style={{width:"500px",height:"500px",margin:"100px"}} >
               </img>
               </div><br></br>

               HQ: delhi:<br></br>
               map-google:delhi 6577899;<br></br>
               our site : MOUNTAINSAGA /GOOOGLE/ COM
<br></br>
               <Link to="/" className='btn btn-primary' style={{marginLeft:"1000px"}}>HOME</Link>
               </div>
                  </div></div>  
        </>
    )
}

export default About
