import React, { useEffect, useRef, useState } from 'react';
import Blockly from 'blockly/core';
import {BlocklyComponent, BlocklyJS, Block, Value, Category, Field, Shadow } from '../../salih-blockly';
import '../../salih-blockly/blocks/customblocks';
import '../../salih-blockly/generator/generator';
import p5 from 'p5';


export default ({initialXml}) => {

  const simpleWorkspace = useRef();
  const myRef = useRef();
  const [p5Sketch, setp5Sketch] = useState(null);

  useEffect(()=> {
    runCode();
  }, []);

  const loadXml = () => {
    var XmlStr = `<xml xmlns="https://developers.google.com/blockly/xml"><Block type="logic_compare" id=":-K85}CG%w]B{*nQ)Ppo" x="0" y="0"/></xml>`
    var Xml = Blockly.Xml.textToDom(XmlStr);
    Blockly.Xml.domToWorkspace(Xml, simpleWorkspace.current.workspace);
    
  }

  const generateXml = () => {
    

    var Xml = Blockly.Xml.workspaceToDom(
      simpleWorkspace.current.workspace
    );

    console.log((new XMLSerializer).serializeToString(Xml))
    return Xml;

  }

  const logCode = () => {
    var code = BlocklyJS.workspaceToCode(
      simpleWorkspace.current.workspace
    );
    console.log(code);

    this.setState({sketchCode: code});
  }

  const generateCode = (oldCode) => {

    let newCode = oldCode;

    const replacementDictionary = [
      // Functions
      [/\bfunction setup\b/, 'p5.setup = function '],
      [/\bfunction draw\b/,'p5.draw = function '],

      // Events
      [/\bfunction mousePressed\b/,'p5.mousePressed = function '],

      // Commands
      [/\bcreateCanvas\b/ ,'p5.createCanvas'],
      [/\bbackground\b/   ,'p5.background'],
      [/\brect\b/         ,'p5.rect'],
      [/\bfill\b/         ,'p5.fill'],
      [/\bellipse\b/      , 'p5.ellipse'],
      [/\bpoint\b/        , 'p5.point'],
      [/\bstroke\b/       , 'p5.stroke'],
      [/\bstrokeWeight\b/ , 'p5.strokeWeight'],
      [/\btext\b/         , 'p5.text'],

      // System Variables
      [/\bframeCount\b/, 'p5.frameCount'],
      [/\bmouseX\b/, 'p5.mouseX'],
      [/\bmouseY\b/, 'p5.mouseY'],
      [/\bwidth\b/, 'p5.width'],
      [/\bheight\b/, 'p5.height'],
      [/\bdisplayWidth\b/, 'p5.displayWidth'],
      [/\bwindowWidth\b/, 'p5.windowWidth'],
      [/\pixelDensity\b/, 'p5.pixelDensity()'],

      // remove any duplicates
      //['p5.p5', 'p5'],

    ];

    replacementDictionary.forEach((term) => {
      const searchTerm = new RegExp( term[0], 'gi')
      newCode = newCode.replace(searchTerm, term[1]);
    })

    return newCode;
  }

  const runCode = () => {
    
    try {

      // Get the XML
      var code = BlocklyJS.workspaceToCode(
        simpleWorkspace.current.workspace
      );

      // convert the code to a format p5 can use.
      code = generateCode(code);
      console.log(code);

      // generate the new sketch
      var newSketch = new Function('p5', code);

      // if there is already a sketch visible, remove it.
      if (p5Sketch)
      {
        p5Sketch.remove();
      };

      setp5Sketch(new p5(newSketch, myRef.current));

    } catch (e) {
      console.log(e)
    }
    
  }

  return (
    <div>
      <button onClick={generateCode}>Save Code</button>
      <button onClick={loadXml}>Load Xml</button>
      <button onClick={generateXml}>Xml</button>
      <button onClick={runCode}>Run Code</button>
      <button onClick={logCode}>Log Code</button>
      
      <BlocklyComponent ref={simpleWorkspace}
        readOnly={false} trashcan={true} media={'media/'}
        move={{
          scrollbars: true,
          drag: true,
          wheel: true
        }}
        initialXml={initialXml}>
            <Category name="p5 Functions" colour="330">
              <Block type="p5_setup"/>
              <Block type="p5_draw"/>
              <Block type="p5_create_canvas"/>
            </Category>
            <Category name="p5 Colours" colour="300">
              <Block type="p5_background" />
              <Block type="p5_fill" />
              <Block type="p5_stroke" />
              <Block type="p5_stroke_weight" />

            </Category>
            <Category name="p5 Shapes" colour="330">

              <Block type="p5_text" />
              <Block type="p5_rect" />
              <Block type="p5_point" />
              
            </Category>
            <Category name="p5 Variables">
              <Block type="p5_sys_variable" />
            </Category>
            <Category name="Variables" colour="#a55b80" custom="VARIABLE"></Category>     
            <Category name="Math" colour="#5b67a5">
              <Block type="math_number">
                <Field name="NUM">0</Field>
              </Block>
              <Block type="math_arithmetic">
                <Field name="OP">ADD</Field>
                <Value name="A">
                  <Shadow type="math_number">
                    <Field name="NUM">1</Field>
                  </Shadow>
                </Value>
                <Value name="B">
                  <Shadow type="math_number">
                    <Field name="NUM">1</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="math_single">
                <Field name="OP">ROOT</Field>
                <Value name="NUM">
                  <Shadow type="math_number">
                    <Field name="NUM">9</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="math_trig">
                <Field name="OP">SIN</Field>
                <Value name="NUM">
                  <Shadow type="math_number">
                    <Field name="NUM">45</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="math_constant">
                <Field name="CONSTANT">PI</Field>
              </Block>
              <Block type="math_number_property">
                <mutation divisor_input="false"></mutation>
                <Field name="PROPERTY">EVEN</Field>
                <Value name="NUMBER_TO_CHECK">
                  <Shadow type="math_number">
                    <Field name="NUM">0</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="math_round">
                <Field name="OP">ROUND</Field>
                <Value name="NUM">
                  <Shadow type="math_number">
                    <Field name="NUM">3.1</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="math_on_list">
                <mutation op="SUM"></mutation>
                <Field name="OP">SUM</Field>
              </Block>
              <Block type="math_modulo">
                <Value name="DIVIDEND">
                  <Shadow type="math_number">
                    <Field name="NUM">64</Field>
                  </Shadow>
                </Value>
                <Value name="DIVISOR">
                  <Shadow type="math_number">
                    <Field name="NUM">10</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="math_constrain">
                <Value name="VALUE">
                  <Shadow type="math_number">
                    <Field name="NUM">50</Field>
                  </Shadow>
                </Value>
                <Value name="LOW">
                  <Shadow type="math_number">
                    <Field name="NUM">1</Field>
                  </Shadow>
                </Value>
                <Value name="HIGH">
                  <Shadow type="math_number">
                    <Field name="NUM">100</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="math_random_int">
                <Value name="FROM">
                  <Shadow type="math_number">
                    <Field name="NUM">1</Field>
                  </Shadow>
                </Value>
                <Value name="TO">
                  <Shadow type="math_number">
                    <Field name="NUM">100</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="math_random_float"></Block>
            </Category>  
            <Category name="Colour" colour="#a5745b">
              <Block type="colour_picker">
                <Field name="COLOUR">#ff0000</Field>
              </Block>
              <Block type="colour_random"></Block>
              <Block type="colour_rgb">
                <Value name="RED">
                  <Shadow type="math_number">
                    <Field name="NUM">100</Field>
                  </Shadow>
                </Value>
                <Value name="GREEN">
                  <Shadow type="math_number">
                    <Field name="NUM">50</Field>
                  </Shadow>
                </Value>
                <Value name="BLUE">
                  <Shadow type="math_number">
                    <Field name="NUM">0</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="colour_blend">
                <Value name="COLOUR1">
                  <Shadow type="colour_picker">
                    <Field name="COLOUR">#ff0000</Field>
                  </Shadow>
                </Value>
                <Value name="COLOUR2">
                  <Shadow type="colour_picker">
                    <Field name="COLOUR">#3333ff</Field>
                  </Shadow>
                </Value>
                <Value name="RATIO">
                  <Shadow type="math_number">
                    <Field name="NUM">0.5</Field>
                  </Shadow>
                </Value>
              </Block>
            </Category>
            <Category name="Functions" colour="#995ba5" custom="PROCEDURE"></Category>
            <Category name="Second Catgeory" colour="150">
              <Block type="controls_ifelse" />
              <Block type="logic_compare" />
              <Block type="logic_operation" />
              <Block type="controls_repeat_ext">
                <Value name="TIMES">
                  <Shadow type="math_number">
                    <Field name="NUM">10</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="logic_operation" />
              <Block type="logic_negate" />
              <Block type="logic_boolean" />
              <Block type="logic_null" disabled="true" />
              <Block type="logic_ternary" />
              <Block type="text_charAt">
                <Value name="VALUE">
                  <Block type="variables_get">
                    <Field name="VAR">text</Field>
                  </Block>
                </Value>
              </Block>
              </Category>
            <Category name="Loops" colour="#5ba55b">
        <Block type="controls_repeat_ext">
          <Value name="TIMES">
            <Shadow type="math_number">
              <Field name="NUM">10</Field>
            </Shadow>
          </Value>
        </Block>
        <Block type="controls_whileUntil">
          <Field name="MODE">WHILE</Field>
        </Block>
        <Block type="controls_for">
          <Field name="VAR" id=":U]m%4_bSR;MXoN7V?dw">i</Field>
          <Value name="FROM">
            <Shadow type="math_number">
              <Field name="NUM">1</Field>
            </Shadow>
          </Value>
          <Value name="TO">
            <Shadow type="math_number">
              <Field name="NUM">10</Field>
            </Shadow>
          </Value>
          <Value name="BY">
            <Shadow type="math_number">
              <Field name="NUM">1</Field>
            </Shadow>
          </Value>
        </Block>
        <Block type="controls_forEach">
          <Field name="VAR" id="_;V2Sy-zf{FV4}lV]#:~">j</Field>
        </Block>
        <Block type="controls_flow_statements">
          <Field name="FLOW">BREAK</Field>
        </Block>
      </Category>
      </BlocklyComponent>
      <div ref={myRef}></div> 
    </div>
  );
}