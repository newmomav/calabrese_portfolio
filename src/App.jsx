import { Link } from 'react-scroll';
import LandingPage from './pages/LandingPage';
import Info from './pages/Info';

function App() {
  // const handleInfoClick = () => {
  // infoRef.current.scrollIntoView({ behavior: 'smooth' });
  // };
  return (
    <>
      <LandingPage>
        <button onClick={handleInfoClick}>Info</button>
      </LandingPage>

      <Info />
    </>
  );
}

export default App;
