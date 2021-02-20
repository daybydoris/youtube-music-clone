import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import RepeatIcon from '@material-ui/icons/Repeat';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import { useMediaQuery } from 'react-responsive';
import { Mobile, Default } from '../../style/MediaQuery';

const RightControlStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 300px;
    height: 100%;

    position: ${props => props.isMobile ? "initial" : "relative"};

    .control-buttons{
        display: ${props => props.isMobile ? props.mobileToggle ? "flex" : "none" : "flex"};
        ${props => props.isMobile ? "position:absolute; left:70%; top:53%; transform: translate(-50%,-50%);" : null}

    .right-control-buttons{
        min-width:75px;
        .button-icon{
            color: #909090;
            background: none;
            border: none;
            outline: none;
            cursor: pointer;
            font-size: 25px;
            margin:${props => props.isMobile ? "0px 0p 0px 5px" : "0px 0px 0px 20px"};
        }
    }

    .mobile-right-control{
        ${props => props.mobileToggle ? "transform:rotate(-180deg);" : null};
    }
`;

const ButtonStyle = {
    color: "#909090",
    margin: "0px 0px 0px 10px",
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


    left:${props => props.isMobile ? "-120" : props.isTablet ? "-40" : "-10"}%;
    top:${props => props.isMobile ? "10" : "35"}%;

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

function BarRightControl({ onPopToggle, open, onVolume, hover, onHoverTrue, onMobileBtn, mobileToggle, isMobile, isDesktop, isTablet }) {

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

    const onUnmute = (e) => {
        e.stopPropagation();
        setVolumeSliderW(50);
        onVolume(50);
    }

    return (
        <RightControlStyle isMobile={isMobile} mobileToggle={mobileToggle}>
            <div className="control-buttons" >
                <VolumeControl hover={hover} className="volume-control" isMobile={isMobile} isDesktop={isDesktop} isTablet={isTablet}>
                    <SliderContainer className="slider-container" ref={slideBar} onClick={onVolumeControl}>
                        <SetSlider className="set-slider" volumeSliderW={volumeSliderW}>
                            <WhiteDot />
                        </SetSlider>
                        <SlideBar className="slide-bar" />
                    </SliderContainer>
                </VolumeControl>
                <div className="right-control-buttons" isMobile={isMobile}>
                    {volumeSliderW > 0 && <VolumeUpIcon className="button-icon" onMouseEnter={onHoverTrue} onClick={onMute} />}
                    {volumeSliderW === 0 && <VolumeOffIcon className="button-icon" onMouseEnter={onHoverTrue} onClick={onUnmute} />}
                    <RepeatIcon className="button-icon" />
                    <ShuffleIcon className="button-icon" />
                </div>
            </div>
            {isMobile && <ArrowLeftIcon className="mobile-right-control" onClick={onMobileBtn} style={ButtonStyle} mobileToggle={mobileToggle} />}
            <div className="toggle-button">
                {!open && <ArrowDropUpIcon style={ButtonStyle} onClick={onPopToggle} />}
                {open && <ArrowDropDownIcon style={ButtonStyle} onClick={onPopToggle} />}
            </div>

        </RightControlStyle >

    );
};

export default React.memo(BarRightControl);