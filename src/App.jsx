import { Navigate, Route, Routes } from "react-router-dom";
import { MajorNavBarHogwarts } from "./components/MajorNavBarHogwarts.jsx";
import { GryffindorPage } from "./pages/GryffindorPage.jsx";
import { HufflepuffPage } from "./pages/HufflepuffPage.jsx";
import { RavenclawPage } from "./pages/RavenclawPage.jsx";
import { SlytherinPage } from "./pages/SlytherinPage.jsx";
import { HomePageHogwarts } from "./pages/HomePageHogwarts.jsx";



function App() {
  return (
    <>
      <MajorNavBarHogwarts></MajorNavBarHogwarts>

      <Routes>
        <Route path='/' element={ <HomePageHogwarts></HomePageHogwarts> } ></Route>
        <Route path='/gryffindor' element={<GryffindorPage></GryffindorPage>}></Route>
        <Route path='/hufflepuff' element={<HufflepuffPage></HufflepuffPage>}></Route>
        <Route path='/ravenclaw' element={<RavenclawPage></RavenclawPage>}></Route>
        <Route path='/slytherin' element={<SlytherinPage></SlytherinPage>}></Route>
        <Route path='/*' element={<Navigate to='/' /> }></Route>
      </Routes>
    </>
  );
}

export default App;
