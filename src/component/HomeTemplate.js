import React from 'react';
import MusicList from './MusicList';
import styled from 'styled-components';
import { useMusicState } from '../MusicContext';


const HomeTemplateStyle = styled.div`
    width:80%;
    margin:0 auto;
`;
function HomeTemplate({ subtitle, title }) {
    return (
        <HomeTemplateStyle>
            <p>{subtitle}</p>
            <h1>{title}</h1>
            <MusicList />
        </HomeTemplateStyle>
    );
};

export default HomeTemplate;