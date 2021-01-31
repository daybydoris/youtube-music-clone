import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import SearchBox from './SearchBox';

const NavContainer = styled.div`
    position: fixed;
    left:0; top:0;
    display:flex;
    align-items: center;
    justify-content: space-between;
    width:100%;

    padding:8px;
    background: #030303;

    z-index:999;
`;


const MenuContainer = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;

    list-style:none;
    width:30%;
`;

const SearchButton = styled.div`
    color:#ffffff80;
    cursor:pointer;
`;

const activeStyle = {
    color: "#fff"
}

function Nav() {
    const [open, setOpen] = useState(false);

    console.log(open);
    const onSearchOpen = () => {
        setOpen(true);
    }

    const onSearchClose = () => {
        setOpen(false);
    }

    return (
        <NavContainer>
            <div className="logo">
                <Link to="/"><img src="https://music.youtube.com/img/on_platform_logo_dark.svg" /></Link>
            </div>
            <MenuContainer>
                <NavLink to="/" activeStyle={activeStyle} exact>홈</NavLink>
                <NavLink to="/mymusic" activeStyle={activeStyle} exact>보관함</NavLink>
                <SearchButton onClick={onSearchOpen}>
                    검색
                </SearchButton>
                {open && <SearchBox onSearchClose={onSearchClose} />}
            </MenuContainer>
            <div className="profile">프로필</div>
        </NavContainer >
    );
};

export default React.memo(Nav);