import axios from "axios";
import React, { useEffect, useState } from "react";
import Body from "./Body";

function Fetching(props) {
  const [dataArray, setDataArray] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get(props.apiUrl);
      // console.log(response)
      setDataArray(response.data);
    })();
  }, [props.apiUrl]);

  return (
    <>
      <div className="container">
        <div className="row">
          {dataArray.map((elements) => {
            return (
              <div className="col-md-4" key={elements.id}>
                {
                  <Body
                    title={elements.title}
                    description={elements.description}
                    imageUrl={elements.image}
                    price={elements.price}
                    rating={elements.rating}
                  />
                }
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Fetching;
