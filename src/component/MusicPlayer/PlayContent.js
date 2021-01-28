import React from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';
import { usePlaylistState } from '../../PlaylistContext';
import { useMusicState } from '../../MusicContext';

const PlayContentContainer = styled.div`
    width:64%;
`;

const opts = {
    width: "640",
    height: "360",
    playerVars: {
        'autoPlay': 1
    },
};

function PlayContent() {

    const list = useMusicState();

    let thumbId = "";

    list.forEach(item => {
        if (item.nowPlaying) {
            thumbId = item.thumb;
        }
    });

    const _onReady = (e) => {
        e.target.pauseVideo();
    }

    return (
        <PlayContentContainer>
            <img src={thumbId} />
        </PlayContentContainer>
    );
};

export default React.memo(PlayContent);