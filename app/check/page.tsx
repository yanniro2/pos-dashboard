// App.tsx
import React from "react";
import Navigation from "./Navigation";
import navLinks from "../../data/navLinks.json";

const App: React.FC = () => {
  return (
    <div>
      <h1>My Website</h1>
      <Navigation navLinks={navLinks} />
    </div>
  );
};

export default App;
