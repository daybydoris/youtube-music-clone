import React from 'react';
import styled from 'styled-components';
import { useMyMusicState } from '../MyMusicContext';
import MyMusicItem from './MyMusicItem';

const MusicListBlock = styled.div`
    display: flex;
`;
function MyMusicList() {
    const myMusic = useMyMusicState();

    console.log(myMusic);

    return (
        <MusicListBlock>
            {
                myMusic.map((song, key) => (
                    <MyMusicItem
                        key={key}
                        id={song.id}
                        title={song.title}
                        artist={song.artist}
                        thumb={song.thumb}
                        url={song.url}
                        nowPlaying={song.nowPlaying}
                    />
                ))
            }
        </MusicListBlock>
    );
}

export default React.memo(MyMusicList);