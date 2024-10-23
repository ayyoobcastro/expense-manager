import AppBase from './app-base/app-base';
import './style/main.scss';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <AppBase/>
    </BrowserRouter>
  </>
  )
}

export default App