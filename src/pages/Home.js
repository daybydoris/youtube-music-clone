import React from 'react';
import styled from 'styled-components';
import HomeTemplate from '../component/HomeTemplate';

const HomeTemplateList = [
    {
        id: 1,
        subtitle: '',
        title: '추천 음악'
    },
    {
        id: 2,
        subtitle: '',
        title: '즐겨 듣는 음악'
    }
];



const HomeStyle = styled.div`
    padding-top: 60px;
    padding-bottom:80px;
    width:100%;
`;

function Home({ open, onOpenPop }) {

    return (
        <HomeStyle>
            {HomeTemplateList.map(list => (
                <HomeTemplate
                    key={list.id}
                    subtitle={list.subtitle}
                    title={list.title}
                    open={open}
                    onOpenPop={onOpenPop}
                />
            ))}
        </HomeStyle>
    );
};

export default React.memo(Home);