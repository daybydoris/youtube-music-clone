import React from 'react';
import styled from 'styled-components';
import MusicPlayerSlider from './MusicPlayerSlider';
import MusicPlayerBar from './MusicPlayerBar';
import MusicPlayerPop from './MusicPlayerPop';


const PlayerStyle = styled.div`
    position: fixed;
    left:0; bottom:0;
    width:100%;
    height: 60px;

`;

// 플레이어바를 감싸는 템플릿

function MusicPlayerTemplate({ open, onPopToggle }) {


    return (
        <>
            <MusicPlayerPop open={open} />
            <PlayerStyle>
                <MusicPlayerSlider />
                <MusicPlayerBar onPopToggle={onPopToggle} open={open} />
            </PlayerStyle>
        </ >
    );
};

export default React.memo(MusicPlayerTemplate);