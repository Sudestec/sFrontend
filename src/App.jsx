import Nav from './Nav';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { PocketProvider } from './PocketContext';

function App() {

  return (
    <PocketProvider>
      <>
        <Nav/>
        <Header/>
        <Main/>
        <Footer/>
      </>
    </PocketProvider>
  );
}

export default App;
