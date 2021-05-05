import { useEffect, useState } from "react";
import { Gallery } from "./components/Gallery/Gallery";
import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";


function App() {
  const [arrayLinks, setArrayLinks] = useState([]);
  const [request, setRequest] = useState("different");

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?per_page=24&query=${request}&client_id=wV_SqSoMm-EXQ5EQAbLt09rxT23V8eIg6NAMizay7rA`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setArrayLinks(result.results);
        },
        (error) => {
          alert("try again");
        }
      );
  }, [request]);
  return (
    <div>
      <Header setRequest={setRequest}/>
      <Navigation setRequest={setRequest}/>
      <Gallery arrayLinks={arrayLinks}/>
    </div>
  );
}

export default App;
