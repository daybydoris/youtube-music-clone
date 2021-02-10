import React from 'react';
import MusicList from './MusicList';
import styled, { keyframes } from 'styled-components';


const ContentHidden = keyframes`
    0%{
        visibility: visible;
    }
    100%{
        visibility: hidden;
    }
`;

const ContentVisible = keyframes`
    0%{
        visibility: hidden;
    }
    100%{
        visibility: visible;
    }
`;

const HomeTemplateStyle = styled.div`
    width:80%;
    margin:0 auto;

    visibility: visible;

    animation: ${props => props.open ? ContentHidden : ContentVisible} 0.5s forwards;
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

export default HomeTemplate;