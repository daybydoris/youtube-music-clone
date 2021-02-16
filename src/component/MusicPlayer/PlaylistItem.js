import React, { useState } from 'react';
import styled from 'styled-components';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import { useMusicDispatch, usePlayPauseDispatch, usePlayPauseState } from '../../MusicContext';
import { usePlaylistDispatch, usePlaylistState } from '../../PlaylistContext';
import { useMyMusicDispatch } from '../../MyMusicContext';

const RemoveItem = styled.div`
    font-size: 12px;
    color: #ffffff80;
    display: none;
`;

const MusicItemContainer = styled.li`
    display: flex;
    align-items: center;
    justify-contents: flex-start;

    list-style: none;
    border-bottom: 1px solid #ffffff30;

    height: 55px;
    padding: 0px 8px;

    cursor: pointer;

    &:hover{
        ${RemoveItem}{
            display: block;
        }
    }

    ${props => props.nowPlaying ? "background: rgba(255,255,255,0.1);" : null}

    .thumb-box{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .item-info{
        display: flex;
        flex:1;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin-left: 10px;
    }
`;

const Info = styled.p`
    margin: 2px 0;
    font-size: 12px;
`;

const ItemThumb = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 4px;
`;

const ThumbBoxHover = styled.div`
    position: absolute;
    left:0; top:0;
    background:rgba(0,0,0,0.5);

    width:100%;
    height:100%;

    display: ${props => props.nowPlaying ? "flex" : "none"};

`;
const ThumbBox = styled.div`
    height:32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    cursor: pointer;

    &:hover{
        ${ThumbBoxHover}{
            display: initial;
        }
    }
`;

const NowPlayingIcon = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "23px"
}

function PlaylistItem({ id, thumb, title, artist, nowPlaying }) {


    const [hover, setHover] = useState(false);

    const dispatch = useMusicDispatch();
    const playlistDispatch = usePlaylistDispatch();
    const playDispatch = usePlayPauseDispatch();
    const playState = usePlayPauseState();
    const playlist = usePlaylistState();

    //플레이리스트에서 음악 클릭(재생)
    const onMusicPlay = () => {
        dispatch({ type: "PLAY", id });
        playlistDispatch({ type: "SET_NOWPLAYING", id });
        playDispatch({ type: "PLAY" });
    }

    //플레이리스트에서 음악 삭제
    const onRemove = (e) => {
        e.stopPropagation();
        playlistDispatch({ type: "REMOVE", id });
        dispatch({ type: 'AFTER_REMOVE', id });

        playlist.forEach(item => {
            if (item.nowPlaying) {
                if (item.id === id) {
                    playDispatch({ type: "PAUSE" });
                }
            }
        })

        //삭제하고 난 후 playlist의 마지막 곡 재생
        // list.filter(item => item.id !== id).forEach((item, key, arr) => {
        //     if (key === arr.length - 1) {
        //         id = item.id;
        //         dispatch({ type: "PLAY", id });
        //         playDispatch({ type: "PLAY" });
        //     }
        // });

    }

    const onMouseEnter = () => {
        setHover(true);
    }

    const onMouseLeave = () => {
        setHover(false);
    }

    const onPlayPause = (e) => {
        e.stopPropagation();
        if (playState) {
            playDispatch({ type: 'PAUSE' });
        } else {
            playDispatch({ type: 'PLAY' });
        }
    }

    return (
        <MusicItemContainer onClick={onMusicPlay} nowPlaying={nowPlaying}>
            <ThumbBox className="thumb-box">
                {!nowPlaying &&
                    <ThumbBoxHover>
                        <PlayArrowIcon style={NowPlayingIcon} />
                    </ThumbBoxHover>}
                {nowPlaying &&
                    <div>
                        <ThumbBoxHover nowPlaying>
                            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                                {!playState && <PlayArrowIcon style={NowPlayingIcon} onClick={onPlayPause} />}
                                {playState && <div>
                                    {!hover && <VolumeUpIcon style={NowPlayingIcon} />}
                                    {hover && <PauseIcon style={NowPlayingIcon} onClick={onPlayPause} />}
                                </div>}
                            </div>
                        </ThumbBoxHover>

                    </div>
                }
                <ItemThumb src={thumb} style={{ cursor: "pointer" }} />
            </ThumbBox>
            <div className="item-info">
                <Info>{title}</Info>
                <Info>{artist}</Info>
            </div>
            <RemoveItem onClick={onRemove}>삭제</RemoveItem>
        </MusicItemContainer>
    );
};

export default React.memo(PlaylistItem);