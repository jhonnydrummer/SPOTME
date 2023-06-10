import styled from 'styled-components'

export const Logomarca = styled.img`
    display: flex;
    justify-content: center;
    width: 200px;
    margin-bottom: 20px;
    margin-top: 15px;
`;



export const Container = styled.div`
min-width: 25%;
width: 500px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 15px;
color: white;


`;

export const Content = styled.div`
    gap: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    box-shadow: 0 1px 2px #0003;
    background-color: #03183569;
    max-width: 450px;
    padding: 20px;
    border-radius: 5px
    
    `;

export const Label = styled.label`
    font-size: 18px;
    font-weight: 600;
    color:white;
`

export const LabelSignup = styled.label`
    font-size: 16px;
    color: white;
`

export const LabelError = styled.label`
    font-size: 14px;
    color: red;
`

export const Strong = styled.strong`
    cursor: pointer;


a{
    text-decoration: none;
    color: black;
}`;