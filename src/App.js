import React, { useState, useRef } from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import MyMusic from './pages/MyMusic';
import Nav from './component/Nav';
import MusicPlayerTemplate from './component/MusicPlayer/MusicPlayerTemplate';
import styled, { createGlobalStyle } from 'styled-components';
import { MusicProvider, PlayPauseProvider } from './MusicContext';
import { PlaylistProvider } from './PlaylistContext';

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
  #root{
    width:100%;
    height:100vh;
    position: relative;
  }
`;

const PageContainer = styled.div`
  width:100%;
`;

function App() {

  const [open, setOpen] = useState(false);

  const onPopToggle = () => {
    setOpen(!open);
  }

  const onClosePop = () => {
    setOpen(false);
  }
  const onOpenPop = () => {
    setOpen(true);
  }


  return (
    <MusicProvider>
      <PlaylistProvider>
        <PlayPauseProvider>
          <GlobalStyle />
          <Nav />
          <PageContainer>
            <Route path="/" exact render={() => <Home open={open} onOpenPop={onOpenPop} />} />
            <Route path="/mymusic" render={() => <MyMusic open={open} />} />
          </PageContainer>
          <MusicPlayerTemplate open={open} onPopToggle={onPopToggle} onClosePop={onClosePop} onOpenPop={onOpenPop} />
        </PlayPauseProvider>
      </PlaylistProvider>
    </MusicProvider>
  );
}

export default React.memo(App);
