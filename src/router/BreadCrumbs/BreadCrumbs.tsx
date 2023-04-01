import React, { useContext } from "react";
import { Typography, Breadcrumbs, Link } from "@material-ui/core/";
import { useLocation, useNavigate } from "react-router-dom";
import { AContext, CustomContext } from "../../util/context";

const SimpleBreadcrumbs = (props: any) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { catalog } = useContext<AContext>(CustomContext);

  const pathNameSplit = pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb" >
      <Typography color="inherit">Главная</Typography>
      {pathNameSplit.map((name, index) => {
        const routeTo = `/${pathNameSplit.slice(0, index + 1).join("/")}`;
        const isLast: boolean = index === pathNameSplit.length - 1;
        // console.log(catalog);
        
        let product = catalog?.find((item) => item.barcode === name);

        if (name === product?.barcode) {
          name = product.name;
        }
        if (name === "catalog") {
          name = "Каталог";
        } else if (name === "basket") {
          name = "Корзина";
        } else if (name === "basket") {
          name = "Корзина";
        } else if (name === "100013239403") {
          name = "1";
        }

        return isLast ? (
          <Typography key={name}>{name}</Typography>
        ) : (
          <Link style={{cursor: 'pointer'}} key={name} onClick={() => navigate(routeTo)} color="inherit">
            {name}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};
export default SimpleBreadcrumbs;
