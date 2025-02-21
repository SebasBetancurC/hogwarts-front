import { FrontPage } from "../components/FrontPage"
import { houses } from "../data/houses"

export const RavenclawPage = () => {
  const ravenclaw = houses.find(house => house.name === "Ravenclaw")

  return (
    <>
      <FrontPage
        frontPage={ravenclaw.frontpage}
      />
    </>
  )
}
