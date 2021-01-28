import React from 'react';
import styled from 'styled-components';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { useMusicDispatch } from '../../MusicContext';
import { usePlaylistDispatch } from '../../PlaylistContext';

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

    cursor: pointer;

    &:hover{
        ${RemoveItem}{
            display: block;
        }
    }

    .thumb-box{
        height:100%;
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


function PlaylistItem({ id, thumb, title, artist, nowPlaying }) {
    const dispatch = useMusicDispatch();
    const playlistDispatch = usePlaylistDispatch();

    const onMusicPlay = () => {
        dispatch({ type: "PLAY", id });
    }

    const onRemove = (e) => {
        e.stopPropagation();
        playlistDispatch({ type: "REMOVE", id });
        dispatch({ type: 'AFTER_REMOVE', id });
    }

    return (
        <MusicItemContainer onClick={onMusicPlay}>
            <div className="thumb-box">
                <ItemThumb src={thumb} />
            </div>
            <div className="item-info">
                <Info>{title}</Info>
                <Info>{artist}</Info>
            </div>
            <RemoveItem onClick={onRemove}>삭제</RemoveItem>
        </MusicItemContainer>
    );
};

export default PlaylistItem;