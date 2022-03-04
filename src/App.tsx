import { BrowserRouter, Route } from "react-router-dom";

import { NewRoom } from "./pages/NewRoom";
import { Home } from "./pages/Home";


import { AuthContextProvider } from './contexts/AuthContext'

function App() {
  

  return (
    <BrowserRouter>
    <AuthContextProvider>      
        <Route path="/" exact component={Home} />
        <Route path="/rooms/news" component={NewRoom} />
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
