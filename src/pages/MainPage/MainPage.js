import './MainPage.css';
import { Main } from '../../components/Main/Main';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Cards } from '../../components/Cards/Cards';

export function MainPage() {
  return (
    <div className='mainPage'>
      <Main />
      <Sidebar />
      <Cards />
    </div>
  );
}
