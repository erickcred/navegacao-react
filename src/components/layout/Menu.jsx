import { NavLink as Link } from 'react-router-dom'

import './Menu.css'

const Menu = (props) => {
    return (
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/param">Param</Link>
                    </li>
                    <li>
                        <Link to="/a1">Outro2</Link>
                    </li>
                    <li>
                        <Link to="a2">Outro3</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Menu