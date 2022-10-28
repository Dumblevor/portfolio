import React from "react"


export default function PurchaseCard(props) {
  const userSize = "XL"



  return (
    <>
      <div className="card"
        style={{
          border: "0px",
          maxWidth: "300px",
          padding: "5px",
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          transition: "width 2s",
          backgroundColor: "rgba(255,255,255,0.6)",
        }}>
        <img src="https://shopmrbeast.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0016%2F1975%2F5059%2Fproducts%2FMRBEAST_131_websize.jpg%3Fv%3D1659505584&w=750&q=100"
          alt="mr beast tshirt"
          style={{ width: "100%" }} />
        <div class="container">
          <h4><b>Mr Beast Tshirt</b></h4>
          <p><b>$35.00</b></p>
          <ul>

            <li>
              Made of 100% Egyptian cotton
            </li>
            <li>
              With free shipping
            </li>
          </ul>
          <select value={userSize} style={{ padding: "5px", borderRadius: "15px", margin: "5px", }}>
            <option value="volvo" disabled>Select size</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">XLarge</option>

          </select>
          <br />

          <small>Previously you purchased size: {userSize}.</small>
          <br />

          <br />
          <button
            style={{
              zIndex: 10,
              fontSize: '1.5em',
              padding: "6px",
              borderRadius: "10px",
              boxShadow: "1px 1px 1px black",
              backgroundColor: "rgba(255,255,255,0.5)",
              backgroundRepeat: " no-repeat",
              border: "2px solid black",
              color: "black",
            }}
            onClick={() => props.setShowButton(!props.showButton)}
          > Confirm </button>
        </div>
      </div>
    </>
  )

}