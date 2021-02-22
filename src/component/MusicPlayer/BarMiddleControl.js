import React from 'react';
import styled from 'styled-components';
import { useMusicState } from '../../MusicContext';
import { Desktop } from '../../style/MediaQuery';

const MiddleControlStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width:${props => props.isDesktop ? "50" : "40"}%;
    height:100%;
`;

const MusicInfoContainer = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: ${props => props.isMobile ? props.mobileToggle ? "hidden" : "visible" : "visible"};
`;

const MusicTitleArtist = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
    margin-left: 12px;
    font-size:16px;
    width:${props => props.isMobile ? "100" : null}%;

    .music-text{
        overflow:hidden;
        white-space: nowrap;
        display: block;
        text-overflow: ellipsis;
    }

`;


function BarMiddleControl({ isDesktop, mobileToggle, isMobile }) {
    const state = useMusicState();

    return (
        <MiddleControlStyle isMobile={isMobile} className="middle-control">
            {state.filter(song => {
                return song.nowPlaying
            }).map(song => (
                <MusicInfoContainer key={song.id} mobileToggle={mobileToggle} isMobile={isMobile}>
                    <Desktop>
                        <img src={song.thumb} style={{ height: "40px", borderRadius: "4px" }} alt="" />
                    </Desktop>
                    <MusicTitleArtist isDesktop={isDesktop}>
                        <div className="music-text">{song.title}</div>
                        <div className="music-text" style={{ color: "#ffffffb3" }}>{song.artist}</div>
                    </MusicTitleArtist>
                </MusicInfoContainer>
            ))}
            {/* <MiddleControlButtons /> */}
        </MiddleControlStyle>
    );
};

export default React.memo(BarMiddleControl);