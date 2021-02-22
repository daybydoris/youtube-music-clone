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

const Profile = styled.div`
    width:30px;
    height:30px;

    background: #846523;
    border-radius:50%;
    cursor: pointer;

    color: #fff;
    font-weight: bold;

    position: relative;

    text-align: center;
    line-height:1.7;
`;

const ProfileInfo = styled.div`
    display: flex;
    align-items: center;
    backgound: #212121;

    width:100%;
    height: 36px;
    padding:0 8px;
`;

const ProfileOption = styled.ul`
    position: absolute;
    right:0; top: 100%;

    display: ${props => props.profile ? "flex" : "none"};
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    width: 180px;
    margin: 0;
    padding: 12px 0;
    background:#212121;

    z-index: 10;

    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 2px;

    font-weight: 300;
`;

const ProfileOptionList = styled.li`
    display: flex;
    align-items: center;
    backgound: #212121;

    width:100%;
    height: 36px;
    padding:0 8px;

    cursor: pointer;

    &:hover{
        background:#323232;
    }
`;

const activeStyle = {
    color: "#fff"
}

function Nav({ onClosePop }) {
    const [open, setOpen] = useState(false);
    const [profile, setProfile] = useState(false);

    const onSearchOpen = () => { setOpen(true); }

    const onSearchClose = () => { setOpen(false); }

    const onProfileToggle = () => { setProfile(!profile); }

    return (
        <NavContainer>
            <div className="logo">
                <Link to="/" onClick={onClosePop}><img src="logo_dark.png" alt="" width="80px" height="24px"/></Link>
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
            <Profile className="profile">
                G
            </Profile>
        </NavContainer >
    );
};

export default React.memo(Nav);