// pages/index.tsx

import data from "../../data/navLinks.json";
import Navbar from "./Navbar";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Your App</h1>
      <Navbar data={data} />
    </div>
  );
};

export default Home;
