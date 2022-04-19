import React from 'react';
import './styles/App.scss';
import Navbar from './Components/elements/Navbar';
import Contacts from './Components/Contacts/Contacts';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter as BR, Route, Switch} from "react-router-dom";
import AddContact from './Components/Contacts/AddContact';

function App() {
  return (
    <Provider store={store}>
      <BR>
        <div className="App">
          <Navbar/>
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/" component={Contacts}/>
                <Route exact path="/contact/add" component={AddContact}/>
              </Switch>
            </div>
          </div>
        </div>
      </BR>
    </Provider>
  );
}

export default App;