import React from 'react'
import { InformationWs } from '../components/InformationWs'
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

export const BiographyW = () => {

  const { id } = useParams();
  const { data: wizard, loading, error } = useFetch(`http://localhost:5000/api/wizards/${id}`);

  if (loading) return <p>Cargando mago...</p>;
  if (error) return <p>Error: {error}</p>;


  return (
    <>
      {wizard ? <InformationWs wizard={wizard} /> : <p>No se encontró información.</p>}
    </>
  )
}
