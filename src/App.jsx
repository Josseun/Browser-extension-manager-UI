import Body from "@components/Body";
import Navbar from "@components/Navbar";
import "./index.css";

function App() {
  return (
    <>
      <div className="min-h-screen pb-20 bg-neutral-200 dark:bg-linear-180 dark:from-[#040918] dark:to-[#091540]">
        <Navbar />
        <Body />
      </div>
    </>
  );
}

export default App;
