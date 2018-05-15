import React, { Component } from 'react';
import IndexPage from './pages/IndexPage';
import AboutPage from './pages/AboutPage';
import NarratorsPage from './pages/NarratorsPage';
import ExhibitPage from './pages/ExhibitPage';
import ConversationsPage from './pages/ConversationsPage';
import PrintsPage from './pages/PrintsPage';
import ArchivePage from './pages/ArchivePage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <IndexPage />
      <AboutPage />
      <NarratorsPage />
      <ExhibitPage />
      <ConversationsPage />
      <PrintsPage />
      <ArchivePage />
      </div>
    );
  }
}

export default App;
