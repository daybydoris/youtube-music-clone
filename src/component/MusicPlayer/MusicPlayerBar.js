import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import BarLeftControl from './BarLeftControl';
import BarMiddleControl from './BarMiddleControl';
import BarRightControl from './BarRightControl';
import { usePlayPauseState } from '../../MusicContext';
import VideoContainer from './VideoContainer';
import { useMediaQuery } from 'react-responsive';

const PlayerBarStyle = styled.div`
display: flex;
    background:#212121;
    height:72px;

    justify-content: space-around;
    position: relative;
    `;


// 재생 중인 음악 컨트롤, 음악 정보가 나오는 플레이어바

function MusicPlayerBar({ onPopToggle, open, played, _onProgress, _onDuration, seeking, player, loaded, setLoaded, _onReady }) {

    const volume = useRef(0.5);
    const [hover, setHover] = useState(false);

    const isDesktop = useMediaQuery({ minWidth: 1024 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const [mobileToggle, setMobileToggle] = useState(false);


    const onHoverTrue = () => {
        setHover(true);
    }

    const onHoverFalse = () => {
        setHover(false);
    }

    const onVolume = (volumeValue) => {
        volume.current = volumeValue;
    }

    const onMobileBtn = (e) => {
        e.stopPropagation();
        setMobileToggle(!mobileToggle);
    }


    return (
        <PlayerBarStyle onClick={onPopToggle} onMouseLeave={onHoverFalse}>
            <VideoContainer played={played} _onReady={_onReady} _onProgress={_onProgress} _onDuration={_onDuration} seeking={seeking} player={player} volume={volume} setLoaded={setLoaded} />
            <BarLeftControl played={played} loaded={loaded} isDesktop={isDesktop} isMobile={isMobile} />
            <BarMiddleControl isDesktop={isDesktop} isMobile={isMobile} mobileToggle={mobileToggle} />
            <BarRightControl onPopToggle={onPopToggle} open={open} onVolume={onVolume} hover={hover} onHoverTrue={onHoverTrue} isDesktop={isDesktop} isMobile={isMobile} isTablet={isTablet} onMobileBtn={onMobileBtn} mobileToggle={mobileToggle} />
        </PlayerBarStyle>
    );
};

export default React.memo(MusicPlayerBar);