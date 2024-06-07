import logo from './logo.svg';
import './App.css';
import AddItem from './components/AddItem';
import SearchItem from './components/SearchItem';
import DeleteItem from './components/DeleteItem';
import ViewAllItems from './components/ViewAllItems';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddItem />} />
        <Route path="/Search" element={<SearchItem />} />
        <Route path="/Delete" element={<DeleteItem />} />
        <Route path="/ViewAll" element={<ViewAllItems />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
