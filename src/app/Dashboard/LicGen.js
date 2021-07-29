import React, { useState } from "react";
import Service from "../service/service.js";
import '../../assets/g-icons.css';
import '../../assets/style.css';
import '../../assets/generation.css';
 
    
const GenerateLicense = () => {

   
var name=Service.readMessage();
console.log("from login  ",name);
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

  return (
    
<div className="db-bg">

    
    
      <div className="container-fluid">

 <div className="dashboard">
                       

                   <div className="row row-border">      
                              <div className="col breadcrum"><span style={{position:"relative",left:"50px"}}>
                           <i className="fa fa-home" style={{paddingRight: "10px"}}></i><a href="/dashboard/">Home</a> -Offline License
                        </span></div>
                         <div className="col-7"></div>
                      <div className="col welcome"><h6 >Welcome back {name}!</h6>
                       
                          </div>
                    </div>

                 <div className="row break-row">        
                    
                    <div className="card card-outline-secondary card-box">
                        <div className="card-header">
                            <h3>License Generation</h3>
                        </div>
                        <div className="card-body">
                            <form className="form" role="form" autoComplete="off">

                            
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          {/* <button className="btn btn-success" onClick={newLicense}>
            Add
          </button> */}
        </div>
      ) : (
      <div>
          <div className="form-group row">
          <label className="col-lg-3 col-form-label form-control-label" htmlFor="username">User Name</label>
          <div className="col-lg-9">
          <input type="text" className="form-control" id="username" name="username" onChange={handleInputChange} value={info.username || ''} required placeholder="User Name"></input></div></div>

 <div className="form-group row">
          <label className="col-lg-3 col-form-label form-control-label" htmlFor="email">Email Id</label>
          <div className="col-lg-9">
          <input type="text" className="form-control" id="email" name="email" onChange={handleInputChange} value={info.email || ''} required placeholder="Email Id"></input></div></div>
                                
 <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label" htmlFor="licensetype">License Type</label>
           <div className="col-lg-9">
             <select className="form-control selectpicker" id="select-country" data-live-search="true" value={selectedLic} onChange={handleSelectChange}>
            <option value="Trial">Trial</option>
            <option value="Standard">Standard</option>
          </select>
          </div></div>


<div className="form-group row" style={{marginBottom: ".6em"}}>            
<label className="col-lg-3 col-form-label form-control-label" htmlFor="startdate">Start Date</label>
<div className="col-lg-9">
   <div className="form-group" style={{marginBottom: ".6em"}}>
   <div className="input-group date" id="myDatepicker2">
            <input
            type="date"
              className="form-control"
              id="startdate"
              required
              value={info.startdate || ' '}
              onChange={handleInputChange}
              name="startdate"
            />
    
                                            </div>
                                        </div>
                                  </div>
                                </div>

<div className="form-group row" style={{marginBottom: ".6em"}}>            
<label className="col-lg-3 col-form-label form-control-label" htmlFor="enddate">End Date</label>
<div className="col-lg-9">
   <div className="form-group" style={{marginBottom: ".6em"}}>
   <div className="input-group date" id="myDatepicker2">
            <input
            type="date"
              className="form-control"
              id="enddate"
              required
              value={info.enddate || ' '}
              onChange={handleInputChange}
              name="enddate"
            />
    
                                            </div>
                                        </div>
                                  </div>
                                </div>


                  <div className="form-group row">
          <label className="col-lg-3 col-form-label form-control-label" htmlFor="product">Product List</label>
          <div className="col-lg-9">
          <input type="text" className="form-control" id="product" name="product" onChange={handleInputChange} value={info.product || ''} required placeholder="Product"></input></div></div>                  
                                     
                                                                             

           <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label"  htmlFor="custlist">Product Features</label>
       
          <div className="col-lg-9" id="pf">
          <span className="plus" onClick={() => handleAdd()}>
          <i className="fa fa-plus" aria-hidden="true"></i>
      </span>
<span> <h6>Add Features</h6></span>

      {fields.map((field, idx) => {
        return (
      
          <div key={`${field}-${idx}`}>
         <span>
          
            <input
              type="text"
               className="form-control"
                required
                id="custlist"
                name="custlist"
                value={field.value || ' '}
              placeholder="Enter text"
              onChange={e => handleChange(idx, e)}
            />
             <button type="button"  style={{    paddingleft: '6px',
    marginLeft: '93%',
    marginTop: '-1%'}}onClick={() => handleRemove(idx)}>
              X
            </button>
           </span>
</div>
);
      })}
 </div> </div>
                                

    <div className="form-group row">
<label className="col-lg-3 col-form-label form-control-label"></label>
                        <div className="col-lg-4">
            <input type="reset" className="btn btn-secondary" style={{width:"200%"}} value="Generate Licence" onClick={saveInfo}/>
                                        </div>
                                      
                                    </div>                                
                              


                                </div>)}
                             
                            </form>
                        </div>
                    </div>
    
                </div>  


</div></div></div>
  );
    };

export default GenerateLicense;