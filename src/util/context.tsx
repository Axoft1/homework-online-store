import React, { createContext, useEffect, useState } from "react";
import { ICatalog } from "../models/ICatalog";
import catalogJson from "../api/catalog.json";

export interface AContext {
  addCatalogAdmin?: (product: ICatalog) => void;
  setButtonMobileFilter?: (t: boolean) => void;
  deletCatalogAdmin?: (id: number) => void;
  addBasket?: (product: ICatalog) => void;
  appendedBasket?: (id: number) => void;
  setAdminPanel?: (t: boolean) => void;
  removeBasket?: (id: number) => void;
  deletBasket?: (id: number) => void;
  // eslint-disable-next-line no-empty-pattern
  setCatalog?: ([]) => void;
  // eslint-disable-next-line no-empty-pattern
  setBasket?: ([]) => void;
  buttonMobileFilter?: boolean;
  catalogAdmin?: ICatalog[];
  sumProducts?: number;
  catalog?: ICatalog[];
  basket?: ICatalog[];
  loading?: boolean;
}
interface ContextProps {
  children: React.ReactNode;
}
export const CustomContext = createContext<AContext>({});

export const Context = (props: ContextProps) => {
  const [basket, setBasket] = useState<ICatalog[]>([]);
  const [sumProducts, setSumProducts] = useState(0);

  const [catalog, setCatalog] = useState<ICatalog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [catalogAdmin, setCatalogAdmin] = useState<ICatalog[]>([]);
  const [buttonMobileFilter, setButtonMobileFilter] = useState<boolean>(false);

  const [adminPanel, setAdminPanel] = useState<boolean>(false);

  const addCatalogAdmin = (product: ICatalog): void => {
    let check = catalogAdmin.findIndex(
      (item): boolean => item.barcode === product.barcode
    );
    if (check >= 0) {
      alert("Тавар с таким штрихкодом есть в каталоге");
      return;
    }
    setCatalogAdmin((products): ICatalog[] => [...products, { ...product }]);
  };

  const deletCatalogAdmin = (id: number): void => {
    setCatalogAdmin((prev): ICatalog[] =>
      prev.filter((item): boolean => item.id !== id)
    );
  };

  const addBasket = (product: ICatalog): void => {
    let check = basket.findIndex(
      (item): boolean => item.barcode === product.barcode
    );

    if (check >= 0) {
      setBasket((prev): ICatalog[] =>
        prev.map((item): ICatalog => {
          if (item.barcode === product.barcode) {
            return { ...item, count: item.count! + 1 };
          }
          return item;
        })
      );
      return;
    }
    setBasket((basket): ICatalog[] => [...basket, { ...product, count: 1 }]);
  };

  const appendedBasket = (id: number): void => {
    setBasket((prev): ICatalog[] =>
      prev.map((item): ICatalog => {
        if (item.id === id) {
          return { ...item, count: item.count! + 1 };
        }
        return item;
      })
    );
  };

  const removeBasket = (id: number): void => {
    let check = basket.find((item): boolean => item.id === id);
    if (check?.count === 1) {
      setBasket((prev): ICatalog[] =>
        prev.filter((item): boolean => item.id !== id)
      );
    } else {
      setBasket((prev): ICatalog[] =>
        prev.map((item): ICatalog => {
          if (item.id === id) {
            return { ...item, count: item.count! - 1 };
          }
          return item;
        })
      );
    }
  };
  const deletBasket = (id: number): void => {
    setBasket((prev): ICatalog[] => prev.filter((item) => item.id !== id));
  };

  useEffect((): void => {
    if (localStorage.getItem("catalogAdmin")?.length! > 10) {
      setCatalog(JSON.parse(localStorage.getItem("catalogAdmin")!));
      setLoading(false);
    } else {
      setCatalog(catalogJson as ICatalog[]);
      setLoading(false);
      setAdminPanel(false);
    }
  }, [adminPanel]);

  useEffect((): void => {
    if (typeof localStorage.getItem("basket")) {
      setBasket(JSON.parse(localStorage.getItem("basket")!));
    }
    if (typeof localStorage.getItem("catalogAdmin")) {
      setCatalogAdmin(JSON.parse(localStorage.getItem("catalogAdmin")!));
    }
  }, []);

  useEffect((): void => {
    if (basket) {
      localStorage.setItem("basket", JSON.stringify(basket));
    }
  }, [basket]);

  useEffect((): void => {
    if (catalogAdmin) {
      localStorage.setItem("catalogAdmin", JSON.stringify(catalogAdmin));
    }
  }, [catalogAdmin]);

  useEffect((): void => {
    setSumProducts(
      basket.reduce(
        (accum: number, item: ICatalog): number =>
          accum + item.price * item.count,
        0
      )
    );
  }, [basket]);

  const value: AContext = {
    basket,
    loading,
    catalog,
    sumProducts,
    catalogAdmin,
    buttonMobileFilter,
    setBasket,
    addBasket,
    setCatalog,
    deletBasket,
    removeBasket,
    setAdminPanel,
    appendedBasket,
    addCatalogAdmin,
    deletCatalogAdmin,
    setButtonMobileFilter,
  };

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
};
