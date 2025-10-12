
// import { Routes ,Route } from 'react-router-dom';
import {Route, Router, Switch} from "react-router-dom";
import {setHistory} from "./history";
import MainPage from "./pages/MainPage";
import ShopPage from "./pages/ShopPage";
import {createBrowserHistory} from 'history'
import ExampleSwiper from "./pages/ExampleSwiper";

function MainRouter () {
    let history = createBrowserHistory();
    setHistory(history);
    return (
        <Router history={history}>
            {/*<Layout>*/}
            <Switch>
                <Route path="/swiper">
                    <ExampleSwiper/>
                </Route>
                <Route path="/shop">
                    <ShopPage/>
                </Route>
                <Route path="/">
                    <MainPage/>
                </Route>
                <Route path="/main">
                    <MainPage/>
                </Route>

            </Switch>
            {/*</Layout>*/}

        </Router>
    );
}

export default MainRouter;