import React from 'react';
import styled from 'styled-components';
import MyMusicTemplate from '../component/MyMusicTemplate';

const MyMusicStyle = styled.div`
    padding-top: 60px;
    padding-bottom:80px;
    width:100%;
`;

function MyMusic() {
    return (
        <MyMusicStyle>
            <MyMusicTemplate />
        </MyMusicStyle>
    );
};

export default React.memo(MyMusic);