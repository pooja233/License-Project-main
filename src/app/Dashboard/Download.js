import React, { useState } from "react";
import Service from "../service/service.js";
import '../../assets/style1.css';
import dll from '../../assets/Portable.Licensing.dll';
function Download()
{
    var name=Service.readMessage();
console.log("from login  ",name);
    return (

        <div className="container-fluid">

<div className="dashboard">
<div className="row row-border">      
                              <div className="col breadcrum"><span style={{position: 'relative',left: '50px'}}>
                           <i className="fa fa-home" style={{paddingRight: '10px'}}></i><a href="/dashboard/">Home</a>
                           - Download
                        </span></div>
                         <div className="col-7"></div>
                      <div className="col welcome"><h6 >Welcome back {name}</h6>
                          <span>Last updated on March 30 at 19:30 Pm  <a href=""><i className="fa fa-refresh" aria-hidden="true"></i></a></span>
                          </div>
                    </div>

                    <div className="row break-row">        
                    
                    <div className="card card-outline-secondary card-box-download">
                        <div className="card-header" style={{background: '#f4f2f5'}}>
                           
                            <div className="row">
                                <div className="col-sm-6">
                                    <h3>Jar</h3>
                                </div>
                                <div className="col-sm-6" style={{textAlign: 'right'}}>
                                    <a href="" ><i className="fa fa-download"></i> Download</a>
                               </div>
                           </div>
                        </div>  
                        <div className="card-body">
                            Sample Text Sample Text Sample Text
                        </div>
                    </div>
                    <div className="card card-outline-secondary card-box-download" style={{marginTop: '20px'}}>
                        <div className="card-header" style={{background: '#f4f2f5'}}>
                           
                            <div className="row">
                                <div className="col-sm-6">
                                    <h3>dll</h3>
                                </div>
                                <div className="col-sm-6" style={{textAlign: 'right'}}>
                                    <a href={dll} download="Portable.Licensing.dll"><i className="fa fa-download"></i> Download</a>
                               </div>
                           </div>
                        </div>
                        <div className="card-body">
                            Sample Text Sample Text Sample Text
                        </div>
                    </div>
    
                </div>  
                </div>
                </div>






    
       
       )
       
};
export default Download;