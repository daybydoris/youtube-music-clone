import React from 'react';
import styled from 'styled-components';
import MusicItem from './MusicItem';
import { useMusicState } from '../MusicContext';
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