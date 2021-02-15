import React from 'react';
import MusicList from './MusicList';
import styled from 'styled-components';


const HomeTemplateStyle = styled.div`
    width:80%;
    margin:0 auto;

    visibility: ${props => props.open ? "hidden" : "visible"};
`;

function HomeTemplate({ subtitle, title, open, onOpenPop }) {



    return (
        <div>
            <HomeTemplateStyle open={open}>
                <p>{subtitle}</p>
                <h1>{title}</h1>
                <MusicList onOpenPop={onOpenPop} />
            </HomeTemplateStyle>
        </div>
    );
};

export default React.memo(HomeTemplate);