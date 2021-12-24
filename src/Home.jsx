import React from 'react'
import { Link } from 'react-router-dom'
import card1 from "../src/images/card1.jpg"
import card2 from "../src/images/card2.jpg"
import card3 from "../src/images/card3.png"
import card44 from "../src/images/card44.jpg"
const Home = () => {
    return (
        <>
        <div className='row'>
            <h2 style={{color:"DarkGoldenRod"}}><strong 
            style={{fontStyle:"oblique" , color:"red" ,margin:"200px",marginBottom:"200px"}}></strong><br></br>
           <i style={{margin:"50px"}}> we are the travel agency,we are here to take you to the haven of over living 
            world is full of havens and you must visit them is a life time
            so why not now to go there, click the button below to go check our list</i> </h2><br>
            </br>
           <Link style={{float:"right" ,marginTop:"150px"}}
            className= "btn btn-warning justify-content-center col-md-2" 
            style={{marginLeft:"1200px",marginTop:"100px" ,border:"2px solid DarkGoldenRod"}} to="/services">Click-ME</Link>
            <div className="col-md-6 justify-content-center"
             style={{width :'1200px',height:"600px" ,border:"8px solid orange", 
             overflow:" scroll",justifyContent:"center ", marginLeft:"150px", marginTop:"100px"}}>
                 <h2 style={{textAlign:"center", color:"purple"
                  ,backgroundColor:"black" ,fontWeight:"20px"}}>MOUNTAINSAGA</h2>
                  we are the travel agency we work for you ...we palan some of the amazing trips for you
                  we take u to the walk of haven ..belive us as we belive you
hieee Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta error commodi sunt dolor id magni quae earum velit itaque cum accusamus eligendi officia voluptas, blanditiis dolores omnis fugiat delectus quos?
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, deserunt consequuntur voluptates fuga odit omnis eveniet repellendus odio voluptatibus at quaerat minus vitae, accusamus recusandae a animi neque ut beatae.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptate dicta veniam voluptatibus labore ad porro eum facere sit dolorum obcaecati, commodi optio exercitationem vero maiores vitae minima quae quia ipsa? Excepturi natus reiciendis ducimus tempore mollitia in voluptatum velit blanditiis eveniet enim! Eius, quas nulla. Illo optio esse nobis temporibus, excepturi assumenda aliquid vero dolor totam ducimus porro soluta quae, accusantium quia et harum! Excepturi sit quis dolor ratione nobis, animi ab commodi, unde voluptates atque natus molestiae cupiditate voluptas provident maxime quibusdam perspiciatis asperiores eos odio quaerat consequuntur totam porro error sunt! Quod dicta, perspiciatis, quasi veritatis placeat, facilis perferendis doloribus velit consequuntur cupiditate iure! Possimus beatae qui voluptates atque odio? Reprehenderit tempore neque iste ab doloremque, mollitia quae nesciunt cumque facere rem laborum id eos illo pariatur reiciendis accusamus doloribus dolores, eveniet culpa? Iste beatae laborum cumque voluptatum quidem amet, debitis autem dolorum, distinctio blanditiis minima sunt facere laboriosam omnis asperiores reprehenderit saepe doloremque error? Nam nostrum adipisci totam ipsam quis inventore incidunt facere porro iusto. Alias rem et, tempore a quis expedita corrupti rerum. Vero ut quo mollitia animi? Voluptate numquam incidunt ex? Aspernatur, aliquam repellendus veritatis repudiandae accusamus sapiente, sed veniam, harum porro provident expedita cum laudantium molestiae. Rerum modi assumenda quo doloremque ipsum, eaque quam adipisci maxime voluptatum quod eius aspernatur tempora consequatur enim fugit minima cupiditate eum aliquam molestias explicabo, excepturi corrupti, temporibus eos. Dolor deleniti vitae inventore, necessitatibus libero possimus. Laborum quas omnis fugit quidem maxime harum quia amet eaque mollitia sit? Fuga quod error enim facere repellendus doloribus neque quisquam similique mollitia aperiam quibusdam, obcaecati veritatis. Itaque culpa at ipsam molestias quisquam labore cupiditate unde nulla officia facilis laborum magnam distinctio illum nostrum voluptate in atque commodi illo, a, dolore vel corrupti? Totam animi, reiciendis cupiditate similique dicta placeat laboriosam soluta facilis ea quaerat a itaque quisquam, atque minus saepe omnis sapiente libero reprehenderit perspiciatis assumenda unde eveniet! Optio explicabo possimus beatae officiis minima perferendis deserunt libero tenetur! Voluptatum ipsa sit soluta dolorem sequi. Sint enim rem aut quae dignissimos ut eos. Iste hic unde sint! Fuga quaerat qui, sit aut voluptates illum voluptatibus ratione suscipit laudantium saepe earum, veritatis quibusdam reprehenderit cumque omnis perferendis dolor quod eaque! Iure est esse eum reiciendis culpa, excepturi quidem magnam doloribus voluptas voluptatum. Dolorem debitis laborum, aperiam fuga possimus deleniti odio mollitia, in nihil, molestias quod quo placeat tenetur labore! Tempore dicta aliquid iusto cumque rem ex laborum magnam delectus. At possimus vero aspernatur dolores qui libero quibusdam tempore suscipit expedita, ab cum autem vel deserunt eaque labore obcaecati animi reiciendis magnam molestiae soluta, earum nisi ducimus consequatur. Neque, laudantium sed rerum atque exercitationem vel! Mollitia eius eos, neque libero placeat corporis sed necessitatibus repudiandae! Rem aliquam nostrum ipsa at eveniet voluptate sequi beatae, dolorem amet quibusdam quis eum quia odit, a cupiditate ad velit iusto iste, illum corporis porro dolor repellat quisquam quidem. Et repellendus ullam quos aspernatur consequatur commodi amet, ipsa nobis beatae temporibus delectus eius sequi autem nostrum facere esse dolores!

            </div><br></br>

            <div className='col-md-8' style={{display :"flex", 
            flexDirection:"row"
            ,marginLeft:"250px",padding:"10px" ,marginTop:"100px",backgroundColor:"DarkGoldenRod"}}>
         
            <div className="card" style={{margin:"20px"}}>
  <img className="card-img-top" src={card1} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Manali</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/services" className="btn btn-primary">Go somewhere</Link>
  </div>

</div>
<div className="card"  style={{margin:"20px"}} >
  <img className="card-img-top" src={card2} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">phel gaon</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/services" className="btn btn-primary">Go somewhere</Link>
  </div><br></br>
</div>
<div className="card"   style={{margin:"20px"}}>
  <img className="card-img-top" src={card3} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">shimla</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/services" className="btn btn-primary">Go somewhere</Link>
  </div>
</div>
<div className="card"   style={{margin:"20px"}}>
  <img className="card-img-top" style={{height:"300px"}} src={card44} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">kedarnath</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/services" className="btn btn-primary">Go somewhere</Link>
  </div>
</div>
                
            </div>

      <div className="row">
          <div className="col-md-8" style={{margin:"200px",color:"orange"}} >
      
          <div class="list-group">
  <Link to="/sevices" className="list-group-item list-group-item-action">UTTRAKHAND</Link>

  <Link to="/services" className="list-group-item list-group-item-action list-group-item-primary"
    >HIMACHAL</Link>
  <Link to="/services" className="list-group-item list-group-item-action list-group-item-secondary"
    >LADAKH</Link>
  <Link to="/services" className="list-group-item list-group-item-action list-group-item-success"
    >KASHMIR</Link>
  <Link to="/services" className="list-group-item list-group-item-action list-group-item-danger"
    >JAMMU</Link >
  <Link to="/services" className="list-group-item list-group-item-action list-group-item-warning"
    >MOUNTABU</Link>
  <Link to="/services" className="list-group-item list-group-item-action list-group-item-info"
    >LAHOLSIMRITHI</Link>
  <Link to="/services" className="list-group-item list-group-item-action list-group-item-light"
    >KEDARNATH</Link>
  <Link to="/services" className="list-group-item list-group-item-action list-group-item-dark"
    >BADRINATH</Link>
</div>

          </div>
      </div>

        </div>
            
        </>
    )
}

export default Home
