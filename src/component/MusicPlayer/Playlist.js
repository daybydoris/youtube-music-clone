import React from 'react';
import styled from 'styled-components';
import { usePlaylistState } from '../../PlaylistContext';
import PlaylistItem from './PlaylistItem';
import { useMediaQuery } from 'react-responsive';

const PlaylistContainer = styled.div`
    ${props => props.isDesktop ? null : "margin-top: 10px; margin-bottom: 10px;"};
`;

const PlaylistBox = styled.ul`
    margin:0; padding:0;
    height: 90%;
    -ms-overflow-style: none;
    &::-webkit-scrollbar{
        display:none;
    }

    ${props => props.isDesktop ? null : "overflow-y: scroll"};

`;

const PlaylistTab = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;

    padding:8px 0;

    border-bottom:2px solid #fff;

    font-size:16px;
`;

function Playlist({ isDesktop }) {
    const list = usePlaylistState();

    return (
        <PlaylistContainer className="playlist" isDesktop={isDesktop}>
            <PlaylistTab isDesktop={isDesktop}>트랙</PlaylistTab>
            <PlaylistBox>
                {list.map(item => (
                    <PlaylistItem
                        key={item.id}
                        id={item.id}
                        thumb={item.thumb}
                        artist={item.artist}
                        url={item.url}
                        title={item.title}
                        nowPlaying={item.nowPlaying}
                    />
                ))}
            </PlaylistBox>
        </PlaylistContainer>
    );
};

export default React.memo(Playlist);