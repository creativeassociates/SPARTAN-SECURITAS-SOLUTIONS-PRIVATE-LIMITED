import {Routes, Route, Navigate} from "react-router-dom";
import {navRoutes, routes} from "./routes.jsx";
import {Meta} from "./meta.jsx";
import ScrollToTop from "./widgets/scroll-to-top.jsx";


function App() {

    return (<>
        <Meta/>
        <ScrollToTop>
            <Routes>
                {navRoutes.map(({path, element}, key) => element &&
                    <Route key={key} exact path={path} element={element}/>)}
                {routes.map(({path, element}, key) => element &&
                    <Route key={key} exact path={path} element={element}/>)}
            </Routes>
        </ScrollToTop>
    </>);
}

export default App;
