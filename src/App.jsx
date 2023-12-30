import Particles from "react-particles";
import { Typewriter } from "react-simple-typewriter";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { useState } from "react";
import "./index.css";
import Countdown from "react-countdown";
const App = () => {
  const [string, setString] = useState(["bye bye", "tahun 2023"]);
  const particlesInit = async (engine) => {
    await loadFireworksPreset(engine);
  };
  const timeLeft = () => {
    const specificDate = new Date(2024, 0, 1, 0, 0, 0).getTime();
    const newDate = new Date().getTime();
    const result = specificDate - newDate;
    return result;
  };
  return (
    <>
      <Particles init={particlesInit} options={{ preset: "fireworks" }} />
      <div className="container">
       /* <span>
          <Typewriter words={string} loop={0} />
        </span> */
        <Countdown
          date={Date.now() + timeLeft()}
          onComplete={() =>
            setString(["selamat tahun baru bagi yang merayakan"])
          }
        />
      </div>
    </>
  );
};

export default App;
