import React, {useEffect,useState} from 'react'
import '../../assets/style.css';
import '../../assets/table.css';

//import '../../assets/g-icons.css';
//import '../../assets/bootstrap.min.css';
//import '../../assets/owl.carousel.min.css';
//import '../../assets/table.css';
import org from '../../assets/images/oge.svg';
import $ from 'jquery';
import Service from "../service/service.js";

function Dashboard() {

var name=Service.readMessage();
console.log("from login  ",name);

 function createDonutCharts() {
  $("<style type='text/css' id='dynamic' />").appendTo("head");
  $("div[chart-type*=donut]").each(function () {
      var d = $(this);
      var id = $(this).attr('id');
      var max = $(this).data('chart-max');
      if ($(this).data('chart-text')) {
          var text = $(this).data('chart-text');
      } else {
          var text = "";
      }
      if ($(this).data('chart-caption')) {
          var caption = $(this).data('chart-caption');
      } else {
          var caption = "";
      }
      if ($(this).data('chart-initial-rotate')) {
          var rotate = $(this).data('chart-initial-rotate');
      } else {
          var rotate = 0;
      }
      var segments = $(this).data('chart-segments');

      for (var i = 0; i < Object.keys(segments).length; i++) {
          var s = segments[i];
          var start = ((s[0] / max) * 360) + rotate;
          var deg = ((s[1] / max) * 360);
          if (s[1] >= (max / 2)) {
              d.append('<div class="large donut-bite" data-segment-index="' + i + '"> ');
          } else {
              d.append('<div class="donut-bite" data-segment-index="' + i + '"> ');
          }
          var style = $("#dynamic").text() + "#" + id + " .donut-bite[data-segment-index=\"" + i + "\"]{-moz-transform:rotate(" + start + "deg);-ms-transform:rotate(" + start + "deg);-webkit-transform:rotate(" + start + "deg);-o-transform:rotate(" + start + "deg);transform:rotate(" + start + "deg);}#" + id + " .donut-bite[data-segment-index=\"" + i + "\"]:BEFORE{-moz-transform:rotate(" + deg + "deg);-ms-transform:rotate(" + deg + "deg);-webkit-transform:rotate(" + deg + "deg);-o-transform:rotate(" + deg + "deg);transform:rotate(" + deg + "deg); background-color: " + s[2] + ";}#" + id + " .donut-bite[data-segment-index=\"" + i + "\"]:BEFORE{ background-color: " + s[2] + ";}#" + id + " .donut-bite[data-segment-index=\"" + i + "\"].large:AFTER{ background-color: " + s[2] + ";}";
          $("#dynamic").text(style);
      }

      d.children().first().before("<div class='donut-hole'><span class='donut-filling'>" + text + "</span></div>");
      d.append("<div class='donut-caption-wrapper'><span class='donut-caption'>" + caption + "</span></div>");
  });
}

$(document).ready(function() {
  createDonutCharts();
});
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

  return (
       
   <div className="db-bg">
   <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"/>
    <script src="vendors/jquery/dist/jquery.min.js"></script>
  
   
     <div className="container-fluid">
 <div className="dashboard">
                    <div className="row row-border">      
                              <div className="col breadcrum"><span style={{position:"relative",left:"50px"}}>
                           <i className="fa fa-home" style={{paddingRight: "10px"}}></i><a href="/dashboard/">Home</a>
                        </span></div>
                         <div className="col-7"></div>
                      <div className="col welcome"><h6 >Welcome back {name}!</h6>
                       
                          </div>
                    </div>

<div className="row" style={{margin: "0 auto", width: "96%",marginTop: "28px"}}>
    <div className="col-12 col-lg-6 col-xl">

      <div className="card">
        <div className="card-body">
          <div className="row align-items-center gx-0">
            <div className="col">
              <h6 className="text-uppercase text-muted mb-2" style={{color: "#0D2E85"}}># Products</h6>
              <span className="h2 mb-0 counts" style={{paddingLeft: "39px"}}>13</span>
              <div className="row">
                <div className="col" style={{position: "absolute",top: "-9px",textAlign: "right",left:"39px"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="65" height="100" viewBox="0 0 59 58">
                        <defs>
                            <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 69 68">
                            <image width="69" height="68" xlinkHref="data:image/png;base64,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"/>
                            </pattern>
                        </defs>
                        <rect id="products" width="59" height="58" fill="url(#pattern)"/>
                        </svg>
                    </div>    
              </div>
            </div>
            <div className="col-auto">
              <span className="h2 fe fe-dollar-sign text-muted mb-0"></span>
            </div>
          </div> 
        </div>
      </div>

    </div>
    <div className="col-12 col-lg-6 col-xl">

      <div className="card">
        <div className="card-body">
          <div className="row align-items-center gx-0">
            <div className="col">

              <h6 className="text-uppercase text-muted mb-2" style={{color:"#0D2E85"}}># Organization</h6>

              <span className="h2 mb-0 counts" style={{paddingLeft: "64px"}}>  25 </span>

            </div>
            <div className="col-auto">
                <img width="69" height="68" src={org}/>
            
              <span className="h2 fe fe-briefcase text-muted mb-0"></span>

            </div>
          </div> 
        </div>
      </div>

    </div>
    <div className="col-12 col-lg-6 col-xl">

      <div className="card">
        <div className="card-body">
          <div className="row align-items-center gx-0">
            <div className="col">
              <h6 className="text-uppercase text-muted mb-2" style={{color: "#0D2E85"}}> # Users</h6>
              <span className="h2 mb-0 counts" style={{paddingLeft: "9px"}}>135</span>

              <div className="row">
                <div className="col" style={{position: "absolute", top: "9px",  textAlign: "right", left: "39px"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="69" height="68" viewBox="0 0 69 68">
                        <image id="users" width="69" height="68" xlinkHref="data:image/png;base64,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"/>
                        </svg>
                </div>
                             
              </div>
            </div>
            <div className="col-auto">

              <span className="h2 fe fe-dollar-sign text-muted mb-0"></span>

            </div>
          </div> 
        </div>
      </div>

    </div>
    <div className="col-12 col-lg-6 col-xl">

      <div className="card">
        <div className="card-body">
          <div className="row align-items-center gx-0">
            <div className="col">

             
              <h6 className="text-uppercase text-muted mb-2" style={{color: "#0D2E85"}}>
         # License
              </h6>

             
              <span className="h2 mb-0 counts" style={{position: "relative",left: "21px"}}>
             135
              </span>

            </div>
            <div className="col-auto">

             
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="65" height="64" viewBox="0 0 65 64">
                <image id="license" width="65" height="64" xlinkHref="data:image/png;base64,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"/>
                </svg>

            </div>
          </div>
        </div>
      </div>

    </div>
  </div>  
  <div className="row row-border">

    <div className="row" style={{margin: "0 auto", width: "94%"}}>

        <div className="col-md-8">
            <div className="card email-sent-card">
                <div className="card-header" style={{height: "65px"}}>
                    <div className="card-header-left ">
                        <h6 style={{color: "#0D2E85",fontWeight: "bold", padding: "10px"}}>License usage by Organisation</h6>                                                </div>
              
                </div>
                <div className="card-block">
                    <div id="email-sent" style={{marginLeft: "-18px", maxWidth: "100%", overflow: "hidden",textAlign: "left"}}><div className="amcharts-main-div" style={{position: "relative", width: "100%", height: "100%"}}><div className="amChartsLegend amcharts-legend-div" style={{overflow: "hidden", position: "relative" ,textAlign: "left", width: "822px", height: "48px", cursor: "default"}}>
                        <svg version="1.1" style={{position: "absolute", width:"853px", height: "48px", top: "0px", left: "0px"}}>
 	<desc>JavaScript chart by amCharts 3.21.5</desc>
 	<g transform="translate(64,10)">
 		<path cs="100,100" d="M0.5,0.5 L882.5,0.5 L882.5,37.5 L0.5,37.5 Z" fill="#FFFFFF" stroke="#000000" fillOpacity="0" strokeWidth="1" strokeOpacity="0"></path>
 		<g transform="translate(0,11)">
 			<g cursor="pointer" aria-label="Actual Sales" transform="translate(0,0)"><path cs="100,100" d="M-15.5,8.5 L16.5,8.5 L16.5,-7.5 L-15.5,-7.5 Z" fill="#4680ff" stroke="#4680ff" fillOpacity="1" strokeWidth="1" strokeOpacity="1" transform="translate(16,8)"></path><text y="6" fill="#000000" fontFamily="Verdana" fontSize="11px" opacity="1" textAnchor="start" transform="translate(37,7)"><tspan y="6" x="0">Actual Sales</tspan></text><text y="6" fill="#000000" fontFamily="Verdana" fontSize="11px" opacity="1" textAnchor="end" transform="translate(161,7)"> </text><rect x="32" y="0" width="129.234375" height="18" rx="0" ry="0" strokeWidth="0" stroke="none" fill="#fff" fillOpacity="0.005"></rect></g>
 			<g cursor="pointer" aria-label="Target Sales" transform="translate(176,0)"><path cs="100,100" d="M-15.5,8.5 L16.5,8.5 L16.5,-7.5 L-15.5,-7.5 Z" fill="#FC6180" stroke="#FC6180" fillOpacity="1" strokeWidth="1" strokeOpacity="1" transform="translate(16,8)"></path><text y="6" fill="#000000" fontFamily="Verdana" fontSize="11px" opacity="1" textAnchor="start" transform="translate(37,7)"><tspan y="6" x="0">Target Sales</tspan></text><text y="6" fill="#000000" fontFamily="Verdana" fontSize="11px" opacity="1" textAnchor="end" transform="translate(161,7)"> </text><rect x="32" y="0" width="129.234375" height="18" rx="0" ry="0" strokeWidth="0" stroke="none" fill="#fff" fillOpacity="0.005"></rect></g>
 			<g cursor="pointer" aria-label="Market Days" transform="translate(351,0)">
 				<g><path cs="100,100" d="M0.5,8.5 L32.5,8.5" fill="none" strokeWidth="3" strokeDasharray="10" strokeOpacity="1" stroke="#93BE52"></path><circle r="0.001" cx="0" cy="0" fill="transparent" stroke="#93BE52" fillOpacity="1" strokeWidth="2" strokeOpacity="0" transform="translate(17,8)"></circle></g>
 				<text y="6" fill="#000000" fontFamily="Verdana" fontSize="11px" opacity="1" textAnchor="start" transform="translate(37,7)"><tspan y="6" x="0">Market Days</tspan></text><text y="6" fill="#000000" fontFamily="Verdana" fontSize="11px" opacity="1" textAnchor="end" transform="translate(161,7)"> </text><rect x="32" y="0" width="129.234375" height="18" rx="0" ry="0" strokeWidth="0" stroke="none" fill="#fff" fillOpacity="0.005"></rect></g>
 				<g cursor="pointer" aria-label="Actual Sales" transform="translate(527,0)"><path cs="100,100" d="M-15.5,8.5 L16.5,8.5 L16.5,-7.5 L-15.5,-7.5 Z" fill="#FFB64D" stroke="#FFB64D" fillOpacity="1" strokeWidth="1" strokeOpacity="1" transform="translate(16,8)"></path><text y="6" fill="#000000" fontFamily="Verdana" fontSize="11px" opacity="1" textAnchor="start" transform="translate(37,7)"><tspan y="6" x="0">Actual Sales</tspan></text><text y="6" fill="#000000" fontFamily="Verdana" fontSize="11px" opacity="1" textAnchor="end" transform="translate(161,7)"> </text><rect x="32" y="0" width="129.234375" height="18" rx="0" ry="0" strokeWidth="0" stroke="none" fill="#fff" fillOpacity="0.005"></rect></g>
 			</g>
 		</g>
 	</svg></div>
 	 <div className="amcharts-chart-div" style={{overflow: "hidden", position: "relative", textAlign: "left", width: "822px", height: "352px", padding: "0px",touchAction: "auto", cursor: "default"}}>
 		<svg version="1.1" style={{position: "absolute", width: "822px", height: "352px", top: "0px", left: "0px"}}>
 			<desc>JavaScript chart by amCharts 3.21.5</desc>
 			<g><path cs="100,100" d="M0.5,0.5 L966.5,0.5 L966.5,351.5 L0.5,351.5 Z" fill="#FFFFFF" stroke="#000000" fillOpacity="0" strokeWidth="1" strokeOpacity="0"></path><path cs="100,100" d="M0.5,0.5 L882.5,0.5 L882.5,301.5 L0.5,301.5 L0.5,0.5 Z" fill="#FFFFFF" stroke="#000000" fillOpacity="0" strokeWidth="1" strokeOpacity="0" transform="translate(64,20)"></path></g>
 			<g>
 				<g transform="translate(64,20)">
 					<g><path cs="100,100" d="M0.5,301.5 L0.5,301.5 L0.5,0.5" fill="none" strokeWidth="1" strokeOpacity="0.15" stroke="#000000"></path></g>
 					<g><path cs="100,100" d="M126.5,301.5 L126.5,301.5 L126.5,0.5" fill="none" strokeWidth="1" strokeOpacity="0.15" stroke="#000000"></path></g>
 					<g><path cs="100,100" d="M252.5,301.5 L252.5,301.5 L252.5,0.5" fill="none" strokeWidth="1" strokeOpacity="0.15" stroke="#000000"></path></g>
 					<g><path cs="100,100" d="M378.5,301.5 L378.5,301.5 L378.5,0.5" fill="none" strokeWidth="1" strokeOpacity="0.15" stroke="#000000"></path></g>
 					<g><path cs="100,100" d="M504.5,301.5 L504.5,301.5 L504.5,0.5" fill="none" strokeWidth="1" strokeOpacity="0.15" stroke="#000000"></path></g>
 					<g><path cs="100,100" d="M630.5,301.5 L630.5,301.5 L630.5,0.5" fill="none" strokeWidth="1" strokeOpacity="0.15" stroke="#000000"></path></g>
 					<g><path cs="100,100" d="M756.5,301.5 L756.5,301.5 L756.5,0.5" fill="none" strokeWidth="1" strokeOpacity="0.15" stroke="#000000"></path></g>
 					<g><path cs="100,100" d="M882.5,301.5 L882.5,301.5 L882.5,0.5" fill="none" strokeWidth="1" strokeOpacity="0.15" stroke="#000000"></path></g>
 				</g>
 				<g transform="translate(64,20)" visibility="visible">
 					<g><path cs="100,100" d="M0.5,301.5 L6.5,301.5" fill="none" strokeWidth="1" strokeOpacity="1" stroke="#000000" transform="translate(-6,0)"></path><path cs="100,100" d="M0.5,301.5 L0.5,301.5 L882.5,301.5" fill="none" strokeWidth="1" strokeOpacity="0.15" stroke="#000000"></path></g>
 					<g><path cs="100,100" d="M0.5,241.5 L6.5,241.5" fill="none" strokeWidth="1" strokeOpacity="1" stroke="#000000" transform="translate(-6,0)"></path><path cs="100,100" d="M0.5,241.5 L0.5,241.5 L882.5,241.5" fill="none" strokeWidth="1" strokeOpacity="0.15" stroke="#000000"></path></g>
 					<g><path cs="100,100" d="M0.5,181.5 L6.5,181.5" fill="none" strokeWidth="1" strokeOpacity="1" stroke="#000000" transform="translate(-6,0)"></path><path cs="100,100" d="M0.5,181.5 L0.5,181.5 L882.5,181.5" fill="none" strokeWidth="1" strokeOpacity="0.15" stroke="#000000"></path></g>
 					<g><path cs="100,100" d="M0.5,120.5 L6.5,120.5" fill="none" strokeWidth="1" strokeOpacity="1" stroke="#000000" transform="translate(-6,0)"></path><path cs="100,100" d="M0.5,120.5 L0.5,120.5 L882.5,120.5" fill="none" strokeWidth="1" strokeOpacity="0.15" stroke="#000000"></path></g>
 					<g><path cs="100,100" d="M0.5,60.5 L6.5,60.5" fill="none" strokeWidth="1" strokeOpacity="1" stroke="#000000" transform="translate(-6,0)"></path><path cs="100,100" d="M0.5,60.5 L0.5,60.5 L882.5,60.5" fill="none" strokeWidth="1" strokeOpacity="0.15" stroke="#000000"></path></g>
 					<g><path cs="100,100" d="M0.5,0.5 L6.5,0.5" fill="none" strokeWidth="1" strokeOpacity="1" stroke="#000000" transform="translate(-6,0)"></path><path cs="100,100" d="M0.5,0.5 L0.5,0.5 L882.5,0.5" fill="none" strokeWidth="1" strokeOpacity="0.15" stroke="#000000"></path></g>
 				</g>
 				<g transform="translate(64,20)" visibility="visible">
 					<g><path cs="100,100" d="M0.5,301.5 L6.5,301.5" fill="none" strokeWidth="1" strokeOpacity="1" stroke="#000000" transform="translate(-6,0)"></path></g>
 					<g><path cs="100,100" d="M0.5,241.5 L6.5,241.5" fill="none" strokeWidth="1" strokeOpacity="1" stroke="#000000" transform="translate(-6,0)"></path></g>
 					<g><path cs="100,100" d="M0.5,181.5 L6.5,181.5" fill="none" strokeWidth="1" strokeOpacity="1" stroke="#000000" transform="translate(-6,0)"></path></g>
 					<g><path cs="100,100" d="M0.5,120.5 L6.5,120.5" fill="none" strokeWidth="1" strokeOpacity="1" stroke="#000000" transform="translate(-6,0)"></path></g>
 					<g><path cs="100,100" d="M0.5,60.5 L6.5,60.5" fill="none" strokeWidth="1" strokeOpacity="1" stroke="#000000" transform="translate(-6,0)"></path></g>
 					<g><path cs="100,100" d="M0.5,0.5 L6.5,0.5" fill="none" strokeWidth="1" strokeOpacity="1" stroke="#000000" transform="translate(-6,0)"></path></g>
 				</g>
 			</g>
 			<g transform="translate(64,20)" clipPath="url(#AmChartsEl-14)">
 				<g visibility="hidden"></g>
 			</g>
 			<g></g>
 			<g></g>
 			<g></g>
 			<g>
 				<g transform="translate(64,20)">
 					<g>
 						<g transform="translate(38,301)" aria-label="Actual Sales Jan 16, 2013 8.00"><path cs="100,100" d="M0.5,0.5 L0.5,-240.5 L13.5,-240.5 L13.5,0.5 L0.5,0.5 Z" fill="#4680ff" stroke="#4680ff" fillOpacity="1" strokeWidth="1" strokeOpacity="1"></path></g>
 						<g transform="translate(164,301)" aria-label="Actual Sales Jan 17, 2013 6.00"><path cs="100,100" d="M0.5,0.5 L0.5,-180.5 L13.5,-180.5 L13.5,0.5 L0.5,0.5 Z" fill="#4680ff" stroke="#4680ff" fillOpacity="1" strokeWidth="1" strokeOpacity="1"></path></g>
 						<g transform="translate(290,301)" aria-label="Actual Sales Jan 18, 2013 2.00"><path cs="100,100" d="M0.5,0.5 L0.5,-59.5 L13.5,-59.5 L13.5,0.5 L0.5,0.5 Z" fill="#4680ff" stroke="#4680ff" fillOpacity="1" strokeWidth="1" strokeOpacity="1"></path></g>
 						<g transform="translate(416,301)" aria-label="Actual Sales Jan 19, 2013 9.00"><path cs="100,100" d="M0.5,0.5 L0.5,-270.5 L13.5,-270.5 L13.5,0.5 L0.5,0.5 Z" fill="#4680ff" stroke="#4680ff" fillOpacity="1" strokeWidth="1" strokeOpacity="1"></path></g>
 						<g transform="translate(542,301)" aria-label="Actual Sales Jan 20, 2013 6.00"><path cs="100,100" d="M0.5,0.5 L0.5,-180.5 L13.5,-180.5 L13.5,0.5 L0.5,0.5 Z" fill="#4680ff" stroke="#4680ff" fillOpacity="1" strokeWidth="1" strokeOpacity="1"></path></g>
 						<g transform="translate(668,301)" aria-label="Actual Sales Jan 21, 2013 5.00">
                        <path cs="100,100" d="M0.5,0.5 L0.5,-149.5 L13.5,-149.5 L13.5,0.5 L0.5,0.5 Z" fill="#4680ff" stroke="#4680ff" fillOpacity="1" strokeWidth="1" strokeOpacity="1"></path></g>
                        <g transform="translate(794,301)" aria-label="Actual Sales Jan 22, 2013 7.00"><path cs="100,100" d="M0.5,0.5 L0.5,-210.5 L13.5,-210.5 L13.5,0.5 L0.5,0.5 Z" fill="#4680ff" stroke="#4680ff" fillOpacity="1" strokeWidth="1" strokeOpacity="1"></path></g>
                    </g>
                </g>
                <g transform="translate(64,20)">
                	<g>
                		<g transform="translate(56,301)" aria-label="Target Sales Jan 16, 2013 5.00"><path cs="100,100" d="M0.5,0.5 L0.5,-149.5 L13.5,-149.5 L13.5,0.5 L0.5,0.5 Z" fill="#FC6180" stroke="#FC6180" fillOpacity="1" strokeWidth="1" strokeOpacity="1"></path></g>
                		<g transform="translate(182,301)" aria-label="Target Sales Jan 17, 2013 4.00"><path cs="100,100" d="M0.5,0.5 L0.5,-119.5 L13.5,-119.5 L13.5,0.5 L0.5,0.5 Z" fill="#FC6180" stroke="#FC6180" fillOpacity="1" strokeWidth="1" strokeOpacity="1"></path></g>
                		<g transform="translate(308,301)" aria-label="Target Sales Jan 18, 2013 5.00"><path cs="100,100" d="M0.5,0.5 L0.5,-149.5 L13.5,-149.5 L13.5,0.5 L0.5,0.5 Z" fill="#FC6180" stroke="#FC6180" fillOpacity="1" strokeWidth="1" strokeOpacity="1"></path></g>
                		<g transform="translate(434,301)" aria-label="Target Sales Jan 19, 2013 8.00"><path cs="100,100" d="M0.5,0.5 L0.5,-240.5 L13.5,-240.5 L13.5,0.5 L0.5,0.5 Z" fill="#FC6180" stroke="#FC6180" fillOpacity="1" strokeWidth="1" strokeOpacity="1"></path></g>
                		<g transform="translate(560,301)" aria-label="Target Sales Jan 20, 2013 9.00"><path cs="100,100" d="M0.5,0.5 L0.5,-270.5 L13.5,-270.5 L13.5,0.5 L0.5,0.5 Z" fill="#FC6180" stroke="#FC6180" fillOpacity="1" strokeWidth="1" strokeOpacity="1"></path></g>
                		<g transform="translate(686,301)" aria-label="Target Sales Jan 21, 2013 3.00"><path cs="100,100" d="M0.5,0.5 L0.5,-89.5 L13.5,-89.5 L13.5,0.5 L0.5,0.5 Z" fill="#FC6180" stroke="#FC6180" fillOpacity="1" strokeWidth="1" strokeOpacity="1"></path></g>
                		<g transform="translate(812,301)" aria-label="Target Sales Jan 22, 2013 5.00"><path cs="100,100" d="M0.5,0.5 L0.5,-149.5 L13.5,-149.5 L13.5,0.5 L0.5,0.5 Z" fill="#FC6180" stroke="#FC6180" fillOpacity="1" strokeWidth="1" strokeOpacity="1"></path></g>
                	</g>
                </g>
                <g transform="translate(64,20)">
                	<g></g>
                	<g clipPath="url(#AmChartsEl-16)"><path cs="100,100" d="M63,48 C95,58,126,245,189,253 C252,261,252,211,315,205 C378,198,378,123,441,120 C504,118,504,155,567,157 C630,158,630,142,693,144 C756,147,788,202,819,205 M0,0 L0,0" fill="none" fillOpacity="0" strokeWidth="3" strokeDasharray="10" strokeOpacity="1" stroke="#93BE52"></path></g><clipPath id="AmChartsEl-16"><rect x="0" y="0" width="882" height="301" rx="0" ry="0" strokeWidth="0"></rect></clipPath>
                	<g></g>
                </g>
                <g transform="translate(64,20)">
                	<g>
                		<g transform="translate(75,301)" aria-label="Actual Sales Jan 16, 2013 8.00"><path cs="100,100" d="M0.5,0.5 L0.5,-240.5 L13.5,-240.5 L13.5,0.5 L0.5,0.5 Z" fill="#FFB64D" stroke="#FFB64D" fillOpacity="1" strokeWidth="1" strokeOpacity="1"></path></g>
                		<g transform="translate(201,301)" aria-label="Actual Sales Jan 17, 2013 6.00"><path cs="100,100" d="M0.5,0.5 L0.5,-180.5 L13.5,-180.5 L13.5,0.5 L0.5,0.5 Z" fill="#FFB64D" stroke="#FFB64D" fillOpacity="1" strokeWidth="1" strokeOpacity="1"></path></g>
                		<g transform="translate(327,301)" aria-label="Actual Sales Jan 18, 2013 2.00"><path cs="100,100" d="M0.5,0.5 L0.5,-59.5 L13.5,-59.5 L13.5,0.5 L0.5,0.5 Z" fill="#FFB64D" stroke="#FFB64D" fillOpacity="1" strokeWidth="1" strokeOpacity="1"></path></g>
                		<g transform="translate(453,301)" aria-label="Actual Sales Jan 19, 2013 9.00"><path cs="100,100" d="M0.5,0.5 L0.5,-270.5 L13.5,-270.5 L13.5,0.5 L0.5,0.5 Z" fill="#FFB64D" stroke="#FFB64D" fillOpacity="1" strokeWidth="1" strokeOpacity="1"></path></g>
                		<g transform="translate(579,301)" aria-label="Actual Sales Jan 20, 2013 6.00"><path cs="100,100" d="M0.5,0.5 L0.5,-180.5 L13.5,-180.5 L13.5,0.5 L0.5,0.5 Z" fill="#FFB64D" stroke="#FFB64D" fillOpacity="1" strokeWidth="1" strokeOpacity="1"></path></g>
                		<g transform="translate(705,301)" aria-label="Actual Sales Jan 21, 2013 5.00"><path cs="100,100" d="M0.5,0.5 L0.5,-149.5 L13.5,-149.5 L13.5,0.5 L0.5,0.5 Z" fill="#FFB64D" stroke="#FFB64D" fillOpacity="1" strokeWidth="1" strokeOpacity="1"></path></g>
                		<g transform="translate(831,301)" aria-label="Actual Sales Jan 22, 2013 7.00"><path cs="100,100" d="M0.5,0.5 L0.5,-210.5 L13.5,-210.5 L13.5,0.5 L0.5,0.5 Z" fill="#FFB64D" stroke="#FFB64D" fillOpacity="1" strokeWidth="1" strokeOpacity="1"></path></g>
                	</g>
                </g>
            </g>
            <g></g>
            <g><path cs="100,100" d="M0.5,301.5 L882.5,301.5 L882.5,301.5" fill="none" strokeWidth="1" strokeOpacity="0.3" stroke="#000000" transform="translate(64,20)"></path>
            	<g><path cs="100,100" d="M0.5,0.5 L882.5,0.5" fill="none" strokeWidth="1" strokeOpacity="0" stroke="#000000" transform="translate(64,321)"></path></g>
            	<g><path cs="100,100" d="M0.5,0.5 L0.5,301.5" fill="none" strokeWidth="1" strokeOpacity="1" stroke="#000000" transform="translate(64,20)" visibility="visible"></path></g>
            	<g><path cs="100,100" d="M0.5,0.5 L0.5,301.5" fill="none" strokeWidth="1" strokeOpacity="1" stroke="#000000" transform="translate(64,20)" visibility="visible"></path></g>
            </g>
            <g>
            	<g transform="translate(64,20)" clipPath="url(#AmChartsEl-15)" style={{pointerEvents: "none"}}><path cs="100,100" d="M0.5,0.5 L0.5,0.5 L0.5,301.5" fill="none" strokeWidth="1" strokeOpacity="0" stroke="#CC0000" visibility="hidden" transform="translate(693,0)"></path><path cs="100,100" d="M0.5,0.5 L882.5,0.5 L882.5,0.5" fill="none" strokeWidth="1" strokeOpacity="0.2" stroke="#CC0000" visibility="hidden" transform="translate(0,262)"></path></g>
            	<clipPath id="AmChartsEl-15"><rect x="0" y="0" width="882" height="301" rx="0" ry="0" strokeWidth="0"></rect></clipPath></g>
            	<g></g>
            	<g>
            		<g transform="translate(64,20)"></g>
            		<g transform="translate(64,20)"></g>
            		<g transform="translate(64,20)">
                            <circle r="2" cx="0" cy="0" fill="transparent" stroke="#93BE52" fillOpacity="1" strokeWidth="2" strokeOpacity="0" transform="translate(63,48)" aria-label="Market Days Jan 16, 2013 91.00"></circle><circle r="2" cx="0" cy="0" fill="transparent" stroke="#93BE52" fillOpacity="1" strokeWidth="2" strokeOpacity="0" transform="translate(189,253)" aria-label="Market Days Jan 17, 2013 74.00"></circle><circle r="2" cx="0" cy="0" fill="transparent" stroke="#93BE52" fillOpacity="1" strokeWidth="2" strokeOpacity="0" transform="translate(315,205)" aria-label="Market Days Jan 18, 2013 78.00"></circle><circle r="2" cx="0" cy="0" fill="transparent" stroke="#93BE52" fillOpacity="1" strokeWidth="2" strokeOpacity="0" transform="translate(441,120)" aria-label="Market Days Jan 19, 2013 85.00"></circle><circle r="2" cx="0" cy="0" fill="transparent" stroke="#93BE52" fillOpacity="1" strokeWidth="2" strokeOpacity="0" transform="translate(567,157)" aria-label="Market Days Jan 20, 2013 82.00"></circle><circle r="2" cx="0" cy="0" fill="transparent" stroke="#93BE52" fillOpacity="1" strokeWidth="2" strokeOpacity="0" transform="translate(693,144) scale(1)" aria-label="Market Days Jan 21, 2013 83.00"></circle><circle r="2" cx="0" cy="0" fill="transparent" stroke="#93BE52" fillOpacity="1" strokeWidth="2" strokeOpacity="0" transform="translate(819,205)" aria-label="Market Days Jan 22, 2013 78.00"></circle></g><g transform="translate(64,20)"></g>
                        </g>
                        <g>
                        	<g></g>
                        </g>
                        <g>
                        	<g transform="translate(64,20)" visibility="visible"><text y="6" fill="#000000" fontFamily="Verdana" fontSize="11px" opacity="1" textAnchor="middle" transform="translate(63.000000104166666,313.5)"><tspan y="6" x="0">Jan 16</tspan></text><text y="6" fill="#000000" fontFamily="Verdana" fontSize="11px" opacity="1" textAnchor="middle" transform="translate(189.00000010416667,313.5)"><tspan y="6" x="0">Jan 17</tspan></text><text y="6" fill="#000000" fontFamily="Verdana" fontSize="11px" opacity="1" textAnchor="middle" transform="translate(315.00000010416665,313.5)"><tspan y="6" x="0">Jan 18</tspan></text><text y="6" fill="#000000" fontFamily="Verdana" fontSize="11px" opacity="1" textAnchor="middle" transform="translate(441.00000010416665,313.5)"><tspan y="6" x="0">Jan 19</tspan></text><text y="6" fill="#000000" fontFamily="Verdana" fontSize="11px" opacity="1" textAnchor="middle" transform="translate(567.0000001041667,313.5)"><tspan y="6" x="0">Jan 20</tspan></text><text y="6" fill="#000000" fontFamily="Verdana" fontSize="11px" opacity="1" textAnchor="middle" transform="translate(693.0000001041667,313.5)"><tspan y="6" x="0">Jan 21</tspan></text><text y="6" fill="#000000" fontFamily="Verdana" fontSize="11px" opacity="1" textAnchor="middle" transform="translate(819.0000001041667,313.5)"><tspan y="6" x="0"></tspan></text></g>
                        </g>
                  

                        </svg>
                    </div></div></div>
                </div>
            </div>
        </div>

        <div className="col-md-4 gt" style={{margin:"0 auto"}}>


          <div className="card email-sent-card">
            <div className="card-header" style={{height: "65px"}}>
                <div className="card-header-left ">
                    <h6 style={{color: "#0D2E85", fontWeight: "bold", padding: "10px"}}>License Coverage</h6>                                                </div>
              </div>
              <div className="row"  style={{margin: "0 auto",  width: "100%",marginLeft: "12px"}} >
                <div className="col-md-6" style={{padding:"15px",marginBottom: "10px"}}>
                 <h6 style={{marginBottom: "22px"}}>Total License</h6>

                 <div className="row" style={{margin: "0 auto",  marginLeft: "25px"}}>
                    <div className="small-chartbox">
                        <div id="failureChart3" chart-type="donut" data-chart-max="100" data-chart-segments="{ &quot;0&quot;:[&quot;0&quot;,&quot;50&quot;,&quot;#DBDBDB&quot;], &quot;1&quot;:[&quot;50&quot;,&quot;50&quot;,&quot;#55DB2E&quot;] }" data-chart-text="50%" data-chart-caption="Failure Rate"></div>
                      </div>
                    </div>

                </div>
                
                <div className="col-md-6" style={{padding:"15px", marginBottom: "10px"}}>
                   
                    <h6 style={{marginBottom: "22px"}}>Total Revenue</h6>
                    <div className="row" style={{margin: "0 auto", marginLeft: "25px"}}>
                         <div className="small-chartbox">
                                <div id="failureChart3" chart-type="donut" data-chart-max="100" data-chart-segments="{ &quot;0&quot;:[&quot;0&quot;,&quot;50&quot;,&quot;#19A7F5&quot;], &quot;1&quot;:[&quot;50&quot;,&quot;50&quot;,&quot;#55DB2E&quot;] }" data-chart-text="50%" data-chart-caption="Failure Rate"></div>
                              </div>
                            </div>
                         </div>
                     </div>
                
             <div className="row" style={{margin: "0 auto",  width: "100%",margin: "0 auto",  marginLeft: "12px"}}>
                <div className="col-md-6" style={{padding:"15px"}}>
                    <h6 style={{marginBottom: "22px"}}>Total Products</h6>
                    <div className="row" style={{margin:" 0 auto",  marginLeft: "25px"}}>
                            <div className="small-chartbox" >
                                <div id="thingsChart" chart-type="donut" data-chart-max="2000" data-chart-segments="{  &quot;0&quot;:[&quot;0&quot;,&quot;1400&quot;,&quot;#F16805&quot;],  &quot;1&quot;:[&quot;1400&quot;,&quot;600&quot;, &quot;#ecebeb&quot;]  }" data-chart-text="1400" data-chart-caption="Things to do"></div>
                            </div>
                            </div>
                       </div>
                <div className="col-md-6" style={{padding:"15px"}}>
                    <h6 style={{marginBottom: "22px"}}>Active Users</h6>
                        <div className="row" style={{margin: "0 auto", marginLeft: "25px"}}>
                        <div className="small-chartbox">
                            <div id="failureChart3" chart-type="donut" data-chart-max="100" data-chart-segments="{ &quot;0&quot;:[&quot;0&quot;,&quot;50&quot;,&quot;#19A7F5&quot;], &quot;1&quot;:[&quot;50&quot;,&quot;50&quot;,&quot;#55DB2E&quot;] }" data-chart-text="50%" data-chart-caption="Failure Rate"></div>

                        </div>
                    </div>
              </div>
          </div>
        </div>









         
        </div>
    </div>
</div>
                    <div className="row" style={{width: "96%", margin:"0 auto"}}>
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="x_panel">
                                  <div className="x_content">
                                  <div id="datatable-buttons_wrapper" className="dataTables_wrapper no-footer">
                                    <div className="dt-buttons btn-group">
                                      <a className="btn btn-default buttons-copy buttons-html5 btn-sm" tabIndex="0" 
                                      aria-controls="datatable-buttons" href="#"><span>Copy</span></a>
                                      <a className="btn btn-default buttons-csv buttons-html5 btn-sm" tabIndex="0" 
                                      aria-controls="datatable-buttons" href="#"><span>CSV</span></a>
                                      <a className="btn btn-default buttons-print btn-sm" tabIndex="0" 
                                      aria-controls="datatable-buttons" href="#"><span>Print</span></a></div>
                                      <div className="dataTables_length" id="datatable-buttons_length">
                                        <label>Show <select name="datatable-buttons_length" aria-controls="datatable-buttons" 
                                        className=""><option value="10">10</option><option value="25">25</option>
                                        <option value="50">50</option><option value="100">100</option></select> entries</label>
                                        </div><div id="datatable-buttons_filter" className="dataTables_filter">
                                          <label>Search:<input type="search" className="" placeholder=""
                                           aria-controls="datatable-buttons"/></label></div>
                                    <table id="datatable-buttons" className="table table-striped table-bordered">
                                  <thead>
                                    <tr>
                                      <th>Req ID</th>
                                      <th>Organisation ID</th>
                                      <th>Organisation Name/Email</th>
                                      <th>Request Type</th>
                                      <th>Received Date</th>
                                      <th>Completed Date</th>
                                      <th>Status</th>
                                    
                                    </tr>
                                  </thead>
            
            
                                  <tbody>
                                    <tr>
                                      <td><a href="#" style={{textDecoration: "underline"}}>001</a></td>
                                      <td>System Architect</td>
                                      <td>Edinburgh</td>
                                      <td>61</td>
                                      <td>07/06/2021</td>
                                 
                                      <td>2011/04/25</td>
                                      <td className="pending">Pending</td>
                                   
                                    </tr>
                                    <tr>
                                      <td><a href="#" style={{textDecoration: "underline"}}>002</a></td>
                                      <td>Accountant</td>
                                      <td>Tokyo</td>
                                      <td>63</td>
                                      <td>27/05/2021</td>
                                      <td>29/05/2021</td>
                                      <td className="approved">Approved</td>
                                     
                                    </tr>
                                    <tr>
                                      <td><a href="#" style={{textDecoration: "underline"}}>003</a></td>
                                      <td>Junior Technical Author</td>
                                      <td>San Francisco</td>
                                      <td>66</td>
                                      <td>07/05/2021</td>
                                    
                                      <td>2011/04/25</td>
                                      <td className="in-progress">In-progress</td>
                                   
                                    </tr>
                                    <tr>
                                      <td><a href="#" style={{textDecoration: "underline"}}>004</a></td>
                                      <td>Senior Javascript Developer</td>
                                      <td>Edinburgh</td>
                                      <td>22</td>
                                      <td>01/02/2020</td>
                                     
                                      <td>2011/04/25</td>
                                      <td className="rejected">Rejected</td>
                                    
                                    </tr>
                                 
                                    
                                   
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
            
                                

</div>
<div className="row" style={{paddingTop:"45px", paddingBottom: "45px"}}></div>

</div>
</div>
</div>
  )
 
  </div>

  )};

export default Dashboard
