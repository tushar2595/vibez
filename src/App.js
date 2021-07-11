import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/landing";
import Login from "./pages/auth";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import AboutUs from "./pages/aboutus";
import Layout from "./container/layout";
import PortfolioPage from "./pages/portfolio";
import Contact from "./pages/contact";
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Layout>
              <Route path={"/about"} component={AboutUs} />
              <Route path={"/portfolio"} component={PortfolioPage} />
              <Route path={"/contact"} component={Contact} />
            </Layout>
          </Switch>
        </Router>
      </Provider>
    )
  }
}
export default App;