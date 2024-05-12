import './styles/app.scss';
import Header from './components/Header/Header';
// import Banner from './layout/Banner/Banner';
import HomePage from './pages/HomePage/HomePage';
// import Footer from './layout/Footer/Footer';

function App() {
      return (
            <div>
                  <Header />
                  <HomePage />
                  {/* <Footer /> */}
            </div>
      );
}

export default App;
