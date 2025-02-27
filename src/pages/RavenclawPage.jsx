import { FrontPage } from "../components/FrontPage"
import { houses } from "../data/houses"
import { Line } from "../components/Line"
import { WizardCard } from "../components/WizardCard";

export const RavenclawPage = () => {
  const ravenclaw = houses.find(house => house.name === "Ravenclaw")

  return (
    <>
      <FrontPage frontPage={ravenclaw.frontpage}/>
      <Line></Line>
      <WizardCard></WizardCard>
    </>
  )
}
