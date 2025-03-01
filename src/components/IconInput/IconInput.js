import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const sizes = {
  small: {
    "--font-size": 14 / 16 + "rem",
    "--border-weight": 1 + "px",
    "--icon-size": 16 + "px",
    "--label-padding-left": 24 + "px",
    "--height": 24 + "px",
    "--label-height": 16 + "px",
  },
  large: {
    "--font-size": 18 / 16 + "rem",
    "--border-weight": 2 + "px",
    "--icon-size": 24 + "px",
    "--label-padding-left": 36 + "px",
    "--height": 36 + "px",
    "--label-height": 21 + "px",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Wrapper style={{ "--width": width + "px", ...sizes[size] }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper id={icon} style={sizes[size]}>
        <Icon id={icon} size={sizes[size]["--icon-size"]} />
      </IconWrapper>
      <InputWrapper
        placeholder={placeholder}
        style={{ "--width": width + "px", ...sizes[size] }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  height: var(--icon-size);
  top: 0;
  bottom: 0;
  margin: auto 0;
`;

const InputWrapper = styled.input`
  border: none;
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  padding-left: var(--label-padding-left);
  color: inherit;
  font-weight: 700;
  border-bottom: var(--border-weight) solid ${COLORS.black};
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
