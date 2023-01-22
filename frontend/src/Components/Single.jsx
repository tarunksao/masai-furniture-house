import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from "react-redux";
import "./Singlepage.css"
import SingleData from './SingleData';
import axios from 'axios';
let curr;
const Single = () => {
  const { id } = useParams()
  // const product = useSelector((store) => store.product)
  // console.log(product)
  const [current, setCurrent] = React.useState({});
  const dispatch = useDispatch()

  const [data, setData] = useState([]);


  const getSingleProduct = () => {
    axios.get("https://cyan-breakable-antelope.cyclic.app/products/furniture").then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {

    getSingleProduct()

  }, [])

  // console.log(data)

  let curr;
  React.useEffect(() => {

    if (id) {
      curr = data.filter((watch) => watch._id === id);
      // console.log(curr)

      current && setCurrent(curr)
      // console.log(current)

    }
  }, [id, data])
  // console.log(current)


  return (
    <>
      {
        current.length > 0 && current.map((ele) =>
          // console.log(ele.image_src)
          <SingleData key={ele._id}
            image={ele.image_src}
            brand={ele.brand_name}
            category={ele.sub_category}
            price={ele.price}
            des={ele.prod_desc} />
        )}

    </>


  )
}

export default Single
