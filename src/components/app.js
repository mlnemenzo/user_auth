import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Route } from 'react-router-dom';
import Nav from './nav';
import Home from './home';
import About from './about';
import SecretDocs from './secret_doc';
import OperativeList from './operative_list';
import auth from '../hoc/auth'

const App = () => (
    <div>
        <Nav/>
        <div className = "container">
            <Route exact path ="/" component = {Home}/>
            <Route path = "/about" component = {About}/>
            <Route path = "/secret_doc" component = {auth(SecretDocs)}/>
            <Route path = "/operative_list" component = {auth(OperativeList)}/>
        </div>
    </div>
);

export default App;
