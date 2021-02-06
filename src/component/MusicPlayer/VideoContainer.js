import React from 'react';
import ReactPlayer from 'react-player/youtube';
import { useMusicDispatch, usePlayPauseDispatch } from '../../MusicContext';
import { usePlaylistState, usePlaylistDispatch } from '../../PlaylistContext';


function VideoContainer({ play, played, _onProgress, _onDuration, player }) {

    const playlist = usePlaylistState();
    const dispatch = useMusicDispatch();
    const playlistDispatch = usePlaylistDispatch();
    const playDispatch = usePlayPauseDispatch();

    let videoUrl = "";

    //nowPlaying인 곡의 url 가져오기
    playlist.forEach((item, index) => {
        if (item.nowPlaying) {
            videoUrl = item.url;
        }
    });

    const _onEnded = (e) => {
        let id = 0;

        playlist.map((item, index) => {
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
            <ReactPlayer ref={player} played={played} url={videoUrl} playing={play} onProgress={_onProgress} onEnded={_onEnded} onDuration={_onDuration} width="0" height="0" />
        </>
    );
};

export default React.memo(VideoContainer);