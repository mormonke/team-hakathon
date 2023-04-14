import React from "react";
import "../style/buy.css";
function BuyPage() {
  return (
    <div>
      <div class="modal">
        <form class="form">
          <div class="separator"></div>
          <div class="credit-card-info--form">
            <div class="input_container">
              <label for="password_field" class="input_label">
                Card holder full name
              </label>
              <input
                id="password_field"
                class="input_field"
                type="text"
                name="input-name"
                title="Inpit title"
                placeholder="Enter your full name"
              />
            </div>
            <div class="input_container">
              <label for="password_field" class="input_label">
                Card Number
              </label>
              <input
                id="password_field"
                class="input_field"
                type="number"
                name="input-name"
                title="Inpit title"
                placeholder="0000 0000 0000 0000"
              />
            </div>
            <div class="input_container">
              <label for="password_field" class="input_label">
                Number phone
              </label>
              <input
                id="password_field"
                class="input_field"
                type="number"
                name="input-name"
                title="Inpit title"
                placeholder="0000 0000 0000 0000"
              />
            </div>
            <div class="input_container">
              <label for="password_field" class="input_label">
                Expiry Date / CVV
              </label>
              <div class="split">
                <input
                  id="password_field"
                  class="input_field"
                  type="text"
                  name="input-name"
                  title="Expiry Date"
                  placeholder="01/23"
                />
                <input
                  id="password_field"
                  class="input_field"
                  type="number"
                  name="cvv"
                  title="CVV"
                  placeholder="CVV"
                />
              </div>
            </div>
          </div>
        </form>
        <a href="sad">
          <button
            style={{
              marginLeft: "190px",
              padding: "30px",
              paddingTop: "20px",
              textAlign: "center",
            }}
            class="purchase--btn"
          >
            Buy
          </button>
        </a>
      </div>
    </div>
  );
}

export default BuyPage;
