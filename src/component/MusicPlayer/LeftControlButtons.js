import React from 'react';
import styled from 'styled-components';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PauseIcon from '@material-ui/icons/Pause';
import { useMusicState } from '../../MusicContext';

const LeftControlButtonsStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:160px;
    height:100%;
`;

const ButtonStyle = {
    color: "#fff",
    margin: "0px 0px 0px 8px",
    background: "none",
    border: "none",
    outline: "none",
    cursor: "pointer",
    fontSize: "20px"
}

const PlayPauseButtonStyle = {
    color: "#fff",
    margin: "0px 0px 0px 8px",
    background: "none",
    border: "none",
    outline: "none",
    cursor: "pointer",
    fontSize: "30px"
}

function LeftControlButtons() {
    const state = useMusicState();

    return (
        <LeftControlButtonsStyle>
            <SkipPreviousIcon style={ButtonStyle} />
            <PlayArrowIcon style={PlayPauseButtonStyle} />
            <SkipNextIcon style={ButtonStyle} />
            {/* <PauseIcon style={ButtonStyle} /> */}
        </LeftControlButtonsStyle>
    );
};

export default LeftControlButtons;