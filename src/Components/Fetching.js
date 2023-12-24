import axios from 'axios'
import React, { useEffect, useState } from 'react'

// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))

//             fetch('https://fakestoreapi.com/products/categories')
//             .then(res=>res.json())
//             .then(json=>console.log(json))






function Fetching() {

    const [dataArray, setDataArray] = useState([]);
    useEffect(
        () => {
            (async () =>{const response = await axios.get('https://fakestoreapi.com/products?limit=12');
            // console.log(response.data)
            setDataArray(response.data)
            console.log(dataArray)
        })()
        } , []
    )

    
  return (
    <div>
      {/* {console.log(dataArray[0])} */}
    </div>
  )
}

export default Fetching
