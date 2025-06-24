import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CoursesPage from './components/CoursesPage';
import MockTestsPage from './components/MockTestsPage';
import LearningPathsPage from './components/LearningPathsPage';
import TipsPage from './components/TipsPage';
import ResourcesPage from './components/ResourcesPage';
import ProgressPage from './components/ProgressPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={setCurrentPage} />;
      case 'courses':
        return <CoursesPage />;
      case 'tests':
        return <MockTestsPage />;
      case 'paths':
        return <LearningPathsPage onPageChange={setCurrentPage} />;
      case 'tips':
        return <TipsPage />;
      case 'resources':
        return <ResourcesPage />;
      case 'progress':
        return <ProgressPage />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="transition-all duration-300 ease-in-out">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;