import React from 'react';
import styled from 'styled-components';
import BarLeftControl from './BarLeftControl';
import BarMiddleControl from './BarMiddleControl';
import BarRightControl from './BarRightControl';
import { usePlayPauseState } from '../../MusicContext';
import VideoContainer from './VideoContainer';

const PlayerBarStyle = styled.div`
    display: flex;
    background:#212121;
    height:60px;

    position: relative;
`;


// 재생 중인 음악 컨트롤, 음악 정보가 나오는 플레이어바

function MusicPlayerBar({ onPopToggle, open, played, _onProgress, _onDuration, seeking, player }) {

    const play = usePlayPauseState();

    return (
        <PlayerBarStyle onClick={onPopToggle}>
            <VideoContainer play={play} played={played} _onProgress={_onProgress} _onDuration={_onDuration} seeking={seeking} player={player} />
            <BarLeftControl play={play} played={played} />
            <BarMiddleControl />
            <BarRightControl onPopToggle={onPopToggle} open={open} />
        </PlayerBarStyle>
    );
};

export default React.memo(MusicPlayerBar);