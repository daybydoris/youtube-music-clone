import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { usePlaylistState } from '../../PlaylistContext';

const FadeIn = keyframes`
    0%{
        opacity:0;
    }
    100%{
        opacity:1;
    }
`;

const FadeOut = keyframes`
    0%{
        opacity:1;
    }
    100%{
        opacity:0;
    }
`;

const PlayContentContainer = styled.div`
    position:relative;
    width:${props => props.isDesktop ? "64" : "100"}%;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        max-width:100%;
        max-height:100%;
    }
`;

const Copyright = styled.div`
    position:absolute;
    left:50%; top:0;

    transform: translateX(-50%);

    width:100%;
    height:100%;

    padding:0 30%;

    background:rgba(0,0,0,0.5);
    
    display:flex;
    animation:${props => props.hover ? FadeIn : FadeOut} 0.5s forwards;

    flex-direction: column;
    justify-content: center;
    align-items:center;

    text-align: center;

    font-size: 14px;
    color:#fff;
`;

function PlayContent({ isDesktop }) {

    const list = usePlaylistState();
    const [hover, setHover] = useState(false);

    let thumbId = "";
    let copyTxt = "";

    list.forEach(item => {
        if (item.nowPlaying) {
            thumbId = item.thumb;
            copyTxt = item.copyright;
        }
    });

    return (
        <PlayContentContainer className="content" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} isDesktop={isDesktop}>
            <Copyright hover={hover}>
                {copyTxt}
            </Copyright>
            <img src={thumbId} alt="" />
        </PlayContentContainer>
    );
};

export default React.memo(PlayContent);