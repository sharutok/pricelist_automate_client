
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Page from './Page';
import ErrorPage from './ErrorPage';
import Demo from "./Demo";



function RoutePath() {
  return (
      <Router>
          <Routes>
              <Route path='/price-list/:pname' element={<Page />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='demo' element={<Demo/>}/>
          </Routes>
    </Router>
  )
}

export default RoutePath