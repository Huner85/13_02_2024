import React from 'react'
import img1 from '../../../assets/unsplash1.jpg'
import img2 from '../../../assets/unsplash2.jpg'
import img3 from '../../../assets/unsplash3.jpg'
import img4 from '../../../assets/unsplash4.jpg'
import styled from 'styled-components'
import { Work } from './work/Work'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'

const worksData = [
    {
        src: img1,
        alt: "Project1"
    },
    {
        src: img2,
        alt: "Project2"
    },
    {
        src: img3,
        alt: "Project3"
    },
    {
        src: img4,
        alt: "Project4"
    },
]

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <FlexWrapper wrap='wrap' gap='20px'>
                    {worksData.map((w, index) => {
                        return (
                            <Work src={w.src} alt={w.alt} key={index} />
                        )
                    })}
                </FlexWrapper>

            </Container>
        </StyledWorks>
    )
}

const StyledWorks = styled.div`
    
`