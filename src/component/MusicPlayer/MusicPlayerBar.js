import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BarLeftControl from './BarLeftControl';
import BarMiddleControl from './BarMiddleControl';
import BarRightControl from './BarRightControl';
import { usePlaylistState } from '../../PlaylistContext';
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player/youtube';

const PlayerBarStyle = styled.div`
    display: flex;
    background:#212121;
    height:60px;
`;

const opts = {
    width: "640",
    height: "360",
    playerVars: {
        'autoPlay': 1
    },
};

const YoutubeStyle = {
    position: "absolute",
    left: "0",
    top: "0"
}

// 재생 중인 음악 컨트롤, 음악 정보가 나오는 플레이어바

function MusicPlayerBar({ onPopToggle, open }) {

    const list = usePlaylistState();

    let videoUrl = "";

    list.forEach(item => {
        if (item.nowPlaying) {
            videoUrl = item.url;
        }
    });

    console.log(videoUrl);

    const _onReady = (e) => {
        e.target.pauseVideo();
    }

    return (
        <PlayerBarStyle onClick={onPopToggle}>
            <ReactPlayer url={videoUrl} playing={true} width="0" height="0" />
            <BarLeftControl />
            <BarMiddleControl />
            <BarRightControl onPopToggle={onPopToggle} open={open} />
        </PlayerBarStyle>
    );
};

export default React.memo(MusicPlayerBar);