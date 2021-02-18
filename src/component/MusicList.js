import React from 'react';
import styled from 'styled-components';
import MusicItem from './MusicItem';
import { useMusicState } from '../MusicContext';
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