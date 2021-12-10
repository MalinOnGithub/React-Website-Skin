import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { Home, AboutUs, Treatments, Products, Booking} from './components/pages';
import Layout from './components/layout/Layout';


export default function App() {
    return (
        <div>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/aboutUs" element={<AboutUs />}/>
                    <Route path="/treatments" element={<Treatments />}/>
                    <Route path="/products" element={<Products />}/>
                    <Route path="/booking" element={<Booking/>}/>
                </Routes>
            </Layout>
        </div>
    )
}
