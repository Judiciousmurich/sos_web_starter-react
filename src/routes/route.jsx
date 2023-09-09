import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../layouts/Layout';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="" element={<Layout />}>
        <Route path="/" element={<Home/>} />
      </Route>
    </Route>
  )
);
