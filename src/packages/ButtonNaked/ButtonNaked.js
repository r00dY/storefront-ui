import React from "react";
import styled from '@emotion/styled'

// naked button (with no styling!) to promote accessibility

export default styled.button`
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
  
  overflow: visible;
  text-transform: none;
  
  appearance: none;
  
  &::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  
  &:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  
  border: 0;
  margin: 0;
  padding: 0;
  background: transparent;
  
  display: block;
  
  text-align: left;
  
  cursor: pointer;
 
`;
