import './App.css';
import { Header } from '../Header/Header';
import { MainPage } from '../../pages/MainPage/MainPage';
import { Footer } from '../Footer/Footer';

function App() {
  return (
    <div className='page'>
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
