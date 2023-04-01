import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { basketRoutes,catalogRoutes, RouteNames } from "../router";

/**
 * Логика по маршрутизации
 * @returns
 */
const AppRouter = () => {

  return (
    <Routes>
      {catalogRoutes.map((route) => (
        <Route path={route.path} element={<route.element />} key={route.path} />
      ))}
      {basketRoutes.map((route) => (
        <Route path={route.path} element={<route.element />} key={route.path} />
      ))}
      
      <Route path="*" element={<Navigate to={RouteNames.CATALOG} />} />
    </Routes>
  );
};

export default AppRouter;
