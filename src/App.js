import Home from "./components.js/Home";

import DataProvider from "./context/DataProvider";

function App() {
  return (
    <div className="App">
     <DataProvider>
     <Home/>
     </DataProvider>
    </div>
  );
}

export default App;
