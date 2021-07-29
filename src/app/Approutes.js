import React, {lazy, Suspense} from 'react'
import {Route, Switch, useParams} from 'react-router-dom'
import {Spinner} from "react-bootstrap";

const Login = lazy(() => import('./Login/Login'))
const Dashboard = lazy(() => import('./Dashboard/Dashboard'))
const AddOrganization = lazy(() => import('./Manage/AddOrganization'))
const ManageOrganization = lazy(() => import('./Manage/ManageOrganizations'))
const ManageUsers= lazy(() => import('./Manage/ManageUsers'))
const Report = lazy(() => import('./Report/Report'))
const manage = lazy(() => import('./Manage/manage'))
const licgen = lazy(() => import('./Dashboard/LicGen'))
const download = lazy(() => import('./Dashboard/Download'))
const Manageorg = lazy(() => import('./Dashboard/Manage-org'))
const Manageusers = lazy(() => import('./Dashboard/Manage-users'))


function AppRoutes() {
  let {impact_slug} = useParams();

  return (
    <Suspense fallback={<div className={'d-flex justify-content-center align-items-center'} style={{height: '90vh'}}>
      <Spinner animation="border"/>
    </div>}>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/manage/add-organization/" component={AddOrganization}/>
        <Route exact path="/manage/manage-organization/" component={ManageOrganization}/>
        <Route exact path="/manage/manage-users/" component={ManageUsers}/>
        <Route exact path="/report/" component={Report}/>
        <Route exact path="/manage/" component={manage}/>
        <Route exact path="/generation/" component={licgen}/>
        <Route exact path="/download/" component={download}/>
        <Route exact path="/manageorg/" component={Manageorg}/>
        <Route exact path="/manageusers/" component={Manageusers}/>
      </Switch>
    </Suspense>
  )
}

export default AppRoutes
