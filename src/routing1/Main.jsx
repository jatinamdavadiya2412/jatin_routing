import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import Home from './Home'
import Product from './Product'
function My(){
    return(
    <div>
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home      </Link></li>
                <li><Link to="/Product">Product   </Link></li>
            </ul>
        </div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Product' element={<Product/>}/>
        </Routes>
    </Router>
    </div>
    )
}
export default My