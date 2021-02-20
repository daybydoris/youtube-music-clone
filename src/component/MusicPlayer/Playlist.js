import React from 'react';
import styled from 'styled-components';
import { usePlaylistState } from '../../PlaylistContext';
import PlaylistItem from './PlaylistItem';
import { useMediaQuery } from 'react-responsive';


const PlaylistContainer = styled.ul`
    margin:0; padding:0;
    height: 90%;
    -ms-overflow-style: none;
    &::-webkit-scrollbar{
        display:none;
    }

    ${props => props.isDesktop ? null : "margin-top: 10px; margin-bottom: 10px;  overflow-y: scroll"};

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
        <div className="playlist">
            <PlaylistTab isDesktop={isDesktop}>트랙</PlaylistTab>
            <PlaylistContainer>
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
            </PlaylistContainer>
        </div>
    );
};

export default React.memo(Playlist);