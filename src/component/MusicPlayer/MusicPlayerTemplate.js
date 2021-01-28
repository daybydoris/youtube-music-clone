import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MusicPlayerSlider from './MusicPlayerSlider';
import MusicPlayerBar from './MusicPlayerBar';
import MusicPlayerPop from './MusicPlayerPop';
import { usePlaylistState } from '../../PlaylistContext';

const PlayerStyle = styled.div`
    position: fixed;
    left:0; bottom:0;
    width:100%;
    height: 60px;

`;

// 플레이어바를 감싸는 템플릿

function MusicPlayerTemplate() {

    const list = usePlaylistState();

    const [open, setOpen] = useState(false);

    const onPopToggle = () => {
        setOpen(!open);
    }

    return (
        <>
            <MusicPlayerPop open={open} />
            <PlayerStyle>
                <MusicPlayerSlider />
                <MusicPlayerBar onPopToggle={onPopToggle} open={open} />
            </PlayerStyle>
        </>
    );
};

export default React.memo(MusicPlayerTemplate);