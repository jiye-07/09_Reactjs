/**
 * 텍스트에 대한 색상 강조 효과를 지정하기 위한 styledComponent
 */
import styled from 'styled-components';

/** 성별을 표시하기 위한 텍스트 라벨 */
const SexLabel = styled.span`
    &:before {
        color: ${({ sex }) => sex === 'male' ? '#06f' : '#c0c'};
        content: '${({ sex }) => sex === 'male' ? '남자' : '여자'}';
        font-weight: 600;
    }
`;

/** 성별을 표시하기 위한 텍스트 라벨 */
const EmbarkedLabel = styled.span`
    &:before {
        color: ${({ embarked }) => embarked === 'C' ? '#f60' : (embarked === 'Q' ? '#00f' : '#990')};
        content: '${({ embarked }) => embarked === 'C' ? '세르부르' : (embarked === 'Q' ? '퀸즈타운' : '사우샘프턴')}';
        font-weight: 600;
    }
`;

/** 성별을 표시하기 위한 텍스트 라벨 */
const SurvivedLabel = styled.span`
    &:before {
        background-color: ${({ survived }) => survived === true ? '#090' : '#e00'};
        content: '${({ survived }) => survived === true ? '생존' : '사망'}';
        color: #fff;
        font-weight: 600;
    }
`;

export { SexLabel, EmbarkedLabel, SurvivedLabel };