import React, { createContext, useContext, useReducer } from 'react';
import AkmuThumb from './img/akmuartificialgrass.jpg';

const initialMyMusic = [
    {
        id: 1,
        title: "인공 잔디",
        artist: "AKMU",
        url: "https://www.youtube.com/embed/5pK1cnHCPdk",
        thumb: AkmuThumb,
        nowPlaying: false,
        playTime: "3:46"
    }
];

function myMusicReducer(state, action) {
    switch (action.type) {
        case "ADD_MYMUSIC":
            return state.some(song => song.id === action.id) ? state : [...state, { id: action.id, title: action.title, artist: action.artist, thumb: action.thumb, url: action.url, nowPlaying: action.nowPlaying }];
        case 'SET_NOWPLAYING':
            //이미 리스트에 추가되어 있는 음악이면 리스트에 또 추가하지 말고 재생만 함.
            //나머지 곡들의 nowPlaying은 false로 만듦.
            return state.map(song => song.id === action.id ? { ...song, nowPlaying: true } : { ...song, nowPlaying: false });
        case 'REMOVE':
            //리스트에서 곡 삭제
            return state.filter(song => song.id !== action.id);
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}


const myMusicStateContext = createContext();
const myMusicDispatchContext = createContext();

export function MyMusicProvider({ children }) {
    const [state, dispatch] = useReducer(myMusicReducer, initialMyMusic);
    return (
        <myMusicStateContext.Provider value={state}>
            <myMusicDispatchContext.Provider value={dispatch}>
                {children}
            </myMusicDispatchContext.Provider>
        </myMusicStateContext.Provider>
    );
}


//Custom Hooks

export function useMyMusicState() {
    const context = useContext(myMusicStateContext);
    if (context === undefined) {
        throw new Error('Cannot find MyMusicProvider');
    }
    return context;
}

export function useMyMusicDispatch() {
    const context = useContext(myMusicDispatchContext);
    if (context === undefined) {
        throw new Error('Cannot find MyMusicProvider');
    }
    return context;
}