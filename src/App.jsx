import './reset.css';
import './App.css';
import '/public/fonts/stylesheet.css';
import Header from './components/layout/Header/Header';
import Hero from './components/layout/Hero/Hero';
import Types from './components/layout/Types/Types';
import FreeWrap from './components/layout/FreeWrap/FreeWrap';
import Gallery from './components/layout/Gallery/Gallery';
import Equipment from './components/layout/Equipment/Equipment';
import Contacts from './components/layout/Contacts/Contacts';
import Footer from './components/layout/Footer/Footer';
import CallModal from './components/layout/CallModal/CallModal';
import useModalStore from './store/modalStore';

const App = () => {
  return (
    <>
      <CallModal />
      <Header />
      <Hero />
      <Types />
      <FreeWrap />
      <Gallery />
      <Equipment />
      <Contacts />
      <Footer />
    </>
  );
};

export default App;
