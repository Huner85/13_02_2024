import React from 'react'
import styled from 'styled-components'
import { Container } from '../../../../components/Container'
import { FlexWrapper } from '../../../../components/FlexWrapper'

type WorksPropsType = {
    src: string,
    alt: string
}

export const Work = (props: WorksPropsType) => {
    return (
        <Image src={props.src} alt={props.alt} />
    )
}

const Image = styled.img`
    width: 400px;
    flex-grow: 1;
`

