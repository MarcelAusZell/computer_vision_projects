import "./App.css"
import { Routes, Route, Navigate } from "react-router-dom"
import NavBar from "./components/layout/navbar/NavBar"
import SideBar from "./components/layout/sidebar/Sidebar"

import Home from "./components/pages/home/Home.jsx"
import PageNotFound from "./components/pages/page_not_found/PageNotFound.jsx"

import BackgroundSubtraction from "./components/pages/single_object_tracking/heuristical_approaches/BackgroundSubtraction.jsx"
import FrameDifferencing from "./components/pages/single_object_tracking/heuristical_approaches/FrameDifferencing.jsx"

import SingleGaussian from "./components/pages/single_object_tracking/statistical_approaches/SingleGaussian.jsx"
import MixtureOfGaussians from "./components/pages/single_object_tracking/statistical_approaches/MixtureOfGaussians.jsx"
import KernelDensity from "./components/pages/single_object_tracking/statistical_approaches/KernelDensity.jsx"



import { ROUTES } from "./routes/routes"

export default function App() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content h-screen overflow-y-auto scroll-smooth">
        <NavBar />

        <div className="px-4 py-6 lg:px-16 lg:py-12 max-w-6xl mx-auto">
          <Routes>
            <Route path={ROUTES.home.path} element={<Home/>} />

            {/* Optional: redirect old short URLs to new structured URLs */}
            <Route
              path="/background-subtraction"
              element={<Navigate to={ROUTES.backgroundSubtraction.path} replace />}
            />
            <Route
              path="/frame-differencing"
              element={<Navigate to={ROUTES.frameDifferencing.path} replace />}
            />

            {/* Heuristical Approaches */}
            <Route path={ROUTES.backgroundSubtraction.path} element={<BackgroundSubtraction />} />
            <Route path={ROUTES.frameDifferencing.path} element={<FrameDifferencing />} />

            {/* Statistical Approaches */}
            <Route path={ROUTES.singleGaussian.path} element={<SingleGaussian />} />
            <Route path={ROUTES.mixtureOfGaussians.path} element={<MixtureOfGaussians />} />
            <Route path={ROUTES.kernelDensity.path} element={<KernelDensity />} />

            {/* Catch-all */}
            <Route path={ROUTES.notFound.path} element={<PageNotFound title="404 - Not Found" />} />
          </Routes>
        </div>
      </div>

      <SideBar />
    </div>
  )
}