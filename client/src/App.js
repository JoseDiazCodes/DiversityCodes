import './App.css';

import { useApi } from './hooks/use-api';
import AdminComponent from './AdminComponent';

function App() {
  const { response } = useApi();

  return (
    <div className="App">
      <header className="App-header">
        <AdminComponent />
      </header>
    </div>
  );
}

export default App;
