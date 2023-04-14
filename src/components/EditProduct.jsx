import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../contexts/ProductContext";
import { useNavigate, useParams } from "react-router-dom";
import "../style/addProduct.css";

function EditProduct() {
  const { saveEditedProduct, getOneProduct, oneProduct } =
    useContext(productContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [porductToEdit, setProductToEdit] = useState(oneProduct);

  useEffect(() => {
    getOneProduct(id);
    setProductToEdit(oneProduct);
  }, []);

  useEffect(() => {
    setProductToEdit(oneProduct);
  }, [oneProduct]);

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...porductToEdit,
        [e.target.name]: Number(e.target.value),
      };
      setProductToEdit(obj);
    } else {
      let obj = {
        ...porductToEdit,
        [e.target.name]: e.target.value,
      };
      setProductToEdit(obj);
    }
  };

  return (
    <div>
      {porductToEdit ? (
        <div className="qontainer">
          <input
            className="inputInqon"
            name="title"
            type="text"
            value={porductToEdit.title}
            required=""
            placeholder="Title"
            onChange={handleInp}
          />

          <input
            className="inputInqon"
            name="price"
            type="text"
            value={porductToEdit.price}
            required=""
            placeholder="Price"
            onChange={handleInp}
          />
          <input
            className="inputInqon"
            name="description"
            value={porductToEdit.description}
            type="text"
            required=""
            placeholder="Description"
            onChange={handleInp}
          />
          <input
            className="inputInqon"
            name="category"
            value={porductToEdit.category}
            type="text"
            required=""
            placeholder="Category"
            onChange={handleInp}
          />
          <input
            className="inputInqon"
            name="image"
            value={porductToEdit.image}
            type="text"
            required=""
            placeholder="Image"
            onChange={handleInp}
          />
          <button
            className="btnAE"
            onClick={() => saveEditedProduct(porductToEdit, navigate(-1))}
          >
            <span class="button_top"> Button</span>
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default EditProduct;
