import React, { useState } from "react"
import PurchaseCard from "./PurchaseCard"

export default function Video() {
  const [showButton, setShowButton] = useState(false)

  return (
    <><br /><br />
      <div
        style={{
          display: 'flex',
          alignItems: "flex-end",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",

        }}
      >
        <iframe
          width="1500"
          height="1000"
          src="https://www.youtube.com/embed/gHzuabZUd6c?controls=0&amp;start=928"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          controls
          allowFullScreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
        // onEnded={ }
        // style={{
        //   width: '100%',
        //   height: '100%'
        // }}
        />
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            flexDirection: "row",
            justifyContent: "space-arround",
            maxWidth: "1500px",
            maxHeight: "1000px",
            alignItems: "flex-end",
            marginBottom: "200px"
          }}>
          {/* <button
          onClick={() => {
          }}
          style={{
            zIndex: 10,
            fontSize: '1.5em',
            borderRadius: "10px",
            boxShadow: "5px 5px 1px lightblue",
            padding: "10px",
            marginRight: "50px"
          }}
        >
          Buy Now
        </button> */}
          {/* <input type="text"
          style={{
            zIndex: 10,
            fontSize: '1.5em',
            borderRadius: "10px",
            boxShadow: "5px 5px 1px lightgreen",
            padding: "10px",
            marginRight: "50px"

          }}
          placeholder="getin@yc.com"
        >
        </input> */}
          <a href="https://apps.apple.com/us/app/venmo/id351727428" target="_blank" rel="noopener noreferrer">
            < button
              style={{
                zIndex: 10,
                fontSize: '1.5em',
                padding: "10px",
                marginRight: "50px",
                borderRadius: "15px",
                boxShadow: "5px 5px 1px white",
                backgroundColor: "rgba(255,255,255,0.5)",
                backgroundRepeat: " no-repeat",
                border: "2px solid white",
                color: "black",
                fontWeight: "bold",
              }}
            >
              <small>sponsored</small><br/>
              Download VENMO<br />
            </button>
          </a>
          {!showButton && < button
            style={{
              zIndex: 10,
              fontSize: '1.5em',
              marginRight: "50px",
              padding: "10px",
              borderRadius: "15px",
              boxShadow: "5px 5px 1px white",
              backgroundColor: "rgba(255,255,255,0.5)",
              backgroundRepeat: " no-repeat",
              border: "2px solid white",
              color: "black"
            }}
            onClick={() => setShowButton(!showButton)}
          >
            Buy Mr. Beast T-shirt
          </button>}
          {showButton && <div>
            <PurchaseCard setShowButton={setShowButton} showButton={showButton} /></div>}
        </div>
      </div>
    </>
  )


}
