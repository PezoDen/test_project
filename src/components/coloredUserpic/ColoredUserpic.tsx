import {FC} from "react";
import styled from "@xstyled/styled-components";

// @ts-ignore
const ContainerGradient = styled.div`
  box-sizing: border-box;
  width: ${(props: any) => (props.size + "px")};
  height: ${(props: any) => (props.size + "px")};
  border-radius: 50%;
  background-image: ${(props: any) => `linear-gradient(to right, ${props.colors[0]}, ${props.colors[1]})`};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props: any) => (props.margin + "px")};
  &:hover {
    background-image: ${(props: any) => `linear-gradient(to right, ${props.hoverColors[0]}, ${props.hoverColors[1]})`};
  }
`;

// @ts-ignore
const StyledImg = styled.img`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: ${(props: any) => (`${props.colorWidth}px solid ${props.backgroundColor}`)};
  border-radius: 50%;
`;

type ColoredUserpicPropsType = {
    src: string
    size: number
    margin: number
    backgroundColor: string
    colors: string[]
    hoverColors: string[]
    colorWidth: number
}

export const ColoredUserpic: FC<ColoredUserpicPropsType> = ({
                                                                size,
                                                                src,
                                                                margin,
                                                                backgroundColor,
                                                                colorWidth,
                                                                hoverColors,
                                                                colors
                                                            }) => {
    return <ContainerGradient size={size} margin={margin} colors={colors} hoverColors={hoverColors}>
        <StyledImg src={src} backgroundColor={backgroundColor} colorWidth={colorWidth} alt={'user'}/>
    </ContainerGradient>
}
