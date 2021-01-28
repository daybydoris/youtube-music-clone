import React from 'react';
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

    width: 20%;
    height: 100%;
`;

const ButtonStyle = {
    color: "#909090",
    margin: "0px 0px 0px 20px",
    background: "none",
    border: "none",
    outline: "none",
    cursor: "pointer",
    fontSize: "20px"
}

function BarRightControl({ onPopToggle, open }) {
    return (
        <RightControlStyle>
            <div className="right-control-buttons">
                <VolumeUpIcon style={ButtonStyle} />
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

export default BarRightControl;