import React, {Suspense} from "react"
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom"

const Home = React.lazy( ()=> import('./components/Home') )
const FakultasList = React.lazy( ()=> import('./components/Fakultas/List') )
const ProdiList = React.lazy( ()=> import('./components/Prodi/List') )
const FakultasCreate = React.lazy(() => import("./components/Fakultas/Create"));
const FakultasEdit = React.lazy(() => import("./components/Fakultas/Edit"));

function App() { 
  
  return (
    <Router>
      {/* navbar */}
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">React CRUD</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/fakultas">Fakultas</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/prodi">Prodi</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
      <Suspense fallback={<div>Loading.....</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fakultas" element={<FakultasList />} />
          <Route path="/prodi" element={<ProdiList />} />
          <Route path="/fakultas/create" element={<FakultasCreate />} />
          <Route path="/fakultas/edit/:id" element={<FakultasEdit />} />
        </Routes>
      </Suspense>
      </div>
    </Router>
  )
}

export default App
