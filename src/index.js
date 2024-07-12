import React ,{StrictMode}from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ColorModeProvider,ChakraProvider,theme, ColorModeScript } from '@chakra-ui/react';
import ColorModeSwitcher from './ColorModeSwitcher';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ColorModeScript/>
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
    <App />
    </ChakraProvider>
  </StrictMode>
);


