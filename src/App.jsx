import Nav from "./components/Nav";
import Main from "./components/Main";

export default function App() {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full">
        <Nav />
        <Main />
      </div>
    </>
  );
}
