import { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* <Navbar /> */}
      <Navbar/>
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Task Manager App</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg mb-4"></p>
            <div className="flex items-center gap-4 my-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Add Task</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Delete Task</button>
            </div>

          </div>
        </div>
        
        {/* API data display will go here */}
        <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">API Data</h2>
        
        </div>
      </main>

      {/* Footer component will go here */}
      <Footer />
    </div>
  );
}

export default App; 