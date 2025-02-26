import { useFetch } from "../hooks/useFetch";
import { FrontPage } from "../components/FrontPage"
import { Line } from "../components/Line";
import { WizardCard } from "../components/WizardCard";


export const GryffindorPage = () => {
 

  const { data: houses, loading, error } = useFetch("http://localhost:5000/api/houses");

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar las casas</p>;

  const gryffindor = houses.find((house) => house.name === "Gryffindor");

  if (!gryffindor) return <p>No se encontró Gryffindor</p>;

  return (
    <>
      <FrontPage frontPage={gryffindor.frontpage} />
      <Line></Line>
      <WizardCard></WizardCard>
    </>
  )
}
