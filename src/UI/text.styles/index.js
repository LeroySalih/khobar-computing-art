import styled from "styled-components";

import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

export const LogoText = styled.h1`
  font-family: "Nunito";
`;

export const H1 = styled.h1`
  font-size: 3rem;
  font-family: "Oswald";
  font-family: "Oswald";
  margin-left: auto;
  margin-right: auto;
`;

export const H2 = styled.h2`
  font-size: 2.3rem;
  font-family: "Oswald";
  font-family: "Oswald";

  margin-left: auto;
  margin-right: auto;
`;

export const H3 = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  color: gray;
  font-family: "Oswald";

  margin-left: auto;
  margin-right: auto;
`;

export const H4 = styled.p`
  font-size: 1.2rem;
  color: #303030;
  font-family: "Open Sans";
  font-weight: bold;
  line-height: 2.5rem;
  text-align: justify;
  text-justify: inter-word;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  color: #303030;
  font-family: "Open Sans";
  line-height: 2.5rem;
  text-align: justify;
  text-justify: inter-word;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
`;

export const Quote = styled.div`
  background-color: #e0e0e0;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  padding: 20px;
  border-left: solid red 5px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  font-family: "Open Sans";
  font-size: 1.8rem;
  color: black;

  Text ::before {
    content: '"';
  }

  Text ::after {
    content: '"';
  }
`;

export const Ul = styled.ul`
  margin-top: -40px;
  li {
    font-family: "Open Sans";
    margin-bottom: 3px;
  }
`

export const QuoteText = styled.span`
  ::before {
    font-size: 3rem;
    margin-right: 0.4rem;
    color: gray;
    content: "“";
  }

  ::after {
    font-size: 3rem;
    margin-left: 0.4rem;
    color: gray;
    content: "”";
  }
`;

export const QuoteSource = styled.div`
  color: gray;
  font-size: 1rem;
  font-style: italic;
  margin-top: 20px;
  text-align: right;
`;

export const Caption = styled.div`
  color: grey;
  font-style: italic;
  font-size: 0.8rem;
  margin-top: 10px;

` 

export const Table = styled.table`

  margin-top: 10px;
  margin-bottom: 10px;

  th {
    padding: 10px;
    background-color: silver;
    text-align: center;
    border-bottom: black 1px solid;
    font-family: 'Open Sans';
    font-size: 0.8rem;
  }

  td {
    padding: 5px; 
    border-right: silver 1px dashed;
    font-family: 'Open Sans';
    font-size: 0.8rem;

  }


  td:last-child {
    border-right: none;
  }


`


export { BlockMath, InlineMath };
