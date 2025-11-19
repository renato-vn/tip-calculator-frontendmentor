import { Calculator } from "./components";

const App = () => {
  return (
    <main>
      <div className="flex justify-center my-10">
        <img src="./images/logo.svg" alt="logo" />
      </div>

      <Calculator />
    </main>
  );
};

export default App;
