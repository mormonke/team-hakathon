import React, { useContext, useState } from "react";
import { productContext } from "../contexts/ProductContext";
import "../style/addProduct.css";
function AddProductPage() {
  const { addProduct } = useContext(productContext);

  const newProduct = {
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  };

  const [product, setProduct] = useState(newProduct);
  console.log(product);

  function handleAddProduct(e) {
    const obj = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(obj);
  }

  function saveProduct() {
    addProduct(product);
    setProduct({
      title: "",
      price: "",
      description: "",
      category: "",
      image: "",
    });
  }

  return (
    <div>
      <div className="qontainer">
        <input
          className="inputInqon"
          name="title"
          type="text"
          value={product.title}
          required=""
          placeholder="Title"
          onChange={handleAddProduct}
        />

        <input
          className="inputInqon"
          name="price"
          type="text"
          value={product.price}
          required=""
          placeholder="Price"
          onChange={handleAddProduct}
        />
        <input
          className="inputInqon"
          name="description"
          value={product.description}
          type="text"
          required=""
          placeholder="Description"
          onChange={handleAddProduct}
        />
        <input
          className="inputInqon"
          name="category"
          value={product.category}
          type="text"
          required=""
          placeholder="Category"
          onChange={handleAddProduct}
        />
        <input
          className="inputInqon"
          name="image"
          value={product.image}
          type="text"
          required=""
          placeholder="Image"
          onChange={handleAddProduct}
        />
        <button className="btnAE" onClick={saveProduct}>
          <span class="button_top"> Button</span>
        </button>
      </div>
    </div>
  );
}

export default AddProductPage;
