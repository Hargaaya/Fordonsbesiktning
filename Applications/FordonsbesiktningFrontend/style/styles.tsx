import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 10px;
  animation: down 300ms ease-in-out;
  transform-origin: top center;

  @keyframes down {
    0% {
      transform: translateY(-1%);
    }

    100% {
      transform: translateY(0);
    }
  }
`;

export const Header = styled.h2`
  background-image: var(--text-fade);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.2em;
  user-select: none;
`;

export const Bolden = styled.b`
  font-weight: 500;
`;

export const ItemWrapper = styled.p`
  margin-bottom: 4px;
`;
