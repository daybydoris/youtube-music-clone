import React from 'react';
import styled from 'styled-components';
import { useMyMusicState } from '../MyMusicContext';
import MyMusicItem from './MyMusicItem';
import Slider from "react-slick";

const MusicListBlock = styled.div`
    .slick-track{
        margin-left: none;
        margin-right: none;
    }
    .slick-slide{
        min-width:230px;
    }
    .slick-prev,
    .slick-next {
        width:40px;
        height:40px;

        top:40%;

        z-index:10;

        &:before {
            font-size:40px;
        }
    }

    .slick-prev {
        left: -20px;
        [dir="rtl"] & {
            left: auto;
            right: -20px;
        }
    }

    .slick-next {
        right: 10px;
        [dir="rtl"] & {
            left: 10px;
            right: auto;
        }
    }
`;

const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    slidesToShow: 6
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