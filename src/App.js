import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import MyMusic from './pages/MyMusic';
import Nav from './component/Nav';
import MusicPlayerTemplate from './component/MusicPlayer/MusicPlayerTemplate';
import styled, { createGlobalStyle } from 'styled-components';
import { MusicProvider, PlayPauseProvider } from './MusicContext';
import { PlaylistProvider } from './PlaylistContext';
import { MyMusicProvider } from './MyMusicContext';

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

const MyMusicAddAlert = styled.div`
    position: absolute;
    left: 2%; bottom:10%;

    padding: 12px;
    background: #212121;
    font-size:12px;
    border-radius:2px;

    display:${props => props.alert ? "block" : "none"};
`;


function App() {

  const [open, setOpen] = useState(false);
  const [myMusicAlert, setMyMusicAlert] = useState({
    alert: false,
    text: ""
  });

  const { alert, text } = myMusicAlert;

  const onPopToggle = () => {
    setOpen(!open);
  }

  const onClosePop = () => {
    setOpen(false);
  }
  const onOpenPop = () => {
    setOpen(true);
  }

  const myMusicPop = (action) => {

    if (action === 'add') {
      setMyMusicAlert({ ...myMusicAlert, alert: true, text: "보관함에 음악이 추가되었습니다" });
      setTimeout(() => {
        setMyMusicAlert({ ...myMusicAlert, alert: false, text: "" });
      }, 2000);
    } else if (action === 'remove') {
      setMyMusicAlert({ ...myMusicAlert, alert: true, text: "보관함에서 음악이 삭제되었습니다" });
      setTimeout(() => {
        setMyMusicAlert({ ...myMusicAlert, alert: false, text: "" });
      }, 2000);
    } else if (action === 'duplicate') {
      setMyMusicAlert({ ...myMusicAlert, alert: true, text: "이미 보관함에 추가된 음악입니다" });
      setTimeout(() => {
        setMyMusicAlert({ ...myMusicAlert, alert: false, text: "" });
      }, 2000);
    }

  }

  return (
    <MusicProvider>
      <PlaylistProvider>
        <PlayPauseProvider>
          <GlobalStyle />
          <Nav />
          <MyMusicProvider>
            <PageContainer>
              <Route path="/" exact render={() => <Home open={open} onOpenPop={onOpenPop} myMusicPop={myMusicPop} />} />
              <Route path="/mymusic" render={() => <MyMusic open={open} onOpenPop={onOpenPop} myMusicPop={myMusicPop} />} />
            </PageContainer>
          </MyMusicProvider>
          <MyMusicAddAlert alert={alert}>
            {text}
          </MyMusicAddAlert>
          <MusicPlayerTemplate open={open} onPopToggle={onPopToggle} onClosePop={onClosePop} onOpenPop={onOpenPop} />
        </PlayPauseProvider>
      </PlaylistProvider>
    </MusicProvider>
  );
}

export default React.memo(App);
