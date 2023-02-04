import {Route, Routes} from 'react-router-dom'
import Deepak from './components/Deepak'
import Header from './components/Header'
import Ganesh from './components/Ganesh'
import Ashoke from './components/Ashoke'
import Naresh from './components/Naresh'

const App =() => (
  <>
  <Header />
   <Routes>
  <Route exact path="/" element={<Deepak />} />
  <Route exact path="/ganesh" element={<Ganesh />} />
  <Route exact path="/ashoke" element={<Ashoke />} />
  <Route exact path="/naresh" element={<Naresh />} />
  </Routes> 
  </>
)
export default App