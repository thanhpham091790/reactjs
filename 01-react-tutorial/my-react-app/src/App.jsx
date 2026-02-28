

import './App.css';
import { Suspense, lazy } from "react";
const Header = lazy(() => import('./Header'));
const Content = lazy(() => import('./Content'));
const SideBar = lazy(() => import('./SideBar'));
const Footer = lazy(() => import('./Footer'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <div>
          <SideBar />
          <Content />
        </div>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;