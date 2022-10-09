import styled from "styled-components";
import randomColor from "randomcolor";

export const StatisticsBlock = styled.section`
  margin: 10px auto;
  background-color: ${p => p.theme.colors.backgroundBlock};
  border-radius: ${(p) => p.theme.radii.normal};
  width: 500px;`

export const Title = styled.h2`
  text-align: center;
  font-size: ${(p) => p.theme.fontSizes.l};
  padding: 15px`

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 15px;`

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: ${(p) => p.theme.radii.normal};
  color: ${p => p.theme.colors.black};
  background-color: ${randomColor()};`

  export const Label = styled.span`
  font-size: ${(p) => p.theme.fontSizes.m};
  padding: 10px;`
  
  export const Percentage = styled.span `
  font-size: ${(p) => p.theme.fontSizes.l};
  padding: 10px;`
  