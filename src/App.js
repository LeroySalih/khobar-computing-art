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

import React, {useState} from 'react';
import './App.css';
import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import SketchPage from './pages/sketch.page';

import styled from 'styled-components';
import Drawer from '@material-ui/core/Drawer';
import Navbar from './components/navbar';


export default () => {

    const initialXml = '<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="cFou2T#bz1.VWVTcIu%x">x</variable></variables><block type="p5_setup" id="rMdb?$_l5_hf6UKDeY7@" x="163" y="48"><statement name="statements"><block type="p5_create_canvas" id="6]@$Oy{R!;4=dM.ltJZK"><value name="width"><block type="math_number" id="tyalS*Jld+=^x!K|~HGp"><field name="NUM">200</field></block></value><value name="height"><block type="math_number" id="Zv*:FT]=Mqx!.?f[nVI6"><field name="NUM">200</field></block></value><next><block type="p5_background" id="w~|)+=MU}|YJ`;Wcd6@^"><value name="NAME"><block type="colour_picker" id="/hwd7uxDkH2CZW/JCg_w"><field name="COLOUR">#ff0000</field></block></value><next><block type="variables_set" id="@gMQv9_u@:m,|rq^x@hc"><field name="VAR" id="cFou2T#bz1.VWVTcIu%x">x</field><value name="VALUE"><block type="math_number" id="w8`;g5+e:w@j+~m.2i^5"><field name="NUM">0</field></block></value><next><block type="controls_repeat_ext" id="{lPkERx$9x`cjj]~5YEN"><value name="TIMES"><shadow type="math_number" id="hgt^Ubdu@MKU8w(haW^*"><field name="NUM">10</field></shadow></value><statement name="DO"><block type="p5_point" id="(2sI}k+{T{:$?Q/:+?})"><value name="x"><block type="math_number" id="2H/MW2;,]{:rf!sunPN{"><field name="NUM">50</field></block></value><value name="y"><block type="math_number" id="fd[`{w%DvA[T_7dA+2b;"><field name="NUM">50</field></block></value></block></statement></block></next></block></next></block></next></block></statement></block></xml>';
    const [drawerOpen, setDrawerOpen] = useState(false);
    const handleSetDrawer = (state) => {
      setDrawerOpen(state);
    }

    return (<div className="App">
        
    <Router>
      <Drawer anchor={'left'} 
              open={drawerOpen} 
              onClose={() => handleSetDrawer(false)}>
      <div>Hello Testing</div>
    </Drawer>
      <Navbar setDrawer={handleSetDrawer}>
        <Link to="/">Home</Link>
        <Link to="/sketch">Sketch</Link>
      </Navbar>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>

        <Route path="/sketch">
          <SketchPage initalXml={initialXml} />
        </Route>
      </Switch>
    </Router>
  </div>);

}


const LandingPage = () => {
  return (<div>Landing Page...</div>)
}


