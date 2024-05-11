import React from "react";
import logo from "../../logo.svg";
import "../../App.css";
import { App, AppHeader, AppLogo, LogoImg, RepoLink } from "../../data/styles";

const Homepage: React.FC = () => {
  return (
    <App>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <p>Тестовое задание по Frontend для ЭР-Телеком.</p>
        <RepoLink
          href="https://github.com/flathead"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoImg
            src="/github-logo.png"
            alt="GitHub logo"
            width="30"
            height="30"
          />
          GitHub
        </RepoLink>
      </AppHeader>
    </App>
  );
};

export default Homepage;
