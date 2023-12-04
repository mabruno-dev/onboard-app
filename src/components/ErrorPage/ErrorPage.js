import react from "react";
import style from "./ErrorPage.module.css";
import favicon from "./favicon.png";

function ErrorPage() {
  return (
    <div className={style.ErrorStyle}>
      <h1>ERRO URL INVÁLIDA</h1>
      <p>
        Caminho URL inválido. Por Favor volte para a página inicial ou login
      </p>
      <img src={favicon} alt="onboardingIcon" />
    </div>
  );
}

export default ErrorPage;
