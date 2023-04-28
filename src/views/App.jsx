import { BrowserRouter } from 'react-router-dom'

import './App.css'
import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Menu />
                <Content />
            </div>
        </BrowserRouter>
    )
}

export default App