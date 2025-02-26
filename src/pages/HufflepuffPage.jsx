import { FrontPage } from "../components/FrontPage"
import { houses } from "../data/houses"
import { Line } from "../components/Line"

export const HufflepuffPage = () => {
  const hufflepuff = houses.find(house => house.name === "Hufflepuff")

  return (
    <>
      <FrontPage frontPage={hufflepuff.frontpage}/>
      <Line></Line>
    </>
  )
}

