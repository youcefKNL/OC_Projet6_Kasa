// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import KasaLocation from "./pages/KasaLocation.js";
// import Page404 from "./pages/Page404";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/:id" element={<KasaLocation />} />
//         <Route path="*" element={<Page404 />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import KasaLocation from "./pages/KasaLocation.js";
import Page404 from "./pages/Page404";
import { DataDone } from "./components/DataContext";

const App = () => {
  return (
    <BrowserRouter>
      <DataDone>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/location/:id" element={<KasaLocation />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </DataDone>
    </BrowserRouter>
  );
};

export default App;
