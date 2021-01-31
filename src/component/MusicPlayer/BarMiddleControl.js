import React from 'react';
import styled from 'styled-components';
import { useMusicState } from '../../MusicContext';

const MiddleControlStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width:60%;
    height:100%;

`;

const MusicInfoContainer = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MusicTitleArtist = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
    margin-left: 12px;

    font-size:14px;
`;


function BarMiddleControl() {
    const state = useMusicState();

    return (
        <MiddleControlStyle>
            {state.filter(song => {
                return song.nowPlaying
            }).map(song => (
                <MusicInfoContainer key={song.id}>
                    <img src={song.thumb} style={{ height: "35px", borderRadius: "4px" }} />
                    <MusicTitleArtist>
                        <div>{song.title}</div>
                        <div style={{ color: "#ffffffb3" }}>{song.artist}</div>
                    </MusicTitleArtist>
                </MusicInfoContainer>
            ))}
            {/* <MiddleControlButtons /> */}
        </MiddleControlStyle>
    );
};

export default React.memo(BarMiddleControl);