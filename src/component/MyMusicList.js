import React from 'react';
import styled from 'styled-components';
import { useMyMusicState } from '../MyMusicContext';
import MyMusicItem from './MyMusicItem';
import Slider from "react-slick";

const MusicListBlock = styled.div`
    .slick-track{
    }
    .slick-slide{
        min-width:220px;
    }
`;

const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    slidesToShow: 5
}

function MyMusicList({ myMusicPop, onOpenPop }) {
    const myMusic = useMyMusicState();

    if (myMusic.length < 1) {
        return (
            <p>보관함에 담은 곡이 없습니다.</p>
        );
    }
    return (
        <MusicListBlock>
            <Slider {...settings}>
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
                            copyright={song.copyright}
                            localIndex={song.localIndex}
                            myMusicPop={myMusicPop}
                            onOpenPop={onOpenPop}
                        />
                    ))
                }
            </Slider>
        </MusicListBlock>
    );
}

export default React.memo(MyMusicList);