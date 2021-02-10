import React from 'react';
import styled, { keyframes } from 'styled-components';
import Playlist from './Playlist';
import PlayContent from './PlayContent';

const popUp = keyframes`
    0%{
        visibility: hidden;
        transform: translate3d(0, 100vh, 0);
    }
    100%{
        visibility: visible;
        transform: translate3d(0, 0, 0);
    }
`;

const popDown = keyframes`
    0%{
        visibility: visible;
        transform: translate3d(0, 0, 0);
    }
    100%{
        visibility: hidden;
        transform: translate3d(0, 100vh, 0);
    }
`;

const PopContainer = styled.div`
    position: fixed;
    left:0; top:48px;

    display: flex;

    padding:25px 35px;
    padding-bottom : 150px;

    width:100%;
    height:100%;
    background:#030303;

    animation: ${props => props.open ? popUp : popDown} 0.5s forwards;

    .content{
        width:64%;
    }

    .playlist{
        width:36%;
    }
`;

function MusicPlayerPop({ open }) {

    return (
        <PopContainer open={open} >
            <PlayContent />
            <Playlist />
        </PopContainer>
    );
};

export default React.memo(MusicPlayerPop);