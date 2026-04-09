import { useState } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Preview from "./Components/preview";

function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    skills: "",
  });

  return (
    <>
      <Header />

      <div style={{ display: "flex" }}>
        <Form data={data} setData={setData} />
        <Preview data={data} />
      </div>
    </>
  );
}

export default App;