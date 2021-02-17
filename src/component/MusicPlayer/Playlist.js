import React from 'react';
import styled from 'styled-components';
import { usePlaylistState } from '../../PlaylistContext';
import PlaylistItem from './PlaylistItem';



const PlaylistContainer = styled.ul`
    margin:0; padding:0;
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

function Playlist() {
    const list = usePlaylistState();

    return (
        <div className="playlist">
            <PlaylistTab>트랙</PlaylistTab>
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