import NavBar from "../components/navbar";
import Home from "../sections/home_section";

export default function App() {
  return (
   <div>
    <main>
      <div className="">
          <Home />
          <NavBar />
      </div>
    </main>
   </div>
  );
}
