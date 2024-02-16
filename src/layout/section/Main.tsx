import React from 'react'
import styled from 'styled-components'
import photo from '../../assets/Foto-4.jpg'
import { Container } from '../../components/Container'

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper>
                    <Title>Hi</Title>
                    <Name>I am Dzmitry Shuiko</Name>
                    <Title>I Web Developer from Minsk</Title>
                    <Photo src={photo} alt="" />
                </FlexWrapper>
            </Container>
        </StyledMain>
    )


}

const StyledMain = styled.div`
    background-color: red;
    height: 100vh;
`

const Title = styled.h3`
    
`
const Name = styled.h3`
    
`
const FlexWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`
const Photo = styled.img`
    border-radius: 50%;
    width: 420px;
    height: 420px;
    object-fit: cover;
    position: relative;
    top: 20px;
`