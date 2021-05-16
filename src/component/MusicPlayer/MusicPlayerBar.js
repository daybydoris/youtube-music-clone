import React, { useRef, useState, useContext } from 'react';
import styled from 'styled-components';
import BarLeftControl from './BarLeftControl';
import BarMiddleControl from './BarMiddleControl';
import BarRightControl from './BarRightControl';
import VideoContainer from './VideoContainer';
import { IsDesktop, IsTablet, IsMobile } from '../../style/MediaQuery';
import { AppContext } from '../../App'

const PlayerBarStyle = styled.div`
display: flex;
    background:#212121;
    height:72px;

    justify-content: space-around;
    position: relative;
    `;


// 재생 중인 음악 컨트롤, 음악 정보가 나오는 플레이어바

function MusicPlayerBar({ open, played, _onProgress, _onDuration, seeking, player, loaded, setLoaded, _onReady }) {

    const volume = useRef(0.5);
    const [hover, setHover] = useState(false);

    const isDesktop = IsDesktop();
    const isTablet = IsTablet();
    const isMobile = IsMobile();
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

    const { onPopToggle } = useContext(AppContext)


    return (
        <PlayerBarStyle onClick={onPopToggle} onMouseLeave={onHoverFalse}>
            <VideoContainer played={played} _onReady={_onReady} _onProgress={_onProgress} _onDuration={_onDuration} seeking={seeking} player={player} volume={volume} setLoaded={setLoaded} />
            <BarLeftControl played={played} loaded={loaded} isDesktop={isDesktop} isMobile={isMobile} />
            <BarMiddleControl isDesktop={isDesktop} isMobile={isMobile} mobileToggle={mobileToggle} />
            <BarRightControl onVolume={onVolume} hover={hover} onHoverTrue={onHoverTrue} isDesktop={isDesktop} isMobile={isMobile} isTablet={isTablet} onMobileBtn={onMobileBtn} mobileToggle={mobileToggle} />
        </PlayerBarStyle>
    );
};

export default React.memo(MusicPlayerBar);