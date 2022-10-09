import styled from "styled-components";

export const FriendInventory = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: lightGreen;
  border-radius: ${(p) => p.theme.radii.normal};
  margin: 10px auto;
  width: 500px;
  padding: 0;`