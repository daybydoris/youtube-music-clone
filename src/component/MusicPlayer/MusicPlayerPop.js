import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import Playlist from './Playlist';
import PlayContent from './PlayContent';

const popUp = keyframes`
    0%{
        top: 100%;
    }
    100%{
        top: 48px;
    }
`;

const popDown = keyframes`
    0%{
        top: 48px;
    }
    100%{
        top: 100%;
    }
`;

const PopContainer = styled.div`
    position: absolute;
    left:0; top: 100%;

    display: flex;

    padding:25px 35px;

    width:100%;
    height:100vh;
    background:#030303;

    ${props => props.open &&
        css`
        top:48px;
    `
    }

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
        <>
            {open && <PopContainer open >
                <PlayContent />
                <Playlist />
            </PopContainer>
            }
            {!open && <PopContainer>
                <PlayContent />
                <Playlist />
            </PopContainer>
            }
        </>
    );
};

export default React.memo(MusicPlayerPop);