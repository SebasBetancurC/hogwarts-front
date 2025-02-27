import { FrontPage } from "../components/FrontPage"
import { Line } from "../components/Line"
import { houses } from "../data/houses"
import { WizardCard } from "../components/WizardCard";

export const SlytherinPage = () => {
  const slytherin = houses.find(house => house.name === "Slytherin")

  return (
    <>
      <FrontPage frontPage={slytherin.frontpage}/>
      <Line></Line>
      <WizardCard></WizardCard>
    </>
  )
}

