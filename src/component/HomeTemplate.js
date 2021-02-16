import React, { useState } from 'react';
import MusicList from './MusicList';
import styled from 'styled-components';


const HomeTemplateStyle = styled.div`
    width:80%;
    margin:0 auto;

    visibility: ${props => props.open ? "hidden" : "visible"};
`;

function HomeTemplate({ subtitle, title, open, onOpenPop, myMusicPop }) {
    const [localIndex, setLocalIndex] = useState(0);

    if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
            if (localIndex <= JSON.parse(localStorage.key(i))) {
                setLocalIndex(JSON.parse(localStorage.key(i)) + 1);
            }
        }
    }

    console.log(localIndex);

    return (
        <div>
            <HomeTemplateStyle open={open}>
                <p>{subtitle}</p>
                <h1>{title}</h1>
                <MusicList onOpenPop={onOpenPop} myMusicPop={myMusicPop} localIndex={localIndex} />
            </HomeTemplateStyle>
        </div>
    );
};

export default React.memo(HomeTemplate);