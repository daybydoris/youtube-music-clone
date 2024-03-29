import React, { useContext, useReducer, createContext } from 'react';

const initialMusics = [
    {
        id: 1,
        title: "Fear",
        artist: "Your Friend, Ghost",
        url: "https://soundcloud.com/yourfriendghost845/fear",
        thumb: "https://i1.sndcdn.com/artworks-AjjIozW7a47A0nyN-I67nkg-t500x500.jpg",
        nowPlaying: false,
        playTime: "4:30",
        copyright: `Fear by Your Friend, Ghost
        https://soundcloud.com/yourfriendghost845
        Creative Commons — Attribution 3.0 Unported — CC BY 3.0
        Free Download / Stream: https://bit.ly/al_fear
        Music promoted by Audio Library https://youtu.be/5J7OXxL_Ccg`
    },
    {
        id: 2,
        title: "Sick & Tired",
        artist: "Leonell Cassio",
        url: "https://api.soundcloud.com/tracks/984101719",
        thumb: "https://i1.sndcdn.com/artworks-qyEY2yX2zat5HLs2-uhRMTg-t500x500.jpg",
        nowPlaying: false,
        playTime: "3:57",
        copyright: "Sick & Tired (ft. Lily Hain) by Leonell Cassio\r\nhttps://soundcloud.com/leonellcassio\r\nCreative Commons — Attribution-ShareAlike 3.0 Unported — CC BY-SA 3.0\r\nFree Download / Stream: http://bit.ly/-sick-and-tired\r\nMusic promoted by Audio Library https://youtu.be/zjN-yYLBHTw"
    },
    {
        id: 3,
        title: "It's Not Christmas Time (Without You)",
        artist: "RYYZN",
        url: "https://api.soundcloud.com/tracks/723377419",
        thumb: "https://i1.sndcdn.com/artworks-000647785291-ldalj9-t500x500.jpg",
        nowPlaying: false,
        playTime: "2:45",
        copyright: "It's Not Christmas Time (Without You) [feat. Kimmy Baggins] by RYYZN\r\nhttps://soundcloud.com/ryyzn\r\nCreative Commons — Attribution 3.0 Unported — CC BY 3.0\r\nFree Download / Stream: its-not-christmas-time-without-you\r\nMusic promoted by Audio Library https://youtu.be/B4RqeAvE7iA"
    },
    {
        id: 4,
        title: "Heartfül Of Kerøsene",
        artist: "Jeff II",
        url: "https://api.soundcloud.com/tracks/777782659",
        thumb: "https://i1.sndcdn.com/artworks-P6r5mMiGWJYrzJMo-nyzuDg-t500x500.jpg",
        nowPlaying: false,
        playTime: "2:40",
        copyright: "Heartfül of Kerøsene - Jeff II https://youtu.be/ZbyFsGMjfRg\r\nCreative Commons Attribution\r\nFree Download / Stream: https://bit.ly/al-heartful-of-kersene\r\nMusic promoted by Audio Library https://youtu.be/y-tbE2FIA1o"
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
    },
    {
        id: 6,
        title: "El Perro Loco",
        artist: "GoSoundtrack",
        url: "https://api.soundcloud.com/tracks/216035706",
        thumb: "https://i1.sndcdn.com/artworks-000124147227-tezybn-t500x500.jpg",
        nowPlaying: false,
        playTime: "2:14",
        copyright: "El Perro Loco by GoSoundtrack http://www.gosoundtrack.com Creative Commons — Attribution 4.0 International — CC BY 4.0 Free Download / Stream: http://bit.ly/el-perro-loco Music promoted by Audio Library https://youtu.be/gunwGbrQWB8"
    },
    {
        id: 7,
        title: "Swing Rabbit! Swing!",
        artist: "Amarià",
        url: "https://api.soundcloud.com/tracks/859710691",
        thumb: "https://i1.sndcdn.com/artworks-Y1sRHgALuiytWHTd-zEFC8g-t500x500.jpg",
        nowPlaying: false,
        playTime: "3:28",
        copyright: "Swing Rabbit ! Swing ! by Amarià https://soundcloud.com/amariamusique Creative Commons — Attribution 3.0 Unported — CC BY 3.0 Free Download / Stream: https://bit.ly/al-swing-rabbit-swing Music promoted by Audio Library https://youtu.be/lt7fn1NVxQM"
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

const MusicContext = createContext();
const PlayPauseContext = createContext();

export function MusicProvider({ children }) {
    const [state, dispatch] = useReducer(musicReducer, initialMusics);
    return (
        <MusicContext.Provider value={{ state, dispatch }}>
            {children}
        </MusicContext.Provider>
    );
}


export function PlayPauseProvider({ children }) {
    const [play, dispatch] = useReducer(PlayPauseReducer, false);

    return (
        <PlayPauseContext.Provider value={{ play, dispatch }} >
            {children}
        </PlayPauseContext.Provider>
    );
}


//custom Hooks
export function useMusicState() {
    const { state } = useContext(MusicContext);
    if (!state) {
        throw new Error('Cannot find MusicProvider');
    }
    return state;
}

export function useMusicDispatch() {
    const { dispatch } = useContext(MusicContext);
    if (!dispatch) {
        throw new Error('Cannot find MusicProvider');
    }
    return dispatch;
}

export function usePlayPauseState() {
    const { play } = useContext(PlayPauseContext);
    return play;
}

export function usePlayPauseDispatch() {
    const { dispatch } = useContext(PlayPauseContext);
    return dispatch;
}
