import React from 'react';

import firebase from '../../components/firebase';
import Container from '../../UI/container';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import uuid from 'react-uuid';
import {useSnackbar} from 'notistack';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export default ({user}) => {

  const { enqueueSnackbar } = useSnackbar();

  const handleNewSketch =() => {
    
    console.log(`Creating new Sketch`)
    const sketchId = uuid();
    const newSketch = {
      name: 'New Sketch',
      xml: `<xml xmlns="https://developers.google.com/blockly/xml">
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
      </xml>`
    }

    firebase.doSaveSketch(user.uid, sketchId, newSketch)
      .then(
        () => enqueueSnackbar('New Sketch Created', {variant: 'success'})
      )
      .catch(
        (e) => enqueueSnackbar(e.message, {variant: 'error'})
      ); 
  }

  const handleSketchDelete = (key) => {
    firebase.user(user.uid)
            .child('sketches')
            .child(key)
            .remove()
            .then(() => enqueueSnackbar('Sketch Removed', {variant: 'success'}))
  }

  return (
    <Container>
      <h1>User Sketch Pages</h1>
      {user && 
      <Button onClick={handleNewSketch} variant="contained" color="primary">
        <AddCircleIcon/>
          New Sketch
      </Button>
      }
      {
        user && user.sketches &&
          Object.keys(user.sketches).map((key, index) => {
            const sketch = user.sketches[key];

            return (
              <div key={index}>
                <Link to={`/sketchpad#${user.uid}:::${key}`}>{sketch.name}</Link>
                <IconButton onClick={()=> handleSketchDelete(key)}>
                  <DeleteForeverIcon/>
                </IconButton>
              </div>
          )
          
          })
      }
    </Container>
  );
}