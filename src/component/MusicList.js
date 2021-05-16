import React from 'react';
import styled from 'styled-components';
import MusicItem from './MusicItem';
import { useMusicState } from '../MusicContext';
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
        right: -25px;
        [dir="rtl"] & {
            left: -25px;
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
            breakpoint: 1920,
            settings: {
                slidesToShow: 6.3,
            }
        },
        {
            // tablet
            breakpoint: 1180,
            settings: {
                draggable: true,
                swipeToSlide: true,
                slidesToShow: 3.3,
                arrows: false
            }
        },
        {
            // mobile
            breakpoint: 640,
            settings: {
                draggable: true,
                swipeToSlide: true,
                slidesToShow: 2.2,
                arrows: false
            }
        }
    ]
}

function MusicList({ localIndex }) {

    const songs = useMusicState();

    return (
        <MusicListBlock>
            <Slider {...settings}>
                {
                    songs.map(song => (
                        <MusicItem
                            key={song.id}
                            id={song.id}
                            title={song.title}
                            artist={song.artist}
                            thumb={song.thumb}
                            url={song.url}
                            nowPlaying={song.nowPlaying}
                            copyright={song.copyright}
                            localIndex={localIndex}
                        />
                    ))}
            </Slider>
        </MusicListBlock>
    );
};

export default React.memo(MusicList);