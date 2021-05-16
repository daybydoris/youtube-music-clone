import React, { createContext, useContext, useReducer } from 'react';

let initialMyMusic = [];

for (let i = 0; i < localStorage.length; i++) {
    const songInfo = localStorage.getItem(localStorage.key(i))
    initialMyMusic.push(JSON.parse(songInfo));
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
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}


const myMusicContext = createContext();

export function MyMusicProvider({ children }) {
    const [state, dispatch] = useReducer(myMusicReducer, initialMyMusic);
    return (
        <myMusicContext.Provider value={{ state, dispatch }}>
            {children}
        </myMusicContext.Provider>
    );
}


//Custom Hooks

export function useMyMusicState() {
    const { state } = useContext(myMusicContext);
    if (state === undefined) {
        throw new Error('Cannot find MyMusicProvider');
    }
    return state;
}

export function useMyMusicDispatch() {
    const { dispatch } = useContext(myMusicContext);
    if (dispatch === undefined) {
        throw new Error('Cannot find MyMusicProvider');
    }
    return dispatch;
}