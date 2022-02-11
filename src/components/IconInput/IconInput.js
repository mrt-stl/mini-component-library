import React from "react"
import styled from "styled-components"

import { COLORS } from "../../constants"

import Icon from "../Icon"
import { IconWrapper } from "../Icon/Icon"
import VisuallyHidden from "../VisuallyHidden"

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
    return (
        <Wrapper>
            <Icon
                id={icon}
                size={size === "small" ? "16px" : "20px"}
                strokeWidth={size === "small" ? "1" : "2"}
            />
            <Input type="text" placeholder={placeholder} size={size} width={width}></Input>
        </Wrapper>
    )
}

const Wrapper = styled.span`
    display: block;
    position: relative;
    
    ${IconWrapper} {
        color: ${COLORS.gray700};
        position: absolute;
        top: 0;
        left: 0;
    }
`

const Input = styled.input`
    border: 0px;
    border-bottom: ${(props) => (props.size === "small" ? "1px" : "2px")} solid ${COLORS.black};
    font-size: ${(props) => (props.size === "small" ? "14px" : "18px")};
    font-weight: 700;
    width: ${(props) => (props.width ? props.width + "px" : "235px")};
    padding-left: ${(props) => (props.size === "small" ? "20px" : "24px")};
    color: ${COLORS.gray700};

    ::placeholder {
        font-weight: lighter;
    }

    :hover {
        color: ${COLORS.black};
    }
`

export default IconInput
