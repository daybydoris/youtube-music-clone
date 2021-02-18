import React, { createContext, useContext, useReducer } from 'react';

let initialMyMusic = [];

for (let i = 0; i < localStorage.length; i++) {
    initialMyMusic.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
}

function myMusicReducer(state, action) {
    switch (action.type) {

        case "ADD_MYMUSIC":
            //localStorage에서 추가한 곡 받아와서 뿌리기
            let item = JSON.parse(localStorage.getItem(action.localIndex));
            return [...state, item];

        case 'REMOVE_MYMUSIC':
            //리스트에서 곡 삭제
            localStorage.removeItem(action.localIndex);
            return state.filter(song => song.localIndex !== action.localIndex);
        // state.some(song => song.id === action.id) ? state : [...state, { id: action.id, title: action.title, artist: action.artist, thumb: action.thumb, url: action.url, nowPlaying: action.nowPlaying }];
        // case 'NOWPLAYING_PLAY':
        //재생한 곡의 nowPlaying을 true로 변경
        //나머지 곡들의 nowPlaying은 false로 변경

        // state.forEach(song => song.id === action.id ? console.log(song.localIndex) : localStorage.setItem(action.localIndex, JSON.stringify({ ...song, nowPlaying: false })));

        // return state.map(song => song);
        // case 'REMOVE_PLAYLIST':
        //     state.forEach(song => song.localIndex === action.localIndex ? localStorage.setItem(action.localIndex, JSON.stringify({ ...song, nowPlaying: false })) : song);
        //     return state.map(song => song);
        // case 'NOWPLAYING_REMOVE':
        //     return state.map(song => song.localIndex === action.localIndex ? localStorage.setItem(action.localIndex, JSON.stringify({ ...song, nowPlaying: false })) : song);

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