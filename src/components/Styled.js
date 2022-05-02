import styled from "styled-components";

export const Grid = styled.div`
    // height: 100vh;
    width: 97vw;
    display: grid;
    grid-template-columns: repeat(2, 49%);
    gap: 10px;
    padding: 20px;
`;

export const Select = styled.select`
    height: 40px;
    width: 100px;
    background: rgb(54, 187, 138);
`;

export const Flex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
`;
