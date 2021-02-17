import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import RepeatIcon from '@material-ui/icons/Repeat';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

const RightControlStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 300px;
    height: 100%;

    position: relative;
`;

const ButtonStyle = {
    color: "#909090",
    margin: "0px 0px 0px 20px",
    background: "none",
    border: "none",
    outline: "none",
    cursor: "pointer",
    fontSize: "25px"
}

const VolumeControl = styled.div`
    width: 100px;
    height: 24px;
    position: absolute;

    left:-10%; top:35%;

    visibility: ${props => props.hover ? "visible" : "hidden"};
`;

const SliderContainer = styled.div`
    position:absolute;
    left:0; top:0; bottom:0; right:0;
    margin: 0 8px;

    cursor: pointer;

`;

const SlideBar = styled.div`
    position: absolute;
    left:0; top:35%;
    width:100%;
    height: 2px;
    background: rgba(144, 144, 144,1);
`;

const SetSlider = styled.div`
    position: absolute;
    left:0; top:35%;
    width:${props => props.volumeSliderW}%;
    height: 2px;
    background: #fff;
    z-index:10;
`;


const WhiteDot = styled.div`

    position: absolute;
    right:0; top:0;

    transform: translateY(-40%);
    width:12px;
    height:12px;

    display: block;


    border-radius: 50%;
    background:#fff;
`;

function BarRightControl({ onPopToggle, open, onVolume, hover, onHoverTrue }) {

    const slideBar = useRef();
    let [volumeSliderW, setVolumeSliderW] = useState(50);

    const onVolumeControl = (e) => {
        e.stopPropagation();
        let clickedX = e.clientX;
        let slideBarX = Math.floor(slideBar.current.getBoundingClientRect().left);


        let volumeValue = Math.round((clickedX - slideBarX) / 80 * 10) / 10;
        setVolumeSliderW(volumeValue * 100);


        onVolume(volumeValue);
    }

    const onMute = (e) => {
        e.stopPropagation();
        setVolumeSliderW(0);
        onVolume(0);
    }

    return (
        <RightControlStyle>
            <VolumeControl hover={hover}>
                <SliderContainer className="slider-container" ref={slideBar} onClick={onVolumeControl}>
                    <SetSlider className="set-slider" volumeSliderW={volumeSliderW}>
                        <WhiteDot />
                    </SetSlider>
                    <SlideBar className="slide-bar" />
                </SliderContainer>
            </VolumeControl>
            <div className="right-control-buttons">
                <VolumeUpIcon style={ButtonStyle} onMouseEnter={onHoverTrue} onClick={onMute} />
                <RepeatIcon style={ButtonStyle} />
                <ShuffleIcon style={ButtonStyle} />
            </div>
            <div className="toggle-button">
                {!open && <ArrowDropUpIcon style={ButtonStyle} onClick={onPopToggle} />}
                {open && <ArrowDropDownIcon style={ButtonStyle} onClick={onPopToggle} />}
            </div>
        </RightControlStyle>

    );
};

export default React.memo(BarRightControl);