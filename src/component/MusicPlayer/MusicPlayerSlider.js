import React from 'react';
import styled from 'styled-components';

const PlayerSlideStyle = styled.div`
    position: absolute;
    display:block;
    width:100%;
    background:#4c4c4c;
    height:2px;
`;

// 플레이어바에서 음악 재생 현황을 나타내는 슬라이드 바

function MusicPlayerSlider() {
    return (
        <PlayerSlideStyle>
        </PlayerSlideStyle>
    );
};

export default MusicPlayerSlider;