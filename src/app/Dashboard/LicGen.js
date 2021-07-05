import React, { useState } from "react";
import Service from "../service/service.js";
import '../../assets/style1.css';



import $ from 'jquery';
const GenerateLicense = () => {
  const initialState = {
    username: null,
    email: "",
    licensetype: "",
    startdate: "",
    enddate: " ",
    product:"",
    custlist:""
  };

const licensetype="Trial";
var a=[];
var productString;
  const [info, setInfo] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [selectedLic,setSelectedLic] = useState(licensetype);

const [fields, setFields] = useState([{value:null}]);

  function handleChange(i, event) {
    const values = [...fields];

    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push([]);
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }
 function handleSelectChange(event) {
        setSelectedLic(event.target.value);
    }

  
  const handleInputChange = event => {

    const { name, value } = event.target;
    setInfo({ ...info, [name]: value });
  };

  const saveInfo = () => {
    
    for(var j=0;j<fields.length;j++){
       console.log(fields[j].value);
       a.push(fields[j].value);
 productString = a.join(",");

}

    var data = {
      UserName:info.username,
      EmailId:info.email,
      LicenseType:selectedLic,
      StartDate:info.startdate,
      EndDate:info.enddate,
      Product:info.product,
      CustList:productString
    };
    console.log(data);
    

    Service.create(data)
      .then(response => {
        setInfo({
          id: response.data.id,
          UserName:response.data.username,
          EmailId:response.data.email,
          LicenseType:response.data.licensetype,
          StartDate:response.data.startdate,
          EndDate:response.data.enddate,
          Product:response.data.product,
          CustList:productString

        });
        setSubmitted(true);
        console.log(response.data);

      })
      .catch(e => {
        console.log(e);
      });
  };

  const newLicense = () => {
    setInfo(initialState);
    setSubmitted(false);
  };

  function date()
  {
    $('#myDatepicker2').datetimepicker({
      format: 'DD.MM.YYYY'
  });
  $('#myDatepicker3').datetimepicker({
      format: 'DD.MM.YYYY'
  });};

  var feature = 1;
  function add_fields() {
  feature++;
  var objTo = document.getElementById('feature_fileds')
  var divtest = document.createElement("div");
  divtest.innerHTML = '<div><input type="text" style="width:80%;" name="Feature[]" value="" /><small></div>';
  
  objTo.appendChild(divtest)

  };


  return (
    
<div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newLicense}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
          <div className="row row-border">      
          <div className="col breadcrum">
            <span style={{position: 'relative',left: '50px'}}>
                           <i className="fa fa-home" style={{paddingRight: '10px'}}></i><a href="">Home</a>
                           - Licence Generation
                        </span></div>
                         <div className="col-7"></div>
                      <div className="col welcome"><h6 >Welcome back!</h6>
                          <span>Last updated on March 30 at 19:30 Pm  <a href=""><i className="fa fa-refresh" aria-hidden="true"></i></a></span>
                          </div>
                    </div>
                   

                 <div className="row break-row">        
                    
                    <div className="card card-outline-secondary card-box">
                        <div className="card-header">
                            <h3>License Generation</h3>
                        </div>
                        <div className="card-body">
                            <form className="form" role="form" autoComplete="off">
                                <div className="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">User Name</label>
                                <div className="col-lg-9">
                                        <input className="form-control" type="text" value="" 
                                        placeholder="User Name"/>
                                    </div>
                                </div>
                                    <div className="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">Email ID</label>
                                <div className="col-lg-9">
                                        <input className="form-control" type="text" value="" placeholder="Enter Email ID" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">License Type</label>
                                    <div className="col-lg-9">
                                    <select class="form-control selectpicker" id="select-country" data-live-search="true">
                                                <option></option>
                                     <option value="Trial">Trial</option>
                                      <option value="Standard">Standard</option>
            
                                                            </select>
                              
                                                                          </div>
                                </div>

                                <div className="form-group row" style={{marginBottom: '.6em'}}>
                                    <label className="col-lg-3 col-form-label form-control-label">Start Date</label>
                                    <div className="col-lg-9">
                                    <div className="form-group" style={{marginBottom: '.6em'}}>
                                            <div className="input-group date" id="myDatepicker2">
                                                <input type="text" className="form-control"/>
                                         <span className="input-group-addon" style={{width: '50px', height: '47px' ,position: 'relative',top: '2px', background: '#f7f7f7'}}>
                                                   <span className="glyphicon glyphicon-calendar" style={{position: 'relative', left: '15px', top: '10px',color: '#70088a'}}></span>
                                                </span>
                                            </div>
                                        </div>
                                  </div>
                                </div>
                                <div className="form-group row" style={{marginBottom: '.6em'}}>
                                    <label className="col-lg-3 col-form-label form-control-label">End Date</label>
                                    <div className="col-lg-9">
                                        <div className="form-group" style={{marginBottom: '.6em'}}>
                                            <div className="input-group date" id="myDatepicker3">
                                            <input type="text" className="form-control"/>
                                         <span className="input-group-addon" style={{width: '50px', height: '47px', position: 'relative',top: '2px', background: '#f7f7f7'}}>
                                                   <span className="glyphicon glyphicon-calendar" style={{position: 'relative', left: '15px', top: '10px',color: '#70088a'}}></span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                               
                             
                                    <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Product</label>
                                    <div className="col-lg-9">
                                        <input className="form-control" type="text" value="" placeholder="Product Name"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label" >Product Features</label>
                                    <div className="col-lg-9" id="pf">
                            
                                        <span className="plus" onClick="add_fields();">
                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                 
                                        </span>
                                        <span> <h6>Add Features</h6></span>
                                        <div id="feature_fileds">
                                            <div>
                                             
                                            </div>
                                         </div>

                                    </div>
                                </div>
                            
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label"></label>
                                    <div className="col-lg-4" click={saveInfo}>
                                        <input type="reset" className="btn btn-secondary" value="Generate Licence"/>
                                        </div>
                                        <div className="col-lg-4">
                                            <input type="button" className="btn btn-primary" value="Validate Licence"/>
                                        </div>
                                    </div>
                                
                            </form>
                        </div>
                    </div>
    
                </div>  

                            <div className="row" style={{paddingTop: '45px', paddingBottom: '45px'}}></div>

                            <div className="row" style={{backgroundColor: '#F7F6FC', padding: '10px'}}>
                                  <div className="col-sm-4" style={{fontSize: '.7em'}}>Copyright 2021 SLK Software Services Pvt, Ltd. All Rights Reserved. </div>
                                <div className="col-sm-4"></div>
  <div className="col-sm-4" style={{fontSize: '.7em', textAlign: 'right'}}><a href="#">Terms & Policy</a></div>
                       
</div>

</div>

<script src="js/daterangepicker.js"></script>
  
<script src="vendors/bootstrap-datetimepicker.min.js"></script>
<script src="js/jquery.min.js"></script>
<script src="js/popper.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/main.js"></script>


    <script src="vendors/jquery/dist/jquery.min.js"></script>
   
    <script src="vendors/bootstrap/dist/js/bootstrap.min.js"></script>
   
    <script src="vendors/fastclick/lib/fastclick.js"></script>
  
    <script src="vendors/nprogress/nprogress.js"></script>
    
    <script src="vendors/iCheck/icheck.min.js"></script>
  
    <script src="build/js/custom.min.js"></script>
    
    </div>
      )}
    </div>
  );
    };

export default GenerateLicense;