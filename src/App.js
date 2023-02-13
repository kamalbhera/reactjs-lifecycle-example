import logo from "./logo.svg";
import "./App.css";

import LifecycleMounting from "./Components/MountingPhase/LifecycleMounting";
import LifeCycleMounting2 from "./Components/MountingPhase/LifeCycleMounting2";
import LifeCycleMounting3 from "./Components/MountingPhase/LifeCycleMounting3";
import LifeCycleMounting4 from "./Components/MountingPhase/LifeCycleMounting4";
import UpdatingEx1 from "./Components/UpdatingPhase/UpdatingEx1";
// import UpdateErrorLoop from "./Components/UpdatingPhase/UpdateErrorLoop";
import UpdatingEx2 from "./Components/UpdatingPhase/UpdatingEx2";

function App() {
  const name = "Kamal";
  const isLogged = true;
  return (
    <>
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello {isLogged ? name : "World"}</h2> 
        {!isLogged && <h2>Hello World</h2>}
        {isLogged && <h2>Hello {name}</h2>}
        <p>Today is {new Date().toDateString()}</p>
        </header>
        {/* <MountingP />
        <SetStateDepth1 /> */}
        <LifecycleMounting />
        <LifeCycleMounting2 />
        <LifeCycleMounting3 />
        <LifeCycleMounting4 />
        <UpdatingEx1 />
         {/* <UpdateErrorLoop /> */}
       <UpdatingEx2 />
      </div>
    </>
  );
}

export default App;
