import React from 'react';
import { Header } from './components/Header';
import { Search } from './components/Search';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <div>
      <Header/>
      <Search/>
      <GlobalStyle />
    </div>
  );
}

export default App;
