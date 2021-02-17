import React, { useContext, useReducer, createContext } from 'react';


let initialPlaylist = [];


function playlistReducer(list, action) {
    switch (action.type) {
        case 'ADD_PLAYLIST':
            //이미 플레이리스트에 있는 음악을 클릭하면 다시 추가되지 않음
            return list.some(song => song.id === action.id) ? list : [...list, { id: action.id, title: action.title, artist: action.artist, thumb: action.thumb, url: action.url, nowPlaying: action.nowPlaying, copyright: action.copyright }];
        case 'SET_NOWPLAYING':
            //이미 리스트에 추가되어 있는 음악이면 리스트에 또 추가하지 말고 재생만 함.
            //나머지 곡들의 nowPlaying은 false로 만듦.
            return list.map(song => song.id === action.id ? { ...song, nowPlaying: true } : { ...song, nowPlaying: false });
        case 'REMOVE':
            //리스트에서 곡 삭제
            return list.filter(song => song.id !== action.id);

        //.map((item, key, arr) => key === arr.length - 1 ? { ...item, nowPlaying: true } : item);
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const PlaylistStateContext = createContext();
const PlaylistDispatchContext = createContext();

export function PlaylistProvider({ children }) {
    const [list, dispatch] = useReducer(playlistReducer, initialPlaylist);
    return (
        <PlaylistStateContext.Provider value={list}>
            <PlaylistDispatchContext.Provider value={dispatch}>
                {children}
            </PlaylistDispatchContext.Provider>
        </PlaylistStateContext.Provider>
    );
}

// custom hooks
export function usePlaylistState() {
    const context = useContext(PlaylistStateContext);
    if (!context) {
        throw new Error('Cannot find PlaylistProvider');
    }
    return context;
}

export function usePlaylistDispatch() {
    const context = useContext(PlaylistDispatchContext);
    if (!context) {
        throw new Error('Cannot find PlaylistProvider');
    }
    return context;
}