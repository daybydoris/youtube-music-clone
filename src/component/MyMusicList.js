import React from 'react';
import styled from 'styled-components';
import { useMyMusicState } from '../MyMusicContext';
import MyMusicItem from './MyMusicItem';

const MusicListBlock = styled.div`
    display: flex;
`;
function MyMusicList() {
    const myMusic = useMyMusicState();

    if (myMusic.length < 1) {
        return (
            <p>보관함에 담은 곡이 없습니다.</p>
        );
    }
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