/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--padding": 0,
    "--height": 8 + "px",
    "--width": 370 + "px",
  },
  medium: {
    "--padding": 0,
    "--height": 12 + "px",
    "--width": 370 + "px",
  },
  large: {
    "--padding": 4 + "px",
    "--height": 16 + "px",
    "--width": 370 + "px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return (
    <ProgressBarWrapper
      style={styles}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar value={value} style={styles} />
      </BarWrapper>
    </ProgressBarWrapper>
  );
};

const ProgressBarWrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  width: var(--width);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  border-radius: 4px;
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: ${(props) => props.value}%;
  height: var(--height);
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
