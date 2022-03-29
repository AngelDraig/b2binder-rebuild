import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes';

const App = () => {
  return (
    <div >
        <BrowserRouter>
          <AppRouter/>
        </BrowserRouter>
    </div>
  );
}

export default App;