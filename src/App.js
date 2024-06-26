import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddSubscriber from './components/AddSubscriber';
import Deletesubscriber from './components/Deletesubscriber';
import Searchsubscriber from './components/Searchsubscriber';
import Viewsubscribers from './components/Viewsubscribers';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/'element={<AddSubscriber/>}/>
    <Route path='/delete'element={<Deletesubscriber/>}/>
    <Route path='/search'element={<Searchsubscriber/>}/>
    <Route path='/view'element={<Viewsubscribers/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
