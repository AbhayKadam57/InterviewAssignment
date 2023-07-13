import { css } from "styled-components";

export const Tablet = (props) => {
  return css`
    @media screen and (max-width: 768px) {
      ${props}
    }
  `;
};

export const Mobile = (props) => {
  return css`
    @media screen and (max-width: 456px) {
      ${props}
    }
  `;
};
