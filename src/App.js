import SendemailProvider from "./contexte/SendemailContext";

import Home from './pages/Home';
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Form from "./pages/Form";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";



function App() {
  return (
      <SendemailProvider>
          <Navbar />
          <Home />
          <Form />
          <Skills />
          <Projects />
          <Footer />
      </SendemailProvider>
  );
}

export default App;
