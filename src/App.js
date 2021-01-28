import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import MyMusic from './pages/MyMusic';
import Nav from './component/Nav';
import MusicPlayerTemplate from './component/MusicPlayer/MusicPlayerTemplate';
import styled, { createGlobalStyle } from 'styled-components';
import { MusicProvider } from './MusicContext';
import { PlaylistProvider } from './PlaylistContext';
import ContextRoute from './ContextRoute';

const GlobalStyle = createGlobalStyle`
*{
  box-sizing:border-box;
}
  body{
    padding:0;
    margin:0;
    background-color:#030303;
    color:#fff;
    width:100%;
  }
  a{
    text-decoration:none;
    color:#ffffff80;
  }
`;

function App() {


  return (
    <MusicProvider>
      <PlaylistProvider>
        <GlobalStyle />
        <Nav />
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/mymusic" component={MyMusic} />
        </div>
        <MusicPlayerTemplate />
      </PlaylistProvider>
    </MusicProvider>
  );
}

export default React.memo(App);
