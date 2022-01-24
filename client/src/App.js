import './App.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBarComp';
import Main from './components/MainComp'

////////////////////////////////////////////////////
//  ROOT APPLICATION
////////////////////////////////////////////////////

/**
 * Root Application
 * @returns HTML for the Root Application
 */
const App = () => {
  // //// OUTPUT ///////////////////////////////////
  return (
      <BrowserRouter>
        {/* **** NAVIGATION BAR ********* */}
        <NavBar />
        <Switch >
          {/* **** MAIN COMPONENT ********** */}
          <Main />
        </Switch>
      </BrowserRouter>
  );
}

export default App;