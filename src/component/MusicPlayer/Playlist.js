import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useMusicState } from '../../MusicContext';
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

    font-size:12px;
`;

function Playlist() {
    const list = usePlaylistState();

    console.log(list);

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
                    />
                ))}
            </PlaylistContainer>
        </div>
    );
};

export default React.memo(Playlist);