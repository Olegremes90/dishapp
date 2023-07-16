import Home from "./components/Home";
import React, { Component } from 'react';
import {Link, Route, Switch, BrowserRouter} from "react-router-dom";
import axios from 'axios';
import Cocktails from "./components/Cocktails";
import CocktailItem from "./components/CocktailItem";
import Salads from "./components/Salads";
import SaladItem from "./components/SaladItem";
import Pasta from "./components/Pasta";
import PastaItem from "./components/PastaItem";
class App extends React.Component {

    state = {
        details : [],
    }

    componentDidMount() {

        let data ;

        axios.get('http://127.0.0.1:8000//recipes-lists/')
        .then(res => {
            data = res.data;
            this.setState({
                details : data
            });
        })
        .catch(err => {})
    }

  render() {
    return(
      <div>
            <Switch>


                    {this.state.details.map(item => {
                        let id = item.id
                        let path = `/home/cocktails/${id}`
                         return(
                                   <Route key={item.id} path={path}>
                                 <CocktailItem key={item.id} item={item}/>
                             </Route>

                             )
                    })}
                     <Route path='/home/cocktails'>
                    <Cocktails state={this.state}/>
                </Route>
                {this.state.details.map(item => {
                        let id = item.id
                        let path = `/home/salads/${id}`
                         return(

                                   <Route key={item.id} path={path}>
                                 <SaladItem key={item.id} item={item}/>
                             </Route>



                             )

                    })}

                  <Route path='/home/salads'>
                    <Salads state={this.state}/>
               </Route>

                     {this.state.details.map(item => {
                        let id = item.id
                        let path = `/home/pasta/${id}`
                         return(

                                   <Route key={item.id} path={path}>
                                 <PastaItem key={item.id} item={item}/>
                             </Route>



                             )

                    })}

                <Route path='/home/pasta'>
                    <Pasta state={this.state}/>
                </Route>
                <Route path='/home' >
                     <Home/>
                </Route>

            </Switch>
          </div>
    )}
}
export default App;
