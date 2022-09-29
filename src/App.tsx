import React from 'react';

import { HashRouter } from 'react-router-dom';

import s from './App.module.scss';
import { Header } from './components/header/Header';
import { RoutesApp } from './components/routes/RoutesApp';

export const App = () => {
  return (
    <div className={s.appBlock}>
      <HashRouter>
        <Header />
        <div className={s.content}>
          <RoutesApp />
        </div>
      </HashRouter>
    </div>
  );
};
