import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Product1 from "../products/Product1"
import { product2 } from "../products/products"
function Carousal2() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1.7,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  }
  return (
    <div
      style={{
        height: "250px",
        backgroundColor: "#F1F1F1",
      }}
    >
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2000}
        rewind={true}
        showDots
      >
        {product2.map((el) => {
          return <Product1 key={Math.random()} img={el.img} />
        })}
      </Carousel>
    </div>
  )
}
export default Carousal2
