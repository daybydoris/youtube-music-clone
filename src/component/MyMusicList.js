import React from 'react';
import styled from 'styled-components';
import { useMyMusicState } from '../MyMusicContext';
import MyMusicItem from './MyMusicItem';
import Slider from "react-slick";

const MusicListBlock = styled.div`
    .slick-track{
        margin-left: 0;
    }
    .slick-prev,
    .slick-next {
        width:45px;
        height:45px;

        top:40%;

        z-index:10;

        &:before {
            font-size:45px;
        }
    }

    .slick-prev {
        left: -25px;
        [dir="rtl"] & {
            left: auto;
            right: -25px;
        }
    }

    .slick-next {
        right: 0px;
        [dir="rtl"] & {
            left: 0px;
            right: auto;
        }
    }
`;

const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    slidesToShow: 6,
    lazyLoad: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false
            }
        }
    ]
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