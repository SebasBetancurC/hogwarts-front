import { FrontPage } from "../components/FrontPage"
import { houses } from "../data/houses"

export const GryffindorPage = () => {

  const gryffindor = houses.find(house => house.name === "Gryffindor")

  return (
    <>
      <FrontPage
        frontPage={gryffindor.frontpage}
        
      />
    </>
  )
}
