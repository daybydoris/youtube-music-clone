import React from 'react';
import ReactPlayer from 'react-player/youtube';
import { usePlaylistState, usePlaylistDispatch } from '../../PlaylistContext';


function VideoContainer({ play, _onProgress }) {

    const list = usePlaylistState();

    let videoUrl = "";
    let songIndex = 0;

    //nowPlaying인 곡의 url 가져오기


    list.forEach((item, index) => {
        if (item.nowPlaying) {
            videoUrl = item.url;
            songIndex = index;
            console.log(songIndex);
        }
    });



    return (
        <>
            <ReactPlayer url={videoUrl} playing={play} onProgress={_onProgress} width="0" height="0" />
        </>
    );
};

export default React.memo(VideoContainer);