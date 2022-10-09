import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  border: 1px solid darkGreen;
  border-radius: ${(p) => p.theme.radii.normal};
  align-items: center;
  margin: 10px;
  padding: 10px;
  justify-content: space-between`

export const OnlineStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: ${(p) => p.theme.radii.round};
  background-color: ${p => p.theme.colors.onlineStatus};`

export const OfflineStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.offlineStatus};`

export const Name = styled.p`
 font-size: ${p => p.theme.fontSizes.l};`