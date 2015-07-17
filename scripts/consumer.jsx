import React from 'react';
import {Breadcrumbs} from 'HomeDepot.Platform.UI.Armory';
import {Breadcrumb} from 'HomeDepot.Platform.UI.Armory';
import {forgeApp} from 'HomeDepot.Platform.UI.Smith';
import forge from './routes/forge/components/forge';
import config from './config.jsx';

var breadcrumbList = [{link:'#/partyCentral/Products/5',text:'DXX'},{link:'#/partyCentral/Products/',text:'Hardware Tools'},{text:'Awesome Hammer AB543'}];

console.log(Breadcrumbs);

class PartyHard extends Breadcrumbs {

}

React.render(<PartyHard/>, document.getElementById('root'));

//let routeComponents = {};
//routeComponents.money = forge;
    
//forgeApp(config, routeComponents);    

