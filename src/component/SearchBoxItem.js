import React from 'react';
import styled from 'styled-components';
import RestoreIcon from '@material-ui/icons/Restore';

const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 48px;
`;

const ItemText = styled.div`
    flex:1;
    font-size: 16px;
    color:#ffffff80;
`;

const RestoreButtonStyle = {
    color: "#ffffff80",
    margin: "0px 12px",
    fontSize: "20px"
}

const RemoveButton = styled.button`
    background: none;
    outline: none;
    border: none;

    font-size: 12px;
    color:#ffffff80;

    cursor: pointer;

    padding:0px 14px;
`;

function SearchBoxItem() {
    return (
        <ItemContainer>
            <RestoreIcon style={RestoreButtonStyle} />
            <ItemText>아이템</ItemText>
            <RemoveButton>삭제</RemoveButton>
        </ItemContainer>
    );
};

export default React.memo(SearchBoxItem);