import { BrowserRouter } from 'react-router-dom';
import App from './App';

function Root() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <App />
    </BrowserRouter>
  );
}

export default Root;
