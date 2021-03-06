import React from 'react'
import {Accordion, Button, Container, Form,Navbar,Nav,NavDropdown} from "react-bootstrap";
import {Link, useRouteMatch, withRouter} from "react-router-dom";
import Service from "../app/service/service.js";

function Header(){
    
var name=Service.readMessage();
console.log("from login  ",name);
  return (
     
   <div className="db-bg">
     <div className="container-fluid">
 <div className="dashboard1">
                        
                    <div className="row" >
                        <nav className="navbar navbar-expand-lg  ftco_navbar  ftco-navbar-light" id="ftco-navbar" style={{width: "100%"}}>
                            <div className="container-fluid">
                                <a className="navbar-brand" href="/dashboard/" style={{width: "6%"}}>  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 112.837 137.566">
                            <g id="Group_2" data-name="Group 2">
                                <g id="Group_1" data-name="Group 1" transform="translate(0 128.775)">
                                <path id="Path_1" data-name="Path 1" d="M384.859,1758.51a2.412,2.412,0,0,1,1.931.76,3.326,3.326,0,0,1,.657,2.232,3.506,3.506,0,0,1-.652,2.3,2.386,2.386,0,0,1-1.936.776h-1.948v-6.072Zm-.753,5.037h.589a1.364,1.364,0,0,0,1.159-.488,2.54,2.54,0,0,0,.372-1.536,2.427,2.427,0,0,0-.377-1.49,1.368,1.368,0,0,0-1.155-.488h-.589Z" transform="translate(-382.911 -1757.538)" fill="#6b2d92"/>
                                <path id="Path_2" data-name="Path 2" d="M446.9,1754.287v-.917h1.49v-2.806h-1.414v-.913H449.5v3.719h1.4v.917Zm1.458-5.789a.678.678,0,0,1-.217-.524.689.689,0,0,1,.217-.532.919.919,0,0,1,1.144,0,.69.69,0,0,1,.217.532.679.679,0,0,1-.217.524A.918.918,0,0,1,448.354,1748.5Z" transform="translate(-441.375 -1747.243)" fill="#6b2d92"/>
                                <path id="Path_3" data-name="Path 3" d="M505.836,1780.261a1.254,1.254,0,0,1-.61-.978h1.124a.574.574,0,0,0,.318.362,1.375,1.375,0,0,0,.642.135,1.127,1.127,0,0,0,.762-.227.829.829,0,0,0,.261-.661v-.918h-.088a1.073,1.073,0,0,1-.48.634,1.6,1.6,0,0,1-.892.242,1.7,1.7,0,0,1-.917-.237,1.526,1.526,0,0,1-.587-.686,2.563,2.563,0,0,1-.2-1.071v-.7a2.532,2.532,0,0,1,.21-1.086,1.53,1.53,0,0,1,.6-.681,1.813,1.813,0,0,1,.949-.236,1.552,1.552,0,0,1,.867.236,1.1,1.1,0,0,1,.475.635h.084v-.787h1.132v4.633a1.627,1.627,0,0,1-.265.932,1.694,1.694,0,0,1-.755.606,2.931,2.931,0,0,1-1.172.212A2.641,2.641,0,0,1,505.836,1780.261Zm.772-2.691a1.074,1.074,0,0,0,1.439,0,1.034,1.034,0,0,0,.267-.751v-.669a1.034,1.034,0,0,0-.267-.749,1.071,1.071,0,0,0-1.439,0,1.034,1.034,0,0,0-.267.749v.669a1.036,1.036,0,0,0,.267.75Z" transform="translate(-494.614 -1771.831)" fill="#6b2d92"/>
                                <path id="Path_4" data-name="Path 4" d="M570.377,1754.3v-.917h1.49v-2.806h-1.414v-.913h2.533v3.72h1.4v.917Zm1.458-5.788a.679.679,0,0,1-.217-.524.689.689,0,0,1,.217-.532.919.919,0,0,1,1.144,0,.689.689,0,0,1,.217.532.68.68,0,0,1-.217.524A.919.919,0,0,1,571.835,1748.508Z" transform="translate(-554.202 -1747.251)" fill="#6b2d92"/>
                                <path id="Path_5" data-name="Path 5" d="M632.064,1759.73v1.375h1.729v.917h-1.708v2.217a.489.489,0,0,0,.179.4.8.8,0,0,0,.511.143l.5,0c.167,0,.32,0,.461-.01v.912l-.511.011c-.189,0-.371.006-.545.006a2.917,2.917,0,0,1-1.014-.146,1.008,1.008,0,0,1-.557-.471,1.818,1.818,0,0,1-.175-.86v-2.2h-1.208v-.917h1.208v-1.375Z" transform="translate(-608.434 -1758.653)" fill="#6b2d92"/>
                                <path id="Path_6" data-name="Path 6" d="M692.74,1778.486a1.341,1.341,0,0,1-.4-1.014,1.2,1.2,0,0,1,.45-.991,2.317,2.317,0,0,1,1.3-.419l1.086-.063v-.375a.585.585,0,0,0-.2-.471.831.831,0,0,0-.555-.168.984.984,0,0,0-.511.124.629.629,0,0,0-.284.339h-1.119a1.334,1.334,0,0,1,.3-.728,1.653,1.653,0,0,1,.677-.482,2.582,2.582,0,0,1,.974-.17,2.062,2.062,0,0,1,1.376.412,1.454,1.454,0,0,1,.484,1.17v3.147h-1.094v-.618h-.1a1.209,1.209,0,0,1-.518.511,1.685,1.685,0,0,1-.8.183A1.473,1.473,0,0,1,692.74,1778.486Zm1.963-.646a.857.857,0,0,0,.347-.311.843.843,0,0,0,.126-.46v-.332l-.892.055q-.812.049-.812.6a.5.5,0,0,0,.194.412.835.835,0,0,0,.53.151,1.107,1.107,0,0,0,.507-.112Z" transform="translate(-665.638 -1771.753)" fill="#6b2d92"/>
                                <path id="Path_7" data-name="Path 7" d="M755.6,1761.024v-.917h1.473v-4.574h-1.4v-.917h2.55v5.491h1.384v.917Z" transform="translate(-723.446 -1753.98)" fill="#6b2d92"/>
                                <path id="Path_8" data-name="Path 8" d="M876.7,1761.581a.818.818,0,0,0,.349.612,1.4,1.4,0,0,0,.824.216,1.274,1.274,0,0,0,.783-.218.7.7,0,0,0,.29-.589.6.6,0,0,0-.221-.493,1.826,1.826,0,0,0-.751-.294l-.631-.147a2.348,2.348,0,0,1-1.231-.619,1.561,1.561,0,0,1-.406-1.111,1.8,1.8,0,0,1,.263-.982,1.733,1.733,0,0,1,.747-.642,2.652,2.652,0,0,1,1.141-.227,2.617,2.617,0,0,1,1.115.223,1.81,1.81,0,0,1,.755.627,1.73,1.73,0,0,1,.293.943h-1.128a.8.8,0,0,0-.305-.588,1.132,1.132,0,0,0-.717-.212,1.169,1.169,0,0,0-.715.2.694.694,0,0,0-.042,1.048,1.658,1.658,0,0,0,.707.3l.623.143a2.523,2.523,0,0,1,1.285.606,1.518,1.518,0,0,1,.4,1.107,1.889,1.889,0,0,1-.273,1.032,1.762,1.762,0,0,1-.783.663,2.943,2.943,0,0,1-1.22.231,2.559,2.559,0,0,1-1.639-.484,1.707,1.707,0,0,1-.642-1.338Z" transform="translate(-833.064 -1756.237)" fill="#6b2d92"/>
                                <path id="Path_9" data-name="Path 9" d="M944.157,1777.4a1.336,1.336,0,0,1-.315.726,1.827,1.827,0,0,1-.7.5,2.5,2.5,0,0,1-.976.181,2.15,2.15,0,0,1-1.567-.545,2.041,2.041,0,0,1-.557-1.529v-.745a2.091,2.091,0,0,1,.263-1.063,1.808,1.808,0,0,1,.736-.707,2.33,2.33,0,0,1,1.1-.25,2.147,2.147,0,0,1,1.067.252,1.748,1.748,0,0,1,.7.715,2.262,2.262,0,0,1,.248,1.085v.644h-2.992v.248a.982.982,0,0,0,.271.724.971.971,0,0,0,.722.273,1.2,1.2,0,0,0,.6-.141.615.615,0,0,0,.314-.368Zm-2.739-2.263a1.137,1.137,0,0,0-.252.787h1.881a1.164,1.164,0,0,0-.244-.784.849.849,0,0,0-.682-.284.9.9,0,0,0-.7.281Z" transform="translate(-891.969 -1771.662)" fill="#6b2d92"/>
                                <path id="Path_10" data-name="Path 10" d="M1002.341,1778.447h-1.1v-3.791h-.968v-.846h2.079V1775h.181a1.734,1.734,0,0,1,.526-1,1.563,1.563,0,0,1,1.026-.309,2.576,2.576,0,0,1,.368.025,1.4,1.4,0,0,1,.293.072v1.25a1.769,1.769,0,0,0-.366-.1,2.54,2.54,0,0,0-.408-.036,1.754,1.754,0,0,0-1.225.373,1.458,1.458,0,0,0-.4,1.126Zm-1.986,0v-.846h3.332v.846Z" transform="translate(-947.005 -1771.402)" fill="#6b2d92"/>
                                <path id="Path_11" data-name="Path 11" d="M1061.979,1775.14l1.014,3.513h.067l1-3.513h1.216l-1.607,4.637h-1.313l-1.616-4.637Z" transform="translate(-1002.259 -1772.733)" fill="#6b2d92"/>
                                <path id="Path_12" data-name="Path 12" d="M1126.05,1754.295v-.917h1.489v-2.806h-1.414v-.913h2.533v3.719h1.4v.917Zm1.458-5.788a.679.679,0,0,1-.217-.524.689.689,0,0,1,.217-.532.92.92,0,0,1,1.144,0,.689.689,0,0,1,.217.532.679.679,0,0,1-.217.524A.919.919,0,0,1,1127.508,1748.507Z" transform="translate(-1061.933 -1747.25)" fill="#6b2d92"/>
                                <path id="Path_13" data-name="Path 13" d="M1189.964,1775.555a.887.887,0,0,0-.284-.587.91.91,0,0,0-.6-.191.825.825,0,0,0-.711.341,1.64,1.64,0,0,0-.248.977v.311a1.629,1.629,0,0,0,.248.974.828.828,0,0,0,.711.339.929.929,0,0,0,.6-.183.852.852,0,0,0,.284-.553h1.128a1.779,1.779,0,0,1-.593,1.26,2.126,2.126,0,0,1-1.414.436,2.1,2.1,0,0,1-1.576-.564,2.231,2.231,0,0,1-.549-1.621v-.488a2.221,2.221,0,0,1,.549-1.62,2.5,2.5,0,0,1,2.99-.122,1.841,1.841,0,0,1,.593,1.292Z" transform="translate(-1117.587 -1771.532)" fill="#6b2d92"/>
                                <path id="Path_14" data-name="Path 14" d="M1252.86,1777.4a1.336,1.336,0,0,1-.316.726,1.823,1.823,0,0,1-.7.5,2.505,2.505,0,0,1-.976.181,2.149,2.149,0,0,1-1.567-.545,2.041,2.041,0,0,1-.558-1.529v-.745a2.1,2.1,0,0,1,.263-1.063,1.806,1.806,0,0,1,.736-.707,2.331,2.331,0,0,1,1.1-.25,2.145,2.145,0,0,1,1.066.252,1.749,1.749,0,0,1,.7.715,2.259,2.259,0,0,1,.248,1.085v.644h-2.992v.248a.936.936,0,0,0,.993,1,1.2,1.2,0,0,0,.6-.141.613.613,0,0,0,.314-.368Zm-2.739-2.263a1.136,1.136,0,0,0-.252.787h1.88a1.164,1.164,0,0,0-.244-.784.849.849,0,0,0-.681-.284.894.894,0,0,0-.7.281Z" transform="translate(-1174.036 -1771.662)" fill="#6b2d92"/>
                                <path id="Path_15" data-name="Path 15" d="M1379.977,1764.588h-3.842v-6.071h1.182v5.015h2.659Z" transform="translate(-1290.44 -1757.544)" fill="#6b2d92"/>
                                <path id="Path_16" data-name="Path 16" d="M1434.75,1754.3v-.917h1.49v-2.806h-1.414v-.913h2.533v3.72h1.4v.917Zm1.458-5.788a.68.68,0,0,1-.217-.524.689.689,0,0,1,.217-.532.919.919,0,0,1,1.145,0,.689.689,0,0,1,.217.532.68.68,0,0,1-.217.524A.919.919,0,0,1,1436.208,1748.508Z" transform="translate(-1343.998 -1747.251)" fill="#6b2d92"/>
                                <path id="Path_17" data-name="Path 17" d="M1495.27,1774.066h1.115v.778h.072a1.314,1.314,0,0,1,.532-.652,1.6,1.6,0,0,1,.865-.227,1.463,1.463,0,0,1,1.153.444,1.887,1.887,0,0,1,.4,1.294v3h-1.152v-2.726a1.141,1.141,0,0,0-.211-.758.809.809,0,0,0-.648-.244.922.922,0,0,0-.707.284,1.075,1.075,0,0,0-.265.764v2.68h-1.149Z" transform="translate(-1399.297 -1771.658)" fill="#6b2d92"/>
                                <path id="Path_18" data-name="Path 18" d="M1561.569,1777.4a1.333,1.333,0,0,1-.315.726,1.823,1.823,0,0,1-.7.5,2.5,2.5,0,0,1-.976.181,2.15,2.15,0,0,1-1.567-.545,2.041,2.041,0,0,1-.558-1.529v-.745a2.092,2.092,0,0,1,.263-1.063,1.809,1.809,0,0,1,.737-.707,2.329,2.329,0,0,1,1.1-.25,2.148,2.148,0,0,1,1.067.252,1.748,1.748,0,0,1,.7.716,2.263,2.263,0,0,1,.248,1.085v.644h-2.992v.248a.937.937,0,0,0,.993,1,1.2,1.2,0,0,0,.6-.141.614.614,0,0,0,.313-.368Zm-2.739-2.263a1.139,1.139,0,0,0-.252.787h1.881a1.166,1.166,0,0,0-.244-.784.85.85,0,0,0-.682-.284.894.894,0,0,0-.7.281Z" transform="translate(-1456.111 -1771.662)" fill="#6b2d92"/>
                                </g>
                                <rect id="Rectangle_1" data-name="Rectangle 1" width="4.888" height="4.893" rx="2.444" transform="translate(91.396)" fill="#6b2d92"/>
                                <rect id="Rectangle_2" data-name="Rectangle 2" width="4.888" height="4.893" rx="2.444" transform="translate(81.653 11.286)" fill="#ffc75f"/>
                                <rect id="Rectangle_3" data-name="Rectangle 3" width="4.888" height="4.893" rx="2.444" transform="translate(105.504 1.501)" fill="#ffc75f"/>
                                <rect id="Rectangle_4" data-name="Rectangle 4" width="4.888" height="4.893" rx="2.444" transform="translate(47.872 67.894)" fill="#ffc75f"/>
                                <rect id="Rectangle_5" data-name="Rectangle 5" width="4.888" height="4.893" rx="2.444" transform="translate(76.644 22.924)" fill="#6b2d92"/>
                                <rect id="Rectangle_6" data-name="Rectangle 6" width="4.888" height="4.893" rx="2.444" transform="translate(92.342 15.072)" fill="#6b2d92"/>
                                <rect id="Rectangle_7" data-name="Rectangle 7" width="4.888" height="4.893" rx="2.444" transform="translate(86.384 29.395)" fill="#ffc75f"/>
                                <rect id="Rectangle_8" data-name="Rectangle 8" width="4.888" height="4.893" rx="2.444" transform="translate(96.3 21.898)" fill="#6b2d92"/>
                                <rect id="Rectangle_9" data-name="Rectangle 9" width="4.888" height="4.893" rx="2.444" transform="translate(107.948 12.474)" fill="#6b2d92"/>
                                <rect id="Rectangle_10" data-name="Rectangle 10" width="4.888" height="4.893" rx="2.444" transform="translate(91.396 39.18)" fill="#6b2d92"/>
                                <rect id="Rectangle_11" data-name="Rectangle 11" width="4.888" height="4.893" rx="2.444" transform="translate(81.653 33.955)" fill="#6b2d92"/>
                                <rect id="Rectangle_12" data-name="Rectangle 12" width="4.888" height="4.893" rx="2.444" transform="translate(97.23 31.401)" fill="#6b2d92"/>
                                <rect id="Rectangle_13" data-name="Rectangle 13" width="4.888" height="4.893" rx="2.444" transform="translate(52.76 56.229)" fill="#6b2d92"/>
                                <rect id="Rectangle_14" data-name="Rectangle 14" width="4.888" height="4.893" rx="2.444" transform="translate(98.339 6.394)" fill="#6b2d92"/>
                                <path id="Path_19" data-name="Path 19" d="M494.309,638.235v.958h-4.888V634.3h2.629q-.873-1.3-1.863-2.52v.073H485.3v-4.893h.015a34.112,34.112,0,0,0-3.3-2.337v4.783h-4.888V634.3h-4.888v-4.893h4.888v-4.892h4.713a39.194,39.194,0,0,0-13.464-5.053v4.084h-4.888v-4.725q-2.146-.172-4.4-.167-20.645.067-41.28.059a6.671,6.671,0,0,0-6.688,5.916,6.583,6.583,0,0,0,6.536,7.22q19.8,0,39.6-.028a33.741,33.741,0,0,1,4.993.351v-3.75h4.888v4.893h-.051a21.993,21.993,0,0,1,9.859,6.5,21.616,21.616,0,0,1,3.208,5.028h4.309v4.892H481.79a31.391,31.391,0,0,1,.419,10.745,33.72,33.72,0,0,1-10.626,21.056,32.92,32.92,0,0,1-22.453,8.383q-8.345.01-16.68.01l-2.3,14.188h17a51.259,51.259,0,0,0,34.339-12.859A49.109,49.109,0,0,0,497.652,660.2,39.458,39.458,0,0,0,494.309,638.235Zm-.918,11.863H488.5v-4.893h4.888Z" transform="translate(-408.655 -587.252)" fill="#6b2d92"/>
                                <path id="Path_20" data-name="Path 20" d="M480.75,1046.294v-4.671c-.075,0-.149-.011-.225-.011h-6.457a4.622,4.622,0,0,0-4.569,3.941l-5.515,37.108a6.9,6.9,0,0,0,6.826,7.917h7.6l2.3-14.187.014-.086q1.068-7.21,2.128-14.341H478.9v-4.892h4.686q.758-5.1,1.511-10.16a4.693,4.693,0,0,0,.049-.615Zm-2.459,20.561H473.4v-4.893h4.888Zm0-14.115H473.4v-4.892h4.888Z" transform="translate(-456.919 -973.718)" fill="#ffc75f"/>
                            </g>
                            </svg></a>
                        
                        
                    
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="fa fa-bars"></span> Menu
                            </button>
                            <div className="collapse navbar-collapse" id="ftco-nav">
                            
                            <ul className="navbar-nav m-auto">
                                    <li className="nav-item active"><a href="/dashboard/" className="nav-link">Dashboard</a></li>
                                <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Reports</a>
                                <div className="dropdown-menu" aria-labelledby="dropdown08" style={{marginTop: "-10px"}}>
                                    {/* <a className="dropdown-item" href="#">Page 1</a>
                                    <a className="dropdown-item" href="#">Page 2</a>
                                    <a className="dropdown-item" href="#">Page 3</a>
                                    <a className="dropdown-item" href="#">Page 4</a> */}
                                </div>
                                </li>
                                    <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/manage/" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Manage</a>
                                <div className="dropdown-menu" aria-labelledby="dropdown08" style={{marginTop: "-10px"}}>
                
                                    <Link className="dropdown-item" to ='/generation/' >Offline License</Link>
                                    <a className="dropdown-item" href="/download/">Download</a>
                                    <a className="dropdown-item" href="/manageorg">Organization</a>
                                    <a className="dropdown-item" href="/manageusers/">Users</a>
                                    <a className="dropdown-item" href="#">Products</a>
                                </div>
                                </li>
                                   
                                </ul>
                            <div>
                                <ul className="navbar-nav m-auto">
                                <li className="nav-item"><a href="#" className="nav-link"><span style={{position: "relative", top: "5px"}}><i className="fa fa-search icon2"></i></span></a></li>

                                <li className="nav-item tp-icon"><a href="#" className="nav-link"><span style={{position: "relative", top: "5px"}}><i className="fa fa-envelope icon2"></i><span className="badge">1</span></span></a></li>

                                <li className="nav-item dropdown">
                                    
                                    <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-user icon"></i> {name}</a>
                                    <div className="dropdown-menu" aria-labelledby="dropdown08" style={{marginTop: "-20px"}}>
                                    <a className="dropdown-item" href="/">Logout</a>
                                    
                                    </div>
                                </li>
                            </ul>

                            </div>
                            </div>
                            </div>
                        </nav>
                    </div>
                    
</div>
</div></div>

  );

}

export default Header;
