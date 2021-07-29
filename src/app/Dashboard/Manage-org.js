import React, { useState } from "react";
import Service from "../service/service.js";
import '../../assets/style1.css';

function Manageorg()
{
    



return (
    <div className="container-fluid">
    
                       <div className="row row-border">      
                                 <div className="col-sm-6 breadcrum"><span style={{position: 'relative',left:'50px'}}>
                              <i className="fa fa-home" style={{paddingRight: '10px'}}></i><a href="">Home</a>
                              - Manage Organization Details
                           </span></div>
                            <div className="col-3"></div>
                         <div className="col welcome"><h6 >Welcome back!</h6>
                             <span>Last updated on March 30 at 19:30 Pm  <a href=""><i className="fa fa-refresh" aria-hidden="true"></i></a></span>
                             </div>
                       </div>
   
                    <div className="row break-row">        
                       
                       <div className="card card-outline-secondary card-box" style={{margin: '0 auto',width: '55%'}}>
                           <div className="card-header">
                               <h3>Manage Organization Details</h3>
                           </div>
                           <div className="card-body">
                               <form className="form" role="form" autocomplete="off">
                                   <div className="form-group row">
                                       <label className="col-lg-5 col-form-label form-control-label">GST / Company Number</label>
                                       <div className="col-lg-7">
                                           <input className="form-control" type="text" value="" placeholder="GST / Company Number"/>
                                       </div>
                                   </div>
                                   <div className="form-group row">
                                       <label className="col-lg-5 col-form-label form-control-label">Name</label>
                                       <div className="col-lg-7">
                                           <input className="form-control" type="email" value="" placeholder="Name"/>
                                       </div>
                                   </div>
   
                                   <div className="form-group row">
                                       <label className="col-lg-5 col-form-label form-control-label">Contact Person</label>
                                       <div className="col-lg-7">
                                           <input className="form-control" type="text" value="" placeholder="Contact Person"/>
                                       </div>
                                   </div>
   
                                  <div className="form-group row"    style={{marginTop: '-15px'}}>
                                       <label className="col-lg-5 col-form-label form-control-label">Email</label>
                                       <div className="col-lg-7">
                                           <input className="form-control" type="text" value="" placeholder="Email"/>
                                       </div>
                                   </div>
                                   <div className="form-group row">
                                       <label className="col-lg-5 col-form-label form-control-label">Contact Number</label>
                                       <div className="col-lg-7">
                                           <input className="form-control" type="text" value="" placeholder="Contact Number"/>
                                       </div>
                                   </div>
                                   <div className="form-group row">
                                       <label className="col-lg-5 col-form-label form-control-label">Location / Address</label>
                                       <div className="col-lg-7">
                                           <textarea id="" placeholder="Location / Address"
                                            style={{resize: 'none' ,padding: '2px', name: '', rows: '3', cols: '20'}}>
                                           </textarea>
                                       </div>
                                   </div>
                                   {/* <div className="form-group row">
                                       <label className="col-lg-5 col-form-label form-control-label">State</label>
                                       <div className="col-lg-7">
                                           <input className="form-control" type="text" value="" placeholder="State"/>
                                       </div>
                                   </div>
                                   <div className="form-group row">
                                       <label className="col-lg-5 col-form-label form-control-label">City</label>
                                       <div className="col-lg-7">
                                           <input className="form-control" type="text" value="" placeholder="City"/>
                                       </div>
                                   </div> */}
                                   <div className="form-group row">
                                       <label className="col-lg-5 col-form-label form-control-label">Pin code</label>
                                       <div className="col-lg-7">
                                           <input className="form-control" type="text" value="" placeholder="Pin code"/>
                                       </div>
                                   </div>
                                   <div className="form-group row">
                                       <label className="col-lg-5 col-form-label form-control-label">Org Type (Head office, Branch etc)</label>
                                       <div className="col-lg-7">
                                           <input className="form-control" type="text" value="" placeholder="Org Type (Head office, Branch etc)"/>
                                       </div>
                                   </div>
                                  
                               <div className="row" style={{padding:'10px'}}></div>
                               
   
                                   <div className="form-group row">
                                       <label className="col-lg-6 col-form-label form-control-label"></label>
                                       <div className="col-lg-3">
                                           <input type="reset" className="btn btn-secondary" value="Cancel"/>
                                           </div>
                                           <div className="col-lg-3">
                                               <input type="button" className="btn btn-primary" value="Save"/>
                                           </div>
                                       </div>
                                   
                               </form>
                           </div>
                       </div>
       
                   </div>  
  
    </div>
    
    
)
};


export default Manageorg;