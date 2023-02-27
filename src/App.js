import { useState } from "react";
import MainContainer from "./components/MainContainer";
import Operators from "./components/Operators";

function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    <div className={theme}>
      <div className="flex flex-col w-screen h-screen bg-slate-50 text-black dark:bg-black dark:text-white">
        <Operators theme = {theme} setTheme ={setTheme}/>
        <MainContainer/>
      </div>
    </div>
  );
}

export default App;
