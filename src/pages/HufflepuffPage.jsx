import { FrontPage } from "../components/FrontPage"
import { houses } from "../data/houses"

export const HufflepuffPage = () => {
  const hufflepuff = houses.find(house => house.name === "Hufflepuff")

  return (
    <>
      <FrontPage
        frontPage={hufflepuff.frontpage}
      />
    </>
  )
}

