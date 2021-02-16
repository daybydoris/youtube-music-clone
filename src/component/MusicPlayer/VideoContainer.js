import React, { useRef, useEffect } from 'react';
import ReactPlayer from 'react-player/soundcloud';
import { useMusicDispatch, usePlayPauseDispatch, usePlayPauseState } from '../../MusicContext';
import { usePlaylistState, usePlaylistDispatch } from '../../PlaylistContext';


function VideoContainer({ played, _onReady, _onProgress, _onDuration, player, volume, setLoaded }) {

    const play = usePlayPauseState();
    const playlist = usePlaylistState();
    const dispatch = useMusicDispatch();
    const playlistDispatch = usePlaylistDispatch();
    const playDispatch = usePlayPauseDispatch();

    const videoUrl = useRef(null);


    //nowPlaying인 곡의 url 가져오기
    playlist.forEach((item, index) => {
        if (item.nowPlaying) {
            videoUrl.current = item.url;
        }
    });

    //곡을 바꾸면 loader 나오게 함
    useEffect(() => {
        setLoaded(false);
    }, [setLoaded]);

    const _onEnded = (e) => {
        let id = 0;

        playlist.forEach((item, index) => {
            if (item.nowPlaying) {
                if (playlist[index + 1]) {
                    id = playlist[index + 1].id;
                    dispatch({ type: "PLAY", id });
                    playlistDispatch({ type: "SET_NOWPLAYING", id });
                    playDispatch({ type: 'PLAY' });
                } else {
                    playDispatch({ type: 'PAUSE' });
                }
            }
        });
    }

    return (
        <>
            <ReactPlayer
                ref={player}
                played={played}
                volume={volume.current}
                url={videoUrl.current}
                playing={play}
                onReady={_onReady}
                onProgress={_onProgress}
                onEnded={_onEnded}
                onDuration={_onDuration}
                width="1px" height="0"
                config={{
                    soundcloud: {
                        auto_play: true,
                        show_artwork: false
                    }
                }}
            />
        </>
    );
};

export default React.memo(VideoContainer);