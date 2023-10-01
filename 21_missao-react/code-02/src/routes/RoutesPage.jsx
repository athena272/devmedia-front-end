import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Contact from '../pages/Contact/Contact';

const RoutesPage = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/contact' element={<Contact />} />
        </Routes>
    </BrowserRouter>
)

export default RoutesPage;