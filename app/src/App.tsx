import bg1 from "./assets/images/background1_desktop.svg";
import Accordion from "./Components/Accordion";
function App() {
  return (
    <div className={`w-[100vw] h-[100vh] relative top-0 left-0`}>
      <Accordion/>
      <div
        className={`h-[35%] w-full`}
        style={{ background: `url(${bg1}) no-repeat center/cover` }}
      >
      </div>
      <div className="h-[65%] w-full" style={{backgroundColor:"hsl(275, 100%, 97%)" }}>
      </div>
    </div>
  );
}

export default App;
