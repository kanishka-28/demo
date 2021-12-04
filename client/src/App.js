import React from "react";
import { BrowserRouter as Router,  Switch,  Route } from "react-router-dom";
import NoteState from "./context/notes/noteState";
import HomeLayout from "./layout/Home.layout";
import AddNote from "./Pages/AddNote";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/login";
import Signup from "./Pages/signup";
import PlaneLayout from "./layout/plane.layout";
import axios from "axios"
import LoginState from "./context/user/loginState";
import SingleNote from "./Pages/SingleNote";
import NoteDetailsState from "./context/notes/NoteDetailsState";
import EditModal from "./components/editModal";
import EditToggle from "./context/user/edit";
import SearchState from "./context/notes/search";

//axios default settings
axios.defaults.baseURL = 'https://boobook-1305.herokuapp.com/';
axios.defaults.params = {};

const App = () => {
  return (
    <Router>
      <div>
      <LoginState>
        <NoteState>
            <NoteDetailsState>
              <EditToggle>
                <SearchState>
                <Switch>
                <Route exact path="/">
                  <HomeLayout>
                    <Home />
                  </HomeLayout>
                </Route>
                <Route exact path="/addnote">
                  <HomeLayout>
                    <AddNote />
                  </HomeLayout>
                </Route>
                <Route exact path="/about">
                  <PlaneLayout>
                    <About />
                  </PlaneLayout>
                </Route>
                <Route exact path="/singlenote">
                  <HomeLayout>
                    <SingleNote />
                    <EditModal/>
                  </HomeLayout>
                </Route>
                <Route exact path="/login">
                  <PlaneLayout>
                    <Login />
                  </PlaneLayout>
                </Route>
                <Route exact path="/signup">
                  <PlaneLayout>
                    <Signup />
                  </PlaneLayout>
                </Route>
              </Switch>
                </SearchState>
              </EditToggle>
            </NoteDetailsState>
        </NoteState>
      </LoginState>
      </div>
    </Router>
  )
}

export default App
