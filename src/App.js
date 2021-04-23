import { useEffect, useState } from "react";
import "./App.css";
import { Gallery } from "./Gallery/Gallery";
import { Header } from "./Header/Header";
import { Navigation } from "./Navigation/Navigation";

function App() {
  const [linkImg, setLinkImg] = useState([]);
  const [request, setRequest] = useState("different");

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${request}&client_id=wV_SqSoMm-EXQ5EQAbLt09rxT23V8eIg6NAMizay7rA`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setLinkImg(result.results);
        },
        (error) => {
          alert("try again");
        }
      );
  }, [request]);
  return (
    <div>
      <Header setRequest={setRequest}></Header>
      <Navigation setRequest={setRequest}></Navigation>
      <Gallery linkImg={linkImg}></Gallery>
    </div>
  );
}

export default App;
