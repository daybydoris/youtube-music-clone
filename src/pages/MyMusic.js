import React from 'react';
import styled from 'styled-components';
import MyMusicTemplate from '../component/MyMusicTemplate';

const MyMusicStyle = styled.div`
    padding-top: 60px;
    padding-bottom:80px;
    width:100%;
`;

function MyMusic({ myMusicPop }) {
    return (
        <MyMusicStyle>
            <MyMusicTemplate myMusicPop={myMusicPop} />
        </MyMusicStyle>
    );
};

export default React.memo(MyMusic);