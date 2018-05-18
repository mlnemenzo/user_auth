import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Route } from 'react-router-dom';
import Nav from './nav';
import Home from './home';
import About from './about';
import SecretDocs from './secret_doc';
import OperativeList from './operative_list';

const App = () => (
    <div>
        <Nav/>
        <div className = "container">
            <Route exact path ="/" component = {Home}/>
            <Route path = "/about" component = {About}/>
            <Route path = "/secret_doc" component = {SecretDocs}/>
            <Route path = "/operative_list" component = {OperativeList}/>
        </div>
    </div>
);

export default App;
