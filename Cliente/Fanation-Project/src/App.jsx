import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard' // Importe o Dashboard caso não tenha ainda
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const App = () => {
    return (
        <Router>
            <Header/>
            <main>
                <Routes>
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/Login" element={<Login />} />
                </Routes>
            </main>
            <Footer/>
        </Router>
    );
};

export default App