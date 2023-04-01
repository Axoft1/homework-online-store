import React from "react";
import Basket from "../pages/basket/Basket";
import Catalog from "../pages/catalog/Catalog";
import Products from "../pages/product/Product";

export interface IRoute {
  path: string;
  element: React.ComponentType;
}

export enum RouteNames {
  CATALOG = "/catalog",
  BASKET = "/basket",
  PRODUCT = "/catalog/:id",
}

export const catalogRoutes: IRoute[] = [
  { path: RouteNames.CATALOG, element: Catalog },
  { path: RouteNames.PRODUCT, element: Products },
];

export const basketRoutes: IRoute[] = [
  { path: RouteNames.BASKET, element: Basket },
]

