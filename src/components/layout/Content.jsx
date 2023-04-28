import { Routes, Route } from 'react-router-dom'

import './Content.css'

import Home from '../../views/exemples/Home'
import About from '../../views/exemples/About'
import Param from '../../views/exemples/Param'
import NotFound from '../../views/exemples/NotFound'

const Content = () => {
    return (
        <main className="Content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/param" element={<Param />} />
                <Route path="/param/:nome" element={<Param />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    )
}

export default Content