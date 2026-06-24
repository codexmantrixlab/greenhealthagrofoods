import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Profile from './components/Profile';
import Notification from './components/Notification';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Ingredients from './pages/Ingredients';

const PageContent = () => {
  const { activePage } = useApp();

  return (
    <main>
      {activePage === 'home' && <Home />}
      {activePage === 'products' && <Products />}
      {activePage === 'about' && <About />}
      {activePage === 'ingredients' && <Ingredients />}
    </main>
  );
};

const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <PageContent />
      </div>
      <Footer />
      <Cart />
      <Profile />
      <Notification />
    </div>
  );
};

const App = () => {
  return (
    <AppProvider>
      <AppLayout />
    </AppProvider>
  );
};

export default App;
