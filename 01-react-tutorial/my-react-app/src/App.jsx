

import './App.css';
import buttonStyles from './Button.module.css';
import headerStyles from './BlueHeader.module.css';
import styled from 'styled-components';
import { Suspense, lazy } from "react";
const Header = lazy(() => import('./Header'));
const Content = lazy(() => import('./Content'));
const SideBar = lazy(() => import('./SideBar'));
const Footer = lazy(() => import('./Footer'));


function App() {

  const MyHeader = styled.h1`
    padding: 10px 20px;
    background-color: salmon;
    color: white;
  `;

  const Button = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
  `;

  const PrimaryButton = styled(Button)`
    background-color: #007bff;
  `;

  const SuccessButton = styled(Button)`
    background-color: #28a745;
  `;

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <PrimaryButton>Primary</PrimaryButton>
        <SuccessButton>Success</SuccessButton>
        <MyHeader>Welcome!</MyHeader>
        <h1 className='myheader'>My Header</h1>
        <p className={headerStyles.myparagraph}>My Paragraph</p>
        <Header />
        <div>
          <SideBar />
          <Content />
          <button type='button' className={`${buttonStyles.primary}`}>Primary Button</button>
          <button type='button' className={`${buttonStyles.secondary}`}>Secondary Button</button>
        </div>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;