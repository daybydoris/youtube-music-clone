import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';

const PlayerSlide = styled.div`
    position: relative;
    width:100%;
    background:rgba(255,255,255,0);
    height:1.3px;

    cursor: pointer;
`;

const DurationSlide = styled.div`
    position:absolute;
    left:0; top:50%;

    width:100%;
    height:1.5px;


    background:rgba(255,255,255,0.3);

`;

const PlayingSlide = styled.div`
    position: absolute;
    left:0; top:50%;

    // (100% / 곡 길이) * 재생된 시간
    width:${props => props.currentWidth}%;
    height:1.5px;

    background:#f00;
`;

const RedDot = styled.div`

    position: absolute;
    right:0; top:0;
    width:10px;
    height:10px;

    display: none;


    border-radius: 50%;
    background:#f00;
`;

const TimeBox = styled.div`
    position: absolute;
    left:${props => props.position}px; top:-30%;

    transform: translateX(-50%);
    padding:2px 4px;
    background:#212121;
    color:#fff;
    font-size:8px;
    display: none;
`;

const SliderContainer = styled.div`
    position:absolute;
    left:0; top:0; right:0; bottom:0;

    padding: 15px 0;
    width:100%;
    height:100%;

    transform: translateY(-50%);

    display: flex;

    background:rgba(255,255,255,0);

    z-index:10;

    &:hover{
        ${DurationSlide}{
            height:2.2px;
            background:rgba(255,255,255, 0.4);
        }
        ${PlayingSlide}{
            height:2.2px;
        }
        ${RedDot}{
            display: initial;
        }
        ${TimeBox}{
            display:initial;
        }
    }
`;



// 플레이어바에서 음악 재생 현황을 나타내는 슬라이드 바

function MusicPlayerSlider({ playingTime, played, _onSeekMouseDown, _onSeekChange, _onSeekMouseUp, player, _onSeek }) {
    const sliderCon = useRef();
    const [hoverTime, setHoverTime] = useState();
    const [hoveredX, setHoveredX] = useState();

    let currentWidth = (100 / playingTime) * played;

    const onTimeSeek = (e) => {
        e.stopPropagation();

        //재생 바 길이
        // if (e.target.className.includes("dot")) {
        let clickedX = e.clientX;

        let slideWidth = sliderCon.current.offsetWidth;
        let percentCalc = (clickedX / slideWidth) * 100; // 재생 바에서 클릭한 곳이 몇 퍼센트 위치인지
        let seekTime = (playingTime * percentCalc) / 100;
        // console.log(playingTime * percentCalc / 100); // 바뀔 played 계산. seek 함수로 찾아가야할 곳
        currentWidth = (clickedX / slideWidth) * 100;

        _onSeekChange(seekTime);

    }

    const onHover = (e) => {
        setHoveredX(e.clientX);

        let slideWidth = sliderCon.current.offsetWidth;
        let percentCalc = (hoveredX / slideWidth) * 100;

        let seekTime = (playingTime * percentCalc) / 100;

        let minutes = 0;
        let seconds = 0;

        if (seekTime < 60) {
            if (Math.round(seekTime) < 10) {
                seconds = `0${Math.round(seekTime)}`;
            } else {
                seconds = Math.round(seekTime);
            }
        } else if (seekTime >= 60) {
            minutes = Math.floor(Math.floor(seekTime) / 60);
            seconds = Math.round(seekTime) % 60;
            if (seconds < 10) {
                seconds = `0${Math.round(seekTime) % 60}`;
            } else {
                seconds = Math.round(seekTime) % 60;
            }
        }

        setHoverTime(`${minutes}:${seconds}`);
    }
    return (
        <PlayerSlide>
            <SliderContainer ref={sliderCon} className="slider-con" onClick={onTimeSeek} onMouseMove={onHover} playingTime={playingTime} played={played}>
                <DurationSlide />
                <PlayingSlide currentWidth={currentWidth}>
                    <Draggable
                        axis="x"
                        defaultPosition={{ x: 2, y: -3 }}
                    >
                        <RedDot className="red-dot" />
                    </Draggable>
                </PlayingSlide>
                <TimeBox position={hoveredX}>
                    {hoverTime}
                </TimeBox>
            </SliderContainer>
        </PlayerSlide >
    );
};

export default React.memo(MusicPlayerSlider);