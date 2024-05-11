import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navigation = styled.nav<{ isHidden: boolean }>`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #f8f9fa;
  padding: 20px 40px;
  transform: translateY(${(props) => (props.isHidden ? "-100%" : "0")});
  transition: transform 0.3s ease-in-out;
  @media (max-width: 768px) {
    justify-content: center;
  }
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    height: 10px;
    background-color: #c1c1c1;
  }
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const StyledLink = styled(NavLink)`
  margin: 0 10px;
  text-decoration: none;
  color: #343a40;
  font-size: 1.25rem;

  &.active {
    text-decoration: underline;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 4rem 20px 2rem 20px;
`;

const ProductUl = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 4vw;
  padding: 20px;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

const Card = styled.div<{ isSale: boolean; isSoldOut: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid ${(props) => (props.isSale ? "#ff0" : "#222")};
  border-radius: 10px;
  padding: 20px;
  width: 100%;
`;

const Button = styled.button`
  background-color: #008cba;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
`;

const Modal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`;

const App = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: calc(100vh - 67px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  padding: 2rem;
`;

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }
`;

const LogoImg = styled.img`
  border-radius: 100%;
  border: 2px solid #ddd;
`;

const RepoLink = styled.a`
  color: #61dafb;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

export {
  Navigation,
  List,
  StyledLink,
  Title,
  ProductUl,
  Card,
  Button,
  Modal,
  ModalContent,
  App,
  AppHeader,
  AppLogo,
  LogoImg,
  RepoLink,
};
