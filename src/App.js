import './App.css';
import Header from './components/Header';
import CampsitesList from './features/campsites/CampsitesList';
import { CAMPSITES } from './app/shared/CAMPSITES';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <div>
          <CampsitesList/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
