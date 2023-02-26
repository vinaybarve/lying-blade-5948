import React from "react"
import { Flex } from "@chakra-ui/react"
import Carousal1 from "../Components/Dashboard/Carousal/Carousal1"
import Product0 from "../Components/Dashboard/products/Product0"
import Carousal2 from "../Components/Dashboard/Carousal/Carousal2"
import Carousal3 from "../Components/Dashboard/Carousal/Carousal3"
import Product3 from "../Components/Dashboard/products/Product3"
import Carousal4 from "../Components/Dashboard/Carousal/Carousal4"

function Dashboard() {
  return (
    <Flex flexDirection="column" gap="30px">
      <Product0 />
      <Carousal1 />
      <Carousal2 />
      <Carousal3 />
      <Product3 />
      <Carousal4 />
    </Flex>
  )
}

export default Dashboard
