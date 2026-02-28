

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
    background-color: ${props => props.btntype === 'primary' ? '#007bff' : '#6c757d'};
    color: white;
    cursor: pointer;
  `;

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Button btntype='primary'>Primary Button</Button>
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