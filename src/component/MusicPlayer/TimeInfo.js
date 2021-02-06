import React from 'react';
import styled from 'styled-components';
import { useMusicState } from '../../MusicContext';

const TimeInfoStyle = styled.span`
    font-size: 12px;
    color:#aaa;
    min-width: 56px;
`;

function TimeInfo({ played }) {

    const state = useMusicState();

    let minutes = "0";
    let seconds = "00";

    //재생 시간 계산
    if (!played) {
        minutes = "0";
        seconds = "00";
    } else if (played < 60) {
        if (Math.round(played) < 10) {
            seconds = `0${Math.round(played)}`;
        } else {
            seconds = Math.round(played);
        }
    } else if (played >= 60) {
        minutes = Math.floor(Math.floor(played) / 60);
        seconds = Math.round(played) % 60;
        if (seconds < 10) {
            seconds = `0${Math.round(played) % 60}`;
        } else {
            seconds = Math.round(played) % 60;
        }
    }


    return (
        <TimeInfoStyle>
            {minutes}:{seconds} / {state.filter(song => {
                return song.nowPlaying
            }).map(song => (
                song.playTime
            ))}
        </TimeInfoStyle>
    );
};

export default React.memo(TimeInfo);