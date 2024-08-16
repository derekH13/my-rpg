import styled from "styled-components";


export const ContainerPost = styled.div<{flex: string}>`
width: 85%;
margin: 0 auto;
display: flex;
justify-content: space-between;
flex-direction: ${props => props.flex};
padding-top: 10rem;
gap: 3rem;
`