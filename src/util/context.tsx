import React, { createContext, useEffect, useState } from "react";
import { ICatalog } from "../models/ICatalog";

export interface AContext {
  addCatalogAdmin?: (product: ICatalog) => void;
  setButtonMobileFilter?: (t: boolean) => void;
  deletCatalogAdmin?: (id: number) => void;
  addBasket?: (product: ICatalog) => void;
  appendedBasket?: (id: number) => void;
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

  const addCatalogAdmin = (product: ICatalog) => {
    let check = catalogAdmin.findIndex(
      (item) => item.barcode === product.barcode
    );
    if (check >= 0) {      
      return;
    }
    setCatalogAdmin((basket): ICatalog[] => [
      ...basket,
      { ...product, count: 1, id: Math.floor(Math.random() * 1000) },
    ]);
  };
  const deletCatalogAdmin = (id: number) => {
    setCatalogAdmin((prev) => prev.filter((item) => item.id !== id));
  };

  const addBasket = (product: ICatalog) => {
    let check = basket.findIndex((item) => item.barcode === product.barcode);

    if (check >= 0) {
      setBasket((prev) =>
        prev.map((item) => {
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

  const appendedBasket = (id: number) => {
    setBasket((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, count: item.count! + 1 };
        }
        return item;
      })
    );
  };

  const removeBasket = (id: number) => {
    
    let check = basket.find((item) => item.id === id);
    if (check?.count === 1) {
      setBasket((prev) => prev.filter((item) => item.id !== id));
    } else {
      setBasket((prev) =>
        prev.map((item) => {
          if (item.id === id) {
            return { ...item, count: item.count! - 1 };
          }
          return item;
        })
      );
    }
  };
  const deletBasket = (id: number) => {
    setBasket((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    
      if (localStorage.getItem("catalogAdmin")?.length! >10) {
        setCatalog(JSON.parse(localStorage.getItem("catalogAdmin")!));
        setLoading(false);
      } 
      else {
        try {
          
          fetch("/catalog.json")
            .then((response) => response.json())
            .then((data) => {
              setCatalog(data);
              setLoading(false);
            });
        } catch (error) {
          console.error("Ошибка:", error);
        }
      }
  }, []);

  useEffect(() => {
    if (typeof localStorage.getItem("basket")) {
      setBasket(JSON.parse(localStorage.getItem("basket")!));
    }
    if (typeof localStorage.getItem("catalogAdmin")) {
      setCatalogAdmin(JSON.parse(localStorage.getItem("catalogAdmin")!));
    }
    
  }, []);

  useEffect(() => {
    if (basket) {
      localStorage.setItem("basket", JSON.stringify(basket));
    }
  }, [basket]);

  useEffect(() => {
    if (catalogAdmin) {
      localStorage.setItem("catalogAdmin", JSON.stringify(catalogAdmin));
    }
  }, [catalogAdmin]);

  useEffect(() => {
    setSumProducts(
      basket.reduce(
        (accum: any, item: any): any => accum + item.count * item.price,
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
    // buttonDisabled,
    buttonMobileFilter,
    setBasket,
    addBasket,
    setCatalog,
    deletBasket,
    removeBasket,
    appendedBasket,
    addCatalogAdmin,
    deletCatalogAdmin,
    // setButtonDisabled,
    setButtonMobileFilter,
  };

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
};
