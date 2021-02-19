import React from 'react';
import styled from 'styled-components';
import { usePlaylistState } from '../../PlaylistContext';
import PlaylistItem from './PlaylistItem';



const PlaylistContainer = styled.ul`
    margin:0; padding:0;
    ${props => props.isDesktop ? null : "margin-top: 10px; margin-bottom: 10px; height: 90%; overflow: scroll"};

`;

const PlaylistTab = styled.div`
    display: ${props => props.isDesktop ? "flex" : "none"};
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