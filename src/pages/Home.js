import React from 'react';
import styled from 'styled-components';
import HomeTemplate from '../component/HomeTemplate';

const HomeTemplateList = [
    {
        id: 0,
        subtitle: '다시 듣기',
        title: '오후에 잘 어울리는 음악'
    }
    // {
    //     id: 1,
    //     subtitle: '',
    //     title: '추천 음악'
    // }
]

const HomeStyle = styled.div`
    margin-bottom:70px;
`;

function Home() {
    return (
        <HomeStyle>
            {HomeTemplateList.map(list => (
                <HomeTemplate
                    key={list.id}
                    subtitle={list.subtitle}
                    title={list.title}
                />
            ))}
        </HomeStyle>
    );
};

export default React.memo(Home);