import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import StudentScreen from './StudentsScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/all" element={<StudentScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
