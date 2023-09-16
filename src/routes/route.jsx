import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../pages/home/Home';
import Menu from '../pages/menu/Menu';
import Blog from '../pages/blog/Blog';
import Team from '../pages/team/Team';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="menu" element={<Team />} />
        <Route path="blog" element={< Blog/>} />
      </Route>
    </Route>
  )
);
