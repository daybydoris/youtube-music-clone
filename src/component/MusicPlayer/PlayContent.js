import React from 'react';
import styled from 'styled-components';
import { usePlaylistState } from '../../PlaylistContext';

const PlayContentContainer = styled.div`
    width:64%;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        max-width:100%;
        max-height:100%;
    }
`;

function PlayContent() {

    const list = usePlaylistState();

    let thumbId = "";

    list.forEach(item => {
        if (item.nowPlaying) {
            thumbId = item.thumb;
        }
    });

    return (
        <PlayContentContainer className="content">
            <img src={thumbId} alt="" />
        </PlayContentContainer>
    );
};

export default React.memo(PlayContent);