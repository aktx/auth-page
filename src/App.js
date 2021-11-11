import './App.css';
import Auth from './components/Auth/Auth';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Auth/>
      <Footer/>
    </div>
  );
}

export default App;
