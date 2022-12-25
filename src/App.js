import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Timeline from "./components/timeline";
import amongUs from "./json/amongUs.json";
import stars from "./json/stars.json";
import snow from "./json/snow.json";
import nyanCat from "./json/nyanCat.json";

export default function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="App">
      <h1>Hello Coders!</h1>

      <Particles id="tsparticles" init={particlesInit} options={snow} />
      <Timeline></Timeline>
    </div>
  );
}
