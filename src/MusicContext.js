import React, { useContext, useReducer, createContext } from 'react';
import AkmuThumb from './img/akmuartificialgrass.jpg';
import HigedanThumb from './img/higedanpretender.jpg';
import SoohyunThumb from './img/soohyunstartagain.jpg';

const initialMusics = [
    {
        id: 1,
        title: "인공 잔디",
        artist: "AKMU",
        url: "https://youtu.be/5pK1cnHCPdk",
        thumb: AkmuThumb,
        nowPlaying: false,
        playTime: "3:45"
    },
    {
        id: 2,
        title: "Pretender",
        artist: "official髭男dism",
        url: "https://youtu.be/TQ8WlA2GXbk",
        thumb: HigedanThumb,
        nowPlaying: false,
        playTime: "5:27"
    },
    {
        id: 3,
        title: "Start Again",
        artist: "SOOHYUN (from U-KISS)",
        url: "https://youtu.be/pP6WTt4BK2s",
        thumb: SoohyunThumb,
        nowPlaying: false,
        playTime: "4:54"
    }
];


function musicReducer(state, action) {
    switch (action.type) {
        case 'PLAY':
            return state.map(song =>
                song.id === action.id ? { ...song, nowPlaying: true } : { ...song, nowPlaying: false });
        case 'AFTER_REMOVE':
            //리스트에서 삭제 후 삭제한 곡의 nowPlaying을 false로 만듦.
            return state.map(song => song.id === action.id ? { ...song, nowPlaying: false } : song);
        case 'PLAY_NEXT':
            return 
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

function PlayPauseReducer(play, action) {
    switch (action.type) {
        case 'PLAY':
            return true;
        case 'PAUSE':
            return false;
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const MusicStateContext = createContext();
const MusicDispatchContext = createContext();
const PlayPauseStateContext = createContext();
const PlayPauseDispatchContext = createContext();

export function MusicProvider({ children }) {
    const [state, dispatch] = useReducer(musicReducer, initialMusics);
    return (
        <MusicStateContext.Provider value={state}>
            <MusicDispatchContext.Provider value={dispatch}>
                {children}
            </MusicDispatchContext.Provider>
        </MusicStateContext.Provider>
    );
}


export function PlayPauseProvider({ children }) {
    const [play, dispatch] = useReducer(PlayPauseReducer, false);

    return (
        <PlayPauseStateContext.Provider value={play} >
            <PlayPauseDispatchContext.Provider value={dispatch}>
                {children}
            </PlayPauseDispatchContext.Provider>
        </PlayPauseStateContext.Provider>
    );
}


//custom Hooks
export function useMusicState() {
    const context = useContext(MusicStateContext);
    if (!context) {
        throw new Error('Cannot find MusicProvider');
    }
    return context;
}

export function useMusicDispatch() {
    const context = useContext(MusicDispatchContext);
    if (!context) {
        throw new Error('Cannot find MusicProvider');
    }
    return context;
}

export function usePlayPauseState() {
    const context = useContext(PlayPauseStateContext);
    // console.log(context);
    // if (!context) {
    //     throw new Error('Cannot find PlayPauseProvider');
    // }
    return context;
}

export function usePlayPauseDispatch() {
    const context = useContext(PlayPauseDispatchContext);
    // if (!context) {
    //     throw new Error('Cannot find PlayPauseProvider');
    // }
    return context;
}
