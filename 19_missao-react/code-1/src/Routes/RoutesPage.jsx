import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from "../Pages/HomePage/HomePage";
import FrontendPage from "../Pages/FrontendPage/FrontendPage";
import BackendPage from "../Pages/BackendPage/BackendPage";

const RoutesPage = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/front-end' element={<FrontendPage />} />
            <Route path='/back-end' element={<BackendPage />} />
        </Routes>
    </BrowserRouter>
);

export default RoutesPage;