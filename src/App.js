/**
 * @license
 *
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Main React component that includes the Blockly component.
 * @author samelh@google.com (Sam El-Husseini)
 */

import React, {useState, useEffect} from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import UserPage from './pages/user.page';
import SketchPage from './pages/sketch.page';


import Drawer from '@material-ui/core/Drawer';
import Navbar from './components/navbar';
import DrawerTutorials from './components/drawer.tutorials';

import firebase from './components/firebase';

export default () => {

    const initialXml = `<xml xmlns="https://developers.google.com/blockly/xml">
    <block type="p5_setup" id="rMdb?$_l5_hf6UKDeY7@" x="72" y="18">
      <statement name="statements">
        <block type="p5_create_canvas" id="6]@$Oy{R!;4=dM.ltJZK">
          <value name="width">
            <block type="math_number" id="tyalS*Jld+=^x!K|~HGp">
              <field name="NUM">200</field>
            </block>
          </value>
          <value name="height">
            <block type="math_number" id="Zv*:FT]=Mqx!.?f[nVI6">
              <field name="NUM">200</field>
            </block>
          </value>
          <next>
            <block type="p5_background" id="w~|)+=MU}|YJ;Wcd6@^">
              <value name="NAME">
                  <block type="colour_picker" id="/hwd7uxDkH2CZW/JCg_w">
                    <field name="COLOUR">#ff0000</field>
                  </block>
              </value>
            </block>
          </next>
        </block>
      </statement>
    </block>
    <block type="p5_draw" id="rErHIjaxU[]_=fRnaLM;" x="307" y="17"/>
    </xml>`;
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined); // checking user.

    const handleSetDrawer = (state) => {
      setDrawerOpen(state);
    }

    useEffect(() => {
      firebase.auth.onAuthStateChanged((user) => {
        console.log('User Update:', user);
        if (user) {
          firebase.user(user.uid).on('value', snapshot => {
            console.log('Current User profile', snapshot.val());
            setCurrentUser(snapshot.val()); // user object signed in.
          });
        } else {
          setCurrentUser(null); // null not signed in.
        }
        
      })
    }, []);

    
    return (<div className="App">
    <SnackbarProvider maxSnack="3">
    <Router>
      <Drawer anchor={'right'} 
              open={drawerOpen} 
              onClose={() => handleSetDrawer(false)}>
      <DrawerTutorials>

      </DrawerTutorials>
    </Drawer>
      <Navbar setDrawer={handleSetDrawer} user={currentUser}>
        
      </Navbar>

      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>

        <Route path="/user/:id" exact>
          <UserPage />
        </Route>

        <Route path="/sketchpad">
          <SketchPage initialXml={initialXml} user={currentUser}/>
        </Route>

        


        <Route path="/mysketches">
          <UserPage user={currentUser}/>
        </Route>

      </Switch>
    </Router>
    </SnackbarProvider>    
  </div>);

}


const LandingPage = () => {
  return (<div>Landing Page...</div>)
}


