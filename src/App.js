import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './routes/routes';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

function App() {

  return (
    <div className="App">
      <Toaster toastOptions={{ success: { duration: 6000 }, error: { duration: 7000 } }}></Toaster>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
