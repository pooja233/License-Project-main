import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tabs, Tab, Modal, Row, Button, Col, Form, Card, Container} from "react-bootstrap";
import Add_organization from './AddOrganization';
import Manage_organizations from './ManageOrganizations';
import Manage_users from './ManageUsers';
function manage(){
         return (
             <Container>
                 <Row>
                     <Col>
                         <Tabs defaultActiveKey="Home" 
                               id="controlled-tab-example">
                             <Tab eventKey="home" title="Add Organization">
                             <br/>
                                 <Add_organization />
                             </Tab>
                             <Tab eventKey="profile" title="Manage Organizations">
                             <br/>
                                 <Manage_organizations />
                             </Tab>
                             <Tab eventKey="contact" title="Manage Users">
                             <br/>
                                 <Manage_users />
                             </Tab>
                         </Tabs>
                     </Col>
                 </Row>
             </Container>
         );
     }
 
 
 export default manage;