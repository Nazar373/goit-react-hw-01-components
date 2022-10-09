import styled from "styled-components";

export const Table = styled.table`
  width: 500px;
  margin: 0 auto;
  border-radius: ${(p) => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.backgroundBlock};
  text-align: center;`

export const Thead = styled.thead`
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.backgroundItem};
  height: 40px;`

export const Element = styled.tr`
  height: 25px;
  border: 1px solid ${p => p.theme.colors.backgroundBlock};
  border-radius: ${(p) => p.theme.radii.normal};`