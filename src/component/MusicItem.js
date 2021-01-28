import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useMusicDispatch, useMusicState } from '../MusicContext';
import { usePlaylistDispatch } from '../PlaylistContext';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import QueueIcon from '@material-ui/icons/Queue';

const OptionBox = styled.ul`
    position: absolute;
    right: -50%; top: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    width:180px;
    margin:0;
    padding: 12px 0;
    background:#212121;

    z-index:5;

    border:1px solid rgba(255,255,255,0.1);
    border-radius: 2px;
`;

const OptionList = styled.li`
    display: flex;
    align-items: center;
    backgound: #212121;

    width:100%;
    height: 36px;
    padding:0 8px;

    cursor: pointer;

    &:hover{
        background:#323232;
    }
`;

const OptionListText = styled.div`
    font-size: 12px;
    margin:0 4px;
`;

const ThumbBoxHover = styled.div`
    position: absolute;
    left:0; top:0;
    background:rgba(0,0,0,0.5);

    width:100%;
    height:100%;

    display: none;
`;

const MoreVertContainer = styled.a`
    position: absolute;
    right: 5%; top:6%;
    width: 20px;
    height: 20px;
    background: none;
`;


const ThumbBox = styled.div`
    position: relative;
    width:100%;
    height:180px;

    cursor: pointer;

    &:hover{
        ${ThumbBoxHover}{
            display: initial;
        }
    }
`;

const ItemBox = styled.div`
    width:180px;
    display:flex;
    flex-direction: column;
    align-items: left;
    justify-content:space-between;
    margin:10px 20px 10px 0;

    position:relative;
    
`;

const ItemInfo = styled.div`
    margin: 15px 0 0 0;
`;

const ItemTitle = styled.div`
    font-weight: bold;
    font-size:12px;
`;

const ItemArtist = styled.div`
    font-size:12px;
`;

const ItemThumb = styled.img`
    width:100%;
    border-radius: 4px;
`;

const NowPlayingIcon = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "45px"
}

function MusicItem({ id, title, thumb, type, artist, url, nowPlaying }) {
    const dispatch = useMusicDispatch();
    const playlistDispatch = usePlaylistDispatch();

    const [option, setOption] = useState(false);

    // 재생 중 상태로 바꾸고 음악을 플레이리스트에 추가
    const onMusicPlay = () => {
        dispatch({ type: "PLAY", id });
        playlistDispatch({ type: 'ADD_PLAYLIST', id, title, artist, thumb, url, nowPlaying });
        playlistDispatch({ type: "SET_NOWPLAYING", id });
    }

    const onJustAdd = () => {
        playlistDispatch({ type: 'ADD_PLAYLIST', id, title, artist, thumb, url, nowPlaying });
    }
    const onMore = (e) => {
        e.stopPropagation();
        setOption(!option);
    }

    // useEffect(() => {

    // }, [nowPlaying]);

    return (

        <ItemBox>
            <ThumbBox onClick={onMusicPlay}>
                <ThumbBoxHover>
                    <MoreVertContainer onClick={onMore}>
                        <MoreVertIcon />
                    </MoreVertContainer>
                </ThumbBoxHover>
                {!nowPlaying && <PlayArrowIcon style={NowPlayingIcon} />}
                {nowPlaying && <VolumeUpIcon style={NowPlayingIcon} />}
                <ItemThumb src={thumb} style={{ cursor: "pointer" }} />
            </ThumbBox>
            {option && <OptionBox>
                <OptionList onClick={onJustAdd}>
                    <QueueMusicIcon style={{ fontSize: "20px", margin: "0 4px" }} />
                    <OptionListText>목록에 추가</OptionListText>
                </OptionList>
                <OptionList>
                    <QueueIcon style={{ fontSize: "20px", margin: "0 4px" }} />
                    <OptionListText>보관함에 추가</OptionListText>
                </OptionList>
            </OptionBox>}
            <ItemInfo>
                <ItemTitle>{title}</ItemTitle>
                <ItemArtist>{artist}</ItemArtist>
            </ItemInfo>
        </ItemBox>
    );
};

export default React.memo(MusicItem);