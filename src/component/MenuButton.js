import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled.div`
    color:#ffffff80;
    list-style:none;

    ${props =>
        props.active &&
        css`
            color:#fff;
        `
    }
`;


function MenuButton({ id, name, link, active }) {

    return (
        <>
            <Link to={link}>
                <Button onClick={onActive} active={active} id={id}>
                    {name}
                </Button>
            </Link>
        </>
    );
};

export default React.memo(MenuButton);