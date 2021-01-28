import React from 'react';
import styled from 'styled-components';
import LeftControlButtons from './LeftControlButtons';
import TimeInfo from './TimeInfo';

const LeftControlStyle = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width:20%;
    height: 100%;
`;

function BarLeftControl() {
    return (
        <LeftControlStyle>
            <LeftControlButtons />
            <TimeInfo />
        </LeftControlStyle>
    );
};

export default React.memo(BarLeftControl);