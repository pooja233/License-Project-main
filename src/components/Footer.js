import React from 'react'
import {Container} from "react-bootstrap";
import "../assets/footer.css";


function Footer() {
  return (
    <footer>
      <div id="footer-wrap">
        <Container>
         
            <i className="fa fa-copyright"></i>  <div className="footer" style={{margin:"0 auto",color:"black",fontSize:".7em"}}> 
                          <span> &copy; 2021 SLK Software Services Pvt, Ltd. All Rights Reserved. </span> 
                    </div>
                
         
        </Container>
      </div>
    </footer>
  );
}

export default Footer;