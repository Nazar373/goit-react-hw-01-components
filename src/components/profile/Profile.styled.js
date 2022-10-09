import styled from "styled-components";

export const ProfileSection = styled.div`
  margin: 0 auto;
  background-color: ${(p) => p.theme.colors.backgroundBlock};
  border-radius: ${(p) => p.theme.radii.normal};
  width: 500px;`

export const DescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;`

export const Image = styled.img`
  border-radius: ${(p) => p.theme.radii.round};
  background-color: ${(p) => p.theme.colors.backgroundImage};
  width: 250px;
  margin-top: 30px;
  margin-bottom: 30px`

export const Description = styled.p`
  font-size: ${(p) => p.theme.fontSizes.l};
  color: ${(p) => p.theme.colors.black};
  margin: 7px auto;`

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;`

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(p) => p.theme.colors.text};
  margin 10px;
  border-radius: ${(p) => p.theme.radii.normal};
  width: 150px;
  background-color: ${(p) => p.theme.colors.backgroundItem};
  `

export const Label = styled.span`
font-size: ${(p) => p.theme.fontSizes.m};
padding: 10px;`

export const Quantity = styled.span `
font-size: ${(p) => p.theme.fontSizes.l};
padding: 10px;`

