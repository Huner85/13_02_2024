import iconsSprite from '../../assets/sprite.svg'

type IconPropsType = {
    iconId: string
} 

export const Icon = (props: IconPropsType) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none">
            <use xlinkHref={ `${iconsSprite}#${props.iconId}` } />
        </svg>
    )
}
