import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
import Contact from './contact'
import Nopage from'./Nopage'
function My(){
    return(
    <div>
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home      </Link></li>
                <li><Link to="/Shop">Shop    </Link></li>
                <li><Link to="/Contact">Contact   </Link></li>
            </ul>
        </div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Shop' element={<Shop/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Nopage' element={<Nopage/>}/>
        </Routes>
    </Router>
    </div>
    )
}
export default My