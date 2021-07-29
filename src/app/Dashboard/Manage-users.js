import React, { useState } from "react";
import Service from "../service/service.js";
import '../../assets/style1.css';

function Manageusers()
{
    const licensetype="slk";
    const [selectedLic,setSelectedLic] = useState(licensetype);
    function handleSelectChange(event) {
        setSelectedLic(event.target.value);
    }

return(
<div className="container-fluid">
<div className="row row-border">      
                              <div className="col-sm-6 breadcrum"><span style={{position: 'relative',left: '50px'}}>
                           <i className="fa fa-home" style={{paddingRight: '10px'}}></i><a href="">Home</a>
                           - Manage Users
                        </span></div>
                         <div className="col-4"></div>
                      <div className="col welcome"><h6 >Welcome back!</h6>
                          <span>Last updated on March 30 at 19:30 Pm  <a href=""><i className="fa fa-refresh" aria-hidden="true"></i></a></span>
                          </div>
                    </div>
                    <div className="row break-row">        
                    
                    <div className="card card-outline-secondary card-box" style={{margin: '0 auto', width: '55%'}}>
                        <div className="card-header">
                            <h3>Manage Users</h3>
                        </div>
                        <div className="card-body">
                            <form className="form" role="form" autoComplete="off">
                            <div className="form-group row">
            <label className="col-lg-5 col-form-label form-control-label" htmlFor="licensetype">Org Name</label>
           <div className="col-lg-7">
             <select className="form-control selectpicker" id="select-country" data-live-search="true" value={selectedLic} onChange={handleSelectChange}>
            <option value="Trial">slk</option>
            <option value="Standard">vfislk</option>
          </select>
          </div></div>
                                <div className="form-group row">
                                    <label className="col-lg-5 col-form-label form-control-label">Name</label>
                                    <div className="col-lg-7">
                                        <input className="form-control" type="email" value="" placeholder="Name"/>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-lg-5 col-form-label form-control-label">Contact Person</label>
                                    <div className="col-lg-7">
                                        <input className="form-control" type="text" value="" placeholder="Contact Person or a default user"/>
                                    </div>
                                </div>

                               <div className="form-group row">
                                    <label className="col-lg-5 col-form-label form-control-label">Contact No</label>
                                    <div className="col-lg-7">
                                        <input className="form-control" type="text" value="" placeholder="Contact No"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-5 col-form-label form-control-label">Email</label>
                                    <div className="col-lg-7">
                                        <input className="form-control" type="text" value="" placeholder="Email"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-5 col-form-label form-control-label">Password</label>
                                    <div className="col-lg-7">
                                        <input className="form-control" type="text" value="" placeholder="Password"/>
                                    </div>
                                </div>
                                <div className="form-group row">
            <label className="col-lg-5 col-form-label form-control-label" htmlFor="licensetype">Role Type</label>
           <div className="col-lg-7">
             <select className="form-control selectpicker" id="select-country" data-live-search="true" value={selectedLic} onChange={handleSelectChange}>
            <option value="Trial">trial</option>
            <option value="Standard">hub</option>
          </select>
          </div></div>
          <div className="form-group row">
            <label className="col-lg-5 col-form-label form-control-label" htmlFor="licensetype">IsActive</label>
           <div className="col-lg-7">
             <select className="form-control selectpicker" id="select-country" data-live-search="true" value={selectedLic} onChange={handleSelectChange}>
            <option value="Trial">Active</option>
            <option value="Standard">InActive</option>
          </select>
          </div></div>
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

export default Manageusers;