import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';



import Editor from "react-simple-code-editor";

import Prism from "prismjs";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";

import Button from '@material-ui/core/Button';

import * as p5 from 'p5';

const SketchEditor = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50px auto;
  grid-template-areas: "button button" "editor sketch"; 
  grid-template-gap: 10px;
  height: 400px;
`

const ButtonPanel = styled.div`
  grid-area: button;
`
const EditorPanel = styled.div`
  grid-area: editor;
`

const SketchPanel = styled.div`
  grid-area: sketch;
  background-color: silver;
`

export default ({initialCode}) => {

  const [code, setCode] = useState(initialCode || '')
  const [p5Sketch, setp5Sketch] = useState(null);

  const sketchRef = useRef();

  useEffect(() => {

    updateCode();

  }, []);

  const restoreCode = () => {
    setCode(initialCode);
  }

  const generateCode = (oldCode) => {

    let newCode = oldCode;

    const replacementDictionary = [
      // Functions
      ['function setup', 'p5.setup = function '],
      ['function draw','p5.draw = function '],

      // Events
      ['function mousePressed','p5.mousePressed = function '],

      // Commands
      ['createCanvas','p5.createCanvas'],
      ['background','p5.background'],
      ['rect','p5.rect'],
      ['fill','p5.fill'],
      ['ellipse', 'p5.ellipse']
    ];

    replacementDictionary.forEach((term) => {
      const searchTerm = new RegExp( term[0], 'gi')
      newCode = newCode.replace(searchTerm, term[1]);
    })

    return newCode;
  }

  const updateCode = () => {

    if (p5Sketch)
    {
      p5Sketch.remove();
    };
    
    try {

      var sketchCode = generateCode(code);
      var newSketch = new Function ('p5', sketchCode);
      setp5Sketch(new p5(newSketch, sketchRef.current));
    } catch (e) {
      console.log(e)
    }
    

  }

  return (
    <SketchEditor>
      <div>
      <Button onClick={() => restoreCode()}>Restore Code</Button>
        <Button onClick={() => updateCode()}>Run Code</Button>
        <Button onClick={() => p5Sketch.noLoop()}>Halt Code</Button>
      </div>
      <EditorPanel>
      <Editor
        value={code}
        onValueChange={(code) => {setCode(code)}}
        highlight={(code) => highlight(code, languages.js)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 14
        }}
    />
      </EditorPanel>
      <SketchPanel ref={sketchRef}>

      </SketchPanel>
    </SketchEditor>
  );
}  