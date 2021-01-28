import { parse } from 'query-string';
import React, { useContext, useReducer, createContext } from 'react';
import AkmuThumb from './img/akmuartificialgrass.jpg';
import HigedanThumb from './img/higedanpretender.jpg';
import SoohyunThumb from './img/soohyunstartagain.jpg';

// [
//     {
//         id: 1,
//         title: "인공 잔디",
//         artist: "AKMU",
//         type: "노래",
//         url: "https://youtu.be/5pK1cnHCPdk",
//         thumb: "https://lh3.googleusercontent.com/-M53Nz51vK0TXu1MkXe4V5JT-AOoVljKLQv0xVFyFgzT8RHKz2RWwKNNgzpwNMgefB7k8RDMxuAuXMw=w226-h226-l90-rj",
//         nowPlaying: false
//     },
//     {
//         id: 2,
//         title: "Pretender",
//         artist: "official髭男dism",
//         type: "노래",
//         url: "https://youtu.be/TQ8WlA2GXbk",
//         thumb: "https://lh3.googleusercontent.com/0ggCvSHHEiWpE6nr3cjtaIIGRxE8WFb-I99vwSOp6mg8syaR6K9PwhVGjOrN1FZCDeQJXdwrxUT9-ztl3Q=w226-h226-l90-rj",
//         nowPlaying: false
//     }
// ];

const initialMusics = [
    {
        id: 1,
        title: "인공 잔디",
        artist: "AKMU",
        url: "https://youtu.be/5pK1cnHCPdk",
        thumb: AkmuThumb,
        nowPlaying: false
    },
    {
        id: 2,
        title: "Pretender",
        artist: "official髭男dism",
        url: "https://youtu.be/TQ8WlA2GXbk",
        thumb: HigedanThumb,
        nowPlaying: false
    },
    {
        id: 3,
        title: "Start Again",
        artist: "SOOHYUN (from U-KISS)",
        url: "https://youtu.be/pP6WTt4BK2s",
        thumb: SoohyunThumb,
        nowPlaying: false
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
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}


const MusicStateContext = createContext();
const MusicDispatchContext = createContext();


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

