import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'
import Comment from './Pages/Comment'
import Counter from './Pages/Counter'
import Index from './Pages/Index'
import Login from './Pages/Login'
import Header from './Components/common/Header'
import Footer from './Components/common/Footer'
import Container from './Components/common/Container'

function App() {
  

  return (
    <>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path="/" index element={<Index />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Counter" element={< Counter />} />
            <Route path="/Comment" element={ <Comment />} />
          </Routes>
        </Container>
      </Router>  
      <Footer>
        Copyright All right &copy; reserved
      </Footer>
    </>
  );
}

export default App;
