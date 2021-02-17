import React from 'react';
import styled from 'styled-components';
import LeftControlButtons from './LeftControlButtons';
import TimeInfo from './TimeInfo';

const LeftControlStyle = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width:300px;
    height: 100%;
`;

function BarLeftControl({ played, loaded }) {
    return (
        <LeftControlStyle>
            <LeftControlButtons loaded={loaded} />
            <TimeInfo played={played} />
        </LeftControlStyle>
    );
};

export default React.memo(BarLeftControl);