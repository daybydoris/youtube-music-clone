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
    slidesToShow: 6.3,
    draggable: false,
    lazyLoad: true,
    responsive: [
        {
            // PC
            breakpoint: 1024,
            settings: {
                slidesToShow: 6.3,
            }
        },
        {
            // tablet
            breakpoint: 768,
            settings: {
                draggable: true,
                swipeToSlide: true,
                slidesToShow: 3.3,
                arrows: false
            }
        },
        {
            // mobile
            breakpoint: 480,
            settings: {
                draggable: true,
                swipeToSlide: true,
                slidesToShow: 2.2,
                arrows: false
            }
        }
    ]
}

function MyMusicList() {
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
                        />
                    ))
                }
            </Slider>
        </MusicListBlock>
    );
}

export default React.memo(MyMusicList);