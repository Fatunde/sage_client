import './assets/style/style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import Character from "./pages/Character"
import MainLayout from "./component/mainLayout"
import { ContextProvider } from './component/context';

function App() {
  return (
       <Router>
       <ContextProvider>
       <Routes>
        <Route>
        <Route path="/" element={<MainLayout/>} >
       <Route path="/" element={<Home/>} />
       <Route path="/character" element={<Character/>} />
       </Route>
       </Route>
       </Routes>
       </ContextProvider>
       </Router>
  );
}

export default App;
