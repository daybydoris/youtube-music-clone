import React, { useContext, useReducer, createContext } from 'react';
import AkmuThumb from './img/akmuartificialgrass.jpg';
import HigedanThumb from './img/higedanpretender.jpg';
import SoohyunThumb from './img/soohyunstartagain.jpg';

const musics = [
    {
        id: 1,
        title: "인공 잔디",
        artist: "AKMU",
        url: "https://www.youtube.com/embed/5pK1cnHCPdk",
        thumb: AkmuThumb,
        nowPlaying: false,
        playTime: "3:46"
    },
    {
        id: 2,
        title: "Pretender",
        artist: "official髭男dism",
        url: "https://www.youtube.com/embed/TQ8WlA2GXbk",
        thumb: HigedanThumb,
        nowPlaying: false,
        playTime: "5:27"
    },
    {
        id: 3,
        title: "Start Again",
        artist: "SOOHYUN (from U-KISS)",
        url: "https://www.youtube.com/embed/pP6WTt4BK2s",
        thumb: SoohyunThumb,
        nowPlaying: false,
        playTime: "4:54"
    }
];

const initialMusics = [
    {
        id: 1,
        title: "Fear",
        artist: "Your Friend, Ghost",
        url: "https://soundcloud.com/yourfriendghost845/fear",
        thumb: "https://i1.sndcdn.com/artworks-AjjIozW7a47A0nyN-I67nkg-t500x500.jpg",
        nowPlaying: false,
        playTime: "4:30",
        copyright: ""
    },
    {
        id: 2,
        title: "Sick & Tired",
        artist: "Leonell Cassio",
        url: "https://api.soundcloud.com/tracks/984101719",
        thumb: "https://i1.sndcdn.com/artworks-qyEY2yX2zat5HLs2-uhRMTg-t500x500.jpg",
        nowPlaying: false,
        playTime: "3:57",
        copyright: ""
    },
    {
        id: 3,
        title: "It's Not Christmas Time (Without You)",
        artist: "RYYZN",
        url: "https://api.soundcloud.com/tracks/723377419",
        thumb: "https://i1.sndcdn.com/artworks-000647785291-ldalj9-t500x500.jpg",
        nowPlaying: false,
        playTime: "2:45",
        copyright: ""
    },
    {
        id: 4,
        title: "Heartfül Of Kerøsene",
        artist: "Jeff II",
        url: "https://api.soundcloud.com/tracks/777782659",
        thumb: "https://i1.sndcdn.com/artworks-P6r5mMiGWJYrzJMo-nyzuDg-t500x500.jpg",
        nowPlaying: false,
        playTime: "2:40",
        copyright: ""
    },
    {
        id: 5,
        title: "Void Edge",
        artist: "Lesion X",
        url: "https://api.soundcloud.com/tracks/831275836",
        thumb: "https://i1.sndcdn.com/artworks-zmdzmfKkkPWz4Mu9-GlDoUQ-t500x500.jpg",
        nowPlaying: false,
        playTime: "3:12",
        copyright: "Void Edge - Lesion X https://soundcloud.com/lesionxbeats\r\nCreative Commons — Attribution 3.0 Unported — CC BY 3.0\r\nFree Download / Stream: https://bit.ly/al-void-edge\r\nMusic promoted by Audio Library https://youtu.be/qd_2lX_bwPY\r\n"
    }
]


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
