import styled from "styled-components";

export const Header = styled.header`
  height: 100vh;
  position: fixed;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  background: #333232;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  a {
    color: #fff;
    text-decoration: none;
  }
  @media only screen and (max-width: 600px) {
    position: relative;
    top: 0;
    height: 150px;
  }
`;

export const Content = styled.ul`
  height: 25vh;
  // background: green;
  padding-left: 15px;
  cursor: pointer;
  @media only screen and (max-width: 1024px) {
    height: 18vh;
  }
`;

export const NavSection = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 22px;
  @media only screen and (max-width: 600px) {
    flex-direction: row;
  }
`;

export const Logo = styled.h1`
  font-size: 30px;
  width: 80%;
  padding-bottom: 10px;
  @media only screen and (max-width: 1024px) {
    width: 60%;
    font-size: 25px;
  }
  @media only screen and (max-width: 834px) {
    width: 53%;
  }
`;

export const SmIcons = styled.div``;
