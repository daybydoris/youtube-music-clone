import React from 'react';
import styled from 'styled-components';

const TimeInfoStyle = styled.span`
    font-size: 12px;
    color:#aaa;
`;

function TimeInfo() {
    return (
        <TimeInfoStyle>
            1:30 / 4:33
        </TimeInfoStyle>
    );
};

export default TimeInfo;