import React, { useState, useEffect } from "react"
import styled from "styled-components"

import { COLORS } from "../../constants"
import Icon from "../Icon"

// NOT RIGHT

const Select = ({ label, value, onChange, children }) => {
    const [selectWidth, setSelectWidth] = useState(40)

    useEffect(() => {
        const displayedValue = value
        setSelectWidth(20 + displayedValue.length * 30)
    }, [value])

    return (
        <>
            {label ? <SelectLabel htmlFor={label}>{label}</SelectLabel> : null}
            <SelectWrapper>
                <SelectElement value={value} onChange={onChange} name={label} width={`${selectWidth}px`}>
                    {children}
                </SelectElement>
                <SelectIcon id="chevron-down" size="24" strokeWidth={2} />
            </SelectWrapper>
        </>
    )
}

const SelectWrapper = styled.div`
    display: inline-block;
    position: relative;
`

const SelectLabel = styled.label`
    display: block;
`

const SelectIcon = styled(Icon)`
    position: absolute;
    top: 11px;
    right: 14px;

    svg {
        stroke: ${COLORS.gray700};
    }
`

const SelectElement = styled.select`
    appearance: none;
    width: ${(props) => props.width};
    padding: 12px 52px 12px 16px;
    height: 43px;
    font-size: 16px;
    color: ${COLORS.gray700};
    background-color: ${COLORS.transparentGray15};
    border-radius: 8px;
    border: 0px;

    :hover {
        color: ${COLORS.black};

        ${SelectIcon} {
            svg {
                stroke: ${COLORS.black};
            }
        }
    }
`

export default Select
