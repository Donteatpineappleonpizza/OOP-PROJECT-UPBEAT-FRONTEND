// eslint-disable-next-line
import React from "react";
import Firstname from "./pages/firstpage/Firstpage";
import Howpage from "./pages/howpage/Howpage";
import Select1 from "./pages/select1/Select1";
import Character from "./pages/select1/Character";
import Character2 from "./pages/select2/Character2";
import Select2 from "./pages/select2/Select2";
import "./App.css";
import PlayPage from "./pages/playpage/Playpage";
import Firstpage from "./pages/firstpage/Firstpage";

function App() {
  return (
    <div>
      <Firstpage/>
      <Howpage/>
      <Character/>
      <Character2/>
      <PlayPage/>
    </div>
  );
}

export default App;
