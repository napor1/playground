import { Outlet } from 'react-router-dom';
import './App.css';
import { Button } from '@/components/ui/button';

function App() {
  return (
    <div className="p-10">
      <Outlet />
    </div>
  );
}

export default App;
