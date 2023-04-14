import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../contexts/ProductContext";
import "../style/product.css";
import { Link, useSearchParams } from "react-router-dom";
import { LIMIT } from "../utils/const";
import { Badge, Box, IconButton, Pagination } from "@mui/material";
import { useAuthContext } from "../contexts/AuthContext";
import { useCartContext } from "../contexts/CartContext";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const ProductCard = () => {
  const { products, getProducts, deleteProduct, pageTotalCount } =
    useContext(productContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const { isAdmin } = useAuthContext();
  const {
    addProductToCart,
    deleteProductFromCart,
    isAlreadyInCart,
    cartLength,
    getCart,
  } = useCartContext();

  const [category, setCategory] = useState(
    searchParams.get("category") || "all"
  );

  const [inputVal, setInputVal] = useState(
    searchParams.get("title_like") || ""
  );

  const [page, setPage] = useState(+searchParams.get("_page") || 1);
  const [firstMount, setFirstMount] = useState(true);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  React.useEffect(() => {
    getCart();
  }, []);

  useEffect(() => {
    if (firstMount) {
      setFirstMount(false);
      return;
    }
    if (category === "all") {
      setSearchParams({
        title_like: inputVal,
        _limit: LIMIT,
        _page: 1,
      });
    } else {
      setSearchParams({
        title_like: inputVal,
        category: category,
        _limit: LIMIT,
        _page: 1,
      });
    }
    setPage(1);
  }, [inputVal, category]);

  useEffect(() => {
    if (category === "all") {
      setSearchParams({
        title_like: inputVal,
        _limit: LIMIT,
        _page: page,
      });
    } else {
      setSearchParams({
        title_like: inputVal,
        category: category,
        _limit: LIMIT,
        _page: page,
      });
    }
  }, [page]);

  return (
    <div className="mainProdCont">
      <div className="qweBucket">
        <Box sx={{ flexGrow: 0 }}>
          <IconButton component={Link} to="/cart" size="large" color="inherit">
            <Badge badgeContent={cartLength} color="error">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>
        </Box>
      </div>
      <div className="group">
        <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input
          onChange={(e) => setInputVal(e.target.value)}
          value={inputVal}
          name="search"
          placeholder="Search"
          type="search"
          className="input1"
        />
      </div>

      <select
        className="selectMenu"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
        id="categorySelect"
        label="Category"
      >
        <option className="optionCat">Выберите категорию</option>
        <option className="optionCat" value={"all"}>
          All
        </option>
        <option className="optionCat" value={"coffee"}>
          Coffee
        </option>
        <option className="optionCat" value={"tea"}>
          Tea
        </option>
        <option className="optionCat" value={"bakery"}>
          Bakery
        </option>
        <option className="optionCat" value={"glasses"}>
          Glasses
        </option>
      </select>

      <div className="cardMain">
        {products.map((item, index) => (
          <div className="contentCard" key={index}>
            <img className="imgInContent" src={item.image} alt="qwe" />
            <div className="moreText">
              <span>{item.title}</span>
              <span>{item.description}</span>
              <span>${item.price}</span>
              {isAlreadyInCart(item.id) ? (
                <div>
                  <button
                    onClick={() => deleteProductFromCart(item.id)}
                    className="btnCard"
                  >
                    Delete from
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    onClick={() => addProductToCart(item)}
                    className="btnCard"
                  >
                    Order now
                  </button>
                </div>
              )}

              {isAdmin() ? (
                <>
                  <button
                    onClick={() => deleteProduct(item.id)}
                    className="btnCard"
                  >
                    {" "}
                    Delete{" "}
                  </button>
                  <Link to={`/edit/${item.id}`}>
                    <button className="btnCard">Edit</button>
                  </Link>
                </>
              ) : null}
            </div>
          </div>
        ))}
      </div>
      <div className="pagList">
        <Pagination
          onChange={(e, p) => setPage(p)}
          page={page}
          count={pageTotalCount}
          variant="outlined"
          shape="rounded"
        />
      </div>
    </div>
  );
};

export default ProductCard;
