import CardPage from "./pages/CardPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/card" element={<CardPage />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;