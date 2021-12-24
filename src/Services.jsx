import React from 'react'
import Card from './Card'
import Sdata from './Sdata'
import karan from "../src/images/karan.jpg"
const Services = () => {
    return (
        <>
           <div className='row'>
               <i  id="w" >MOUNTAIN SAGA OFFER YOU THESE SERVICES</i>
          <div className="col-md-10" style={{display:"flex" ,
           flexDirection:"row",marginLeft:"150px",marginTop:"200px"
           ,marginBottom:"100px" , backgroundColor:"darkgoldenrod"}}>
            
              {
                   Sdata.map((e , i)=>{
                       return(
                        <div style={{margin:"20px"}}>
                            <Card 
                            key={i}
                            title={e.title}
                            imgsrc={e.imgsrc}
                            texty={e.texty}
                            btnsrc={e.btnsrc}
                            />
                        </div>
                       )
                   })

              }
              
          </div>
        
          <i  id="w" >HAPPY TO PROVIDE YOU OUR SERVICES</i>
          </div>  
        </>
    )
}

export default Services
