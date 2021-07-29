import React from 'react'
import {Container} from "react-bootstrap";

function Footer() {
  return (
    <main>
  <div className="container" style={{margin: "0 auto", boxShadow: "rgb(248 244 252) 0px 7px 29px 0px", borderRadius: "5px"}}>
          <div className="bg-blue py-4">
            <div className="row px-3">
                <div className="row" style={{margin:"0 auto",color:"black",fontSize:".7em"}}> 
                      <span> &copy; 2021 SLK Software Services Pvt, Ltd. All Rights Reserved. </span> 
                </div>
            
            </div>
        </div>
       </div>
        </main>
  );
}

export default Footer;