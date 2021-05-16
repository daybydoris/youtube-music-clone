import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import Playlist from './Playlist';
import PlayContent from './PlayContent';
import { IsDesktop } from '../../style/MediaQuery';
import { AppContext } from '../../App'

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
    flex-direction:${props => props.isDesktop ? "row" : "column"};

    padding:25px 35px;
    padding-bottom : 150px;

    width:100%;
    height:100%;
    background:#030303;

    animation: ${props => props.open ? popUp : popDown} 0.5s forwards;

    .content{
        width:${props => props.isDesktop ? "64" : "100"}%;
        ${props => props.isDesktop ? null : "height: 45%;"};
    }

    .playlist{
        width:${props => props.isDesktop ? "36" : "100"}%;
        ${props => props.isDesktop ? null : "height: 55%;"};
    }
`;

function MusicPlayerPop() {

    const isDesktop = IsDesktop();

    const { open } = useContext(AppContext)
    return (
        <PopContainer open={open} isDesktop={isDesktop}>
            <PlayContent isDesktop={isDesktop} />
            <Playlist isDesktop={isDesktop} />
        </PopContainer>
    );
};

export default React.memo(MusicPlayerPop);