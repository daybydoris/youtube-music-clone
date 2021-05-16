import React, { useState, useContext } from 'react';
import MusicList from './MusicList';
import styled from 'styled-components';
import { AppContext } from '../App'

const HomeTemplateStyle = styled.div`
    width:80%;
    margin:0 auto;

    visibility: ${props => props.open ? "hidden" : "visible"};
`;

function HomeTemplate({ subtitle, title }) {
    const [localIndex, setLocalIndex] = useState(0);

    const { open } = useContext(AppContext)

    if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
            if (localIndex <= JSON.parse(localStorage.key(i))) {
                setLocalIndex(JSON.parse(localStorage.key(i)) + 1);
            }
        }
    }

    return (
        <div>
            <HomeTemplateStyle open={open}>
                <p>{subtitle}</p>
                <h1>{title}</h1>
                <MusicList localIndex={localIndex} />
            </HomeTemplateStyle>
        </div>
    );
};

export default React.memo(HomeTemplate);