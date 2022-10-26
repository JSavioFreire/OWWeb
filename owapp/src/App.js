import React  from 'react';

import Header from "./header/header.js";
import Banner from "./banner/banner.js";
import ApiOw2 from './api/api.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <ApiOw2/>
    </div>
  );
}

export default App;
