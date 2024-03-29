import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MusicProvider, PlayPauseProvider } from './MusicContext';
import { PlaylistProvider } from './PlaylistContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MusicProvider>
        <PlaylistProvider>
          <PlayPauseProvider>
            <App />
          </PlayPauseProvider>
        </PlaylistProvider>
      </MusicProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
