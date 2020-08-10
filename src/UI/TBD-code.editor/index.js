import React, {useState} from 'react';
import styled from 'styled-components';

import Editor from "react-simple-code-editor";

import Prism from "prismjs";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";


/*
const initialCode = `function add(a, b) {
  return a + b;
}
`;

*/

export default ({initialCode, onChange}) => {
  console.log(initialCode);
  const [code, setCode] = useState(initialCode);

  return (
    <Editor
      value={code}
      onValueChange={(code) => {setCode(code); onChange && onChange(code)}}
      highlight={(code) => highlight(code, languages.js)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 14
      }}
    />
  );
};
