import React from 'react';
import styled from 'styled-components';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PauseIcon from '@material-ui/icons/Pause';
import Loader from "react-loader-spinner";
import { useMusicDispatch, usePlayPauseState, usePlayPauseDispatch } from '../../MusicContext';
import { usePlaylistState, usePlaylistDispatch } from '../../PlaylistContext';


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

function LeftControlButtons({ loaded }) {

    const dispatch = useMusicDispatch();
    const play = usePlayPauseState();
    const playDispatch = usePlayPauseDispatch();
    const playlist = usePlaylistState();
    const playlistDispatch = usePlaylistDispatch();

    const onPlayPause = (e) => {
        e.stopPropagation();
        if (play) {
            playDispatch({ type: 'PAUSE' });
        } else {
            playDispatch({ type: 'PLAY' });
        }
    }

    //이전곡 재생
    const onPlayPrev = (e) => {
        e.stopPropagation();

        let id = 0;

        playlist.forEach((item, index) => {
            if (item.nowPlaying) {
                if (playlist[index - 1]) {
                    id = playlist[index - 1].id;
                    dispatch({ type: "PLAY", id });
                    playlistDispatch({ type: "SET_NOWPLAYING", id });
                    playDispatch({ type: 'PLAY' });
                }
            }
        });
    }

    //다음곡 재생
    const onPlayNext = (e) => {
        e.stopPropagation();

        let id = 0;

        playlist.forEach((item, index) => {
            if (item.nowPlaying) {
                if (playlist[index + 1]) {
                    id = playlist[index + 1].id;
                    dispatch({ type: "PLAY", id });
                    playlistDispatch({ type: "SET_NOWPLAYING", id });
                    playDispatch({ type: 'PLAY' });
                }
            }
        });
    }

    return (
        <LeftControlButtonsStyle>
            <SkipPreviousIcon style={ButtonStyle} onClick={onPlayPrev} />
            {loaded === false
                ? <Loader type="TailSpin" color="#F00" height={30} width={30} margin="0px 0px 0px 8px" />
                : play ? <PauseIcon style={PlayPauseButtonStyle} onClick={onPlayPause} />
                    : <PlayArrowIcon style={PlayPauseButtonStyle} onClick={onPlayPause} />
            }

            <SkipNextIcon style={ButtonStyle} onClick={onPlayNext} />
        </LeftControlButtonsStyle>
    );
};

export default React.memo(LeftControlButtons);