import React from 'react';
import styled from 'styled-components';
import LeftControlButtons from './LeftControlButtons';
import TimeInfo from './TimeInfo';
import { Desktop } from '../../style/MediaQuery';

const LeftControlStyle = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width:${props => props.isMobile ? "40%" : "300px"};
    height: 100%;
`;

function BarLeftControl({ played, loaded, isMobile }) {
    return (
        <LeftControlStyle isMobile={isMobile}>
            <LeftControlButtons loaded={loaded} />
            <Desktop>
                <TimeInfo played={played} />
            </Desktop>
        </LeftControlStyle>
    );
};

export default React.memo(BarLeftControl);