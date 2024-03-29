import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: ${({ $isBigSize }) => ($isBigSize ? "center" : "start")};
  margin-top: 0.5rem;
  gap: 1rem;

  svg {
    font-size: ${({ $isBigSize }) => ($isBigSize ? "2.2rem" : "1.4rem")};
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;