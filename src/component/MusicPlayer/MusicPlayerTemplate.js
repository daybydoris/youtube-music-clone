import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import MusicPlayerSlider from './MusicPlayerSlider';
import MusicPlayerBar from './MusicPlayerBar';
import MusicPlayerPop from './MusicPlayerPop';
import { usePlaylistState } from '../../PlaylistContext';

const PlayerStyle = styled.div`
    position: fixed;
    left:0; bottom:0;
    width:100%;
    height: 60px;

`;

// 플레이어바를 감싸는 템플릿

function MusicPlayerTemplate({ open, onPopToggle, onClosePop, onOpenPop }) {

    const [played, setPlayed] = useState(0);
    const [playingTime, setPlayingTime] = useState(0);
    const [seeking, setSeeking] = useState(false);

    const list = usePlaylistState();
    const player = useRef(null);

    const _onProgress = (e) => {
        setPlayed(player.current.getCurrentTime());

        // ReactPlayer에서 제공하는 getCurrentTime() 메소드로 현재 재생 중인 시간을 불러와 played를 계속 바꿔주고 있다.
    }

    const _onDuration = (duration) => {
        setPlayingTime(duration);
    }

    const _onSeek = (player) => {
        player.current.seekTo(played, "seconds");
    }

    const _onSeekMouseDown = (e) => {
        setSeeking(true);
    }

    const _onSeekChange = (seekTime) => {
        player.current.seekTo(seekTime, "seconds");
    }

    const _onSeekMouseUp = (e) => {
        setSeeking(false);
        //this.player.seekTo(played);
    }

    let listLen = list.length;

    if (listLen < 1) {
        onClosePop();
    }

    return (
        (listLen > 0 && <>
            <MusicPlayerPop open={open} />
            <PlayerStyle>
                <MusicPlayerSlider played={played} playingTime={playingTime} _onSeekMouseDown={_onSeekMouseDown} _onSeekChange={_onSeekChange} _onSeekMouseUp={_onSeekMouseUp} player={player} />
                <MusicPlayerBar onPopToggle={onPopToggle} open={open} _onProgress={_onProgress} _onDuration={_onDuration} played={played} seeking={seeking} _onSeek={_onSeek} player={player} />
            </PlayerStyle>
        </>
        )
    );
};

export default React.memo(MusicPlayerTemplate);