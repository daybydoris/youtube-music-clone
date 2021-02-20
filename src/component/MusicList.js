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
            // PC
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3
            }
        },
        {
            // tablet
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: false
            }
        },
        {
            // mobile
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false
            }
        }
    ]
}

function MusicList({ onOpenPop, myMusicPop, localIndex }) {

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
                            onOpenPop={onOpenPop}
                            myMusicPop={myMusicPop}
                            localIndex={localIndex}
                        />
                    ))}
            </Slider>
        </MusicListBlock>
    );
};

export default React.memo(MusicList);