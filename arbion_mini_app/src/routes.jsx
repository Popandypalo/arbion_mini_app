import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "./components/Layouts/MainLayouts";
import ErrorElement from "./components/ui/ErrorElement";
import Home from "./pages/Home";
import Wallet from "./pages/Wallet";
import Partners from "./pages/Partners";
import FAQ from "./pages/FAQ/FAQ";

const MainRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts/>,
        errorElement: <ErrorElement/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'wallet',
                element: <Wallet/>
            },
            {
                path: 'partners',
                element: <Partners/>
            },
            {
                path: 'faq',
                element: <FAQ/>
            }
        ]
    }
]);

export default MainRoutes;

