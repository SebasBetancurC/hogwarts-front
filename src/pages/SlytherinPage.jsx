import { FrontPage } from "../components/FrontPage"
import { houses } from "../data/houses"

export const SlytherinPage = () => {
  const slytherin = houses.find(house => house.name === "Slytherin")

  return (
    <>
      <FrontPage
        frontPage={slytherin.frontpage}
      />
    </>
  )
}

