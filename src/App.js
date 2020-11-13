import React from "react";
import styled from "styled-components";
import TicTacToe from "./TicTacToe";
import "papercss/dist/paper.min.css";

function App() {
  return (
    <>
      <Main>
        <TicTacToe />
      </Main>
      <Footer>
        <FooterInner>
          Nama : Sufi Asti Utami
          Nim : 1119101719 {" "}
          <a href="https://github.com/sufikecil/mygame/">Github</a>
        </FooterInner>
      </Footer>
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 auto;
  color : red;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  flex: 0 0 auto;
  color : red;
`;

const FooterInner = styled.div`
  padding: 16px 0;
  color : red;
`;
export default App;
