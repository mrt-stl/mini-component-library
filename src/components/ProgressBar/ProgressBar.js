/* eslint-disable no-unused-vars */
import React from "react"
import styled from "styled-components"

import { COLORS } from "../../constants"
import VisuallyHidden from "../VisuallyHidden"

const SIZES = {
    small: {
        "--height": "8px",
        "--radius": "4px",
        "--position": "0px",
    },
    medium: {
        "--height": "12px",
        "--radius": "4px",
        "--position": "0px",
    },
    large: {
        "--height": "24px",
        "--radius": "8px",
        "--position": "4px",
    },
}
const ProgressBar = ({ value, size }) => {
    return (
        <Progress
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin="0"
            aria-valuemax="100"
            style={SIZES[size]}
            value={value}
        ></Progress>
    )
}

const Progress = styled.div`
    width: 370px;
    height: var(--height);
    position: relative;
    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    border-radius: var(--radius);
    overflow: hidden;

    :after {
        content: "";
        width: calc(${(props) => props.value}% - (2 * var(--position)));
        height: calc(var(--height) - var(--position));
        display: block;
        position: absolute;
        top: var(--position);
        left: var(--position);
        background-color: ${COLORS.primary};
        border-radius: ${(props) => (props.value >= 98 ? "4px 4px 4px 4px" : "4px 0px 0px 4px")};
        transition: width 0.1s linear;
    }
`

export default ProgressBar
