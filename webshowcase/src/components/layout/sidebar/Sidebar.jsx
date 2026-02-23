import { NavLink } from "react-router-dom"
import { ROUTES } from "../../../routes/routes"


const linkClass = ({ isActive }) =>
  isActive ? "bg-neutral/10" : ""

export default function SideBar() {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

      <div className="min-h-full w-80 bg-base-200 shadow-2xl">
        <ul className="menu bg-base-200 rounded-box w-full">
          <li className="font-bold">
            <NavLink to={ROUTES.home.path} > 

              <img src="public/logo.svg"
                alt=""
                draggable="false"
                width={300}
              />
            </NavLink>
          </li>

          <li>
            <details open>
              <summary>Single Object Tracking</summary>
              <ul>
                <li>
                  <details open>
                    <summary>Heuristical Approaches</summary>
                    <ul>
                      <li>
                        <NavLink
                          to={ROUTES.backgroundSubtraction.path}
                          className={linkClass}
                        >
                          {ROUTES.backgroundSubtraction.label}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={ROUTES.frameDifferencing.path}
                          className={linkClass}
                        >
                          {ROUTES.frameDifferencing.label}
                        </NavLink>
                      </li>
                    </ul>
                  </details>
                </li>

                <li>
                  <details open>
                    <summary>Stastical Approaches</summary>
                    <ul>
                      <li>
                        <NavLink
                          to={ROUTES.singleGaussian.path}
                          className={linkClass}
                        >
                          {ROUTES.singleGaussian.label}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={ROUTES.mixtureOfGaussians.path}
                          className={linkClass}
                        >
                          {ROUTES.mixtureOfGaussians.label}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={ROUTES.kernelDensity.path}
                          className={linkClass}
                        >
                          {ROUTES.kernelDensity.label}
                        </NavLink>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  )
}