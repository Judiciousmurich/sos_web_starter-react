import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../pages/home/Home';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="" element={<Layout />}>
        <Route path="/" element={<Home/>} />
      </Route>
    </Route>
  )
);
