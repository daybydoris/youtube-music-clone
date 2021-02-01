import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BarLeftControl from './BarLeftControl';
import BarMiddleControl from './BarMiddleControl';
import BarRightControl from './BarRightControl';
import { usePlaylistState, usePlaylistDispatch } from '../../PlaylistContext';
import { usePlayPauseState } from '../../MusicContext';
import VideoContainer from './VideoContainer';

const PlayerBarStyle = styled.div`
    display: flex;
    background:#212121;
    height:60px;

    position: relative;
`;


// 재생 중인 음악 컨트롤, 음악 정보가 나오는 플레이어바

function MusicPlayerBar({ onPopToggle, open }) {

    const list = usePlaylistState();
    const play = usePlayPauseState();
    const playlistDispatch = usePlaylistDispatch();

    const [played, setPlayed] = useState(0);


    const _onProgress = (e) => {
        setPlayed(e.playedSeconds);
    }



    return (
        <PlayerBarStyle onClick={onPopToggle}>
            <VideoContainer play={play} played={played} _onProgress={_onProgress} />
            <BarLeftControl play={play} played={played} />
            <BarMiddleControl />
            <BarRightControl onPopToggle={onPopToggle} open={open} />
        </PlayerBarStyle>
    );
};

export default React.memo(MusicPlayerBar);