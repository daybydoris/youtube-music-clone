import React from 'react';
import styled from 'styled-components';
import SearchBoxItem from './SearchBoxItem';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const SearchBoxContainer = styled.div`
    position: absolute;
    left:50%; top:5px;

    transform: translateX(-50%);

    width:50%;

    background:#212121;

    border:1px solid #333;
    border-radius:2px;
`;

const SearchTop = styled.div`
    display: flex;
    align-items: center;
    border-bottom:1px solid #333;
`;

const SearchInput = styled.input`
    padding:12px;

    width:100%;
    height: 100%;
    
    background:#212121;
    border:none;
    outline: none;

    color: #fff;
`;

const ArrowStyle = {
    color: "#ffffff80",
    margin: "0px 0px 0px 12px",
    fontSize: "20px",
    cursor: "pointer"
}

const SearchBoxList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-contents: center;
    padding:8px 0px;
`;

function SearchBox({ onSearchClose }) {
    return (
        <SearchBoxContainer>
            <SearchTop>
                <ArrowBackIcon style={ArrowStyle} onClick={onSearchClose} />
                <SearchInput placeholder="검색" />
            </SearchTop>
            <SearchBoxList>
                <SearchBoxItem />
                <SearchBoxItem />
                <SearchBoxItem />
            </SearchBoxList>
        </SearchBoxContainer>
    );
};

export default React.memo(SearchBox);