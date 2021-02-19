import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import SearchBox from './SearchBox';
import HomeIcon from '@material-ui/icons/Home';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SearchIcon from '@material-ui/icons/Search';
import { Mobile, Default } from '../style/MediaQuery';

const NavContainer = styled.div`
    position: fixed;
    left:0; top:0;
    display:flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    height:64px;

    padding:8px 16px;
    background: #030303;

    z-index:999;
`;


const MenuContainer = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;

    list-style:none;
    width:30%;

    font-size:20px;
`;

const SearchButton = styled.div`
    color:#ffffff80;
    cursor:pointer;
`;

const activeStyle = {
    color: "#fff"
}

function Nav({ onClosePop }) {
    const [open, setOpen] = useState(false);

    const onSearchOpen = () => {
        setOpen(true);
    }

    const onSearchClose = () => {
        setOpen(false);
    }

    return (
        <NavContainer>
            <div className="logo">
                <Link to="/" onClick={onClosePop}><img src="https://music.youtube.com/img/on_platform_logo_dark.svg" alt="" /></Link>
            </div>
            <MenuContainer>
                <NavLink to="/" onClick={onClosePop} activeStyle={activeStyle} exact>
                    <Default>홈</Default>
                    <Mobile><HomeIcon /></Mobile>
                </NavLink>
                <NavLink to="/mymusic" onClick={onClosePop} activeStyle={activeStyle} exact>
                    <Default>보관함</Default>
                    <Mobile><LibraryMusicIcon /></Mobile>
                </NavLink>
                <SearchButton onClick={onSearchOpen}>
                    <Default>검색</Default>
                    <Mobile><SearchIcon /></Mobile>
                </SearchButton>
                {open && <SearchBox onSearchClose={onSearchClose} />}
            </MenuContainer>
            <div className="profile">프로필</div>
        </NavContainer >
    );
};

export default React.memo(Nav);