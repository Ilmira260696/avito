// import { Routes, Route } from 'react-router-dom'
import Auth from '../pages/Auth/Auth'
// import ProtectedRoute  from '../components/routes/routes'
// import Layout from '../pages/Layout/Layout'
import Main from '../pages/Main/Main'
import Seller from '../pages/Seller/Seller'
import Profile from '../pages/Profile/Profile'
import Adv from '../pages/Adv/Adv'

// export function AppRoutes() {
//   return (
//     <Routes>
//       <Route path="/Auth" element={<Auth />} />
//       <Route path="/" element={<Layout />}>
//         <Route path="/" element={<Main />} />
//         <Route element={<ProtectedRoute  />}>
//           <Route path="/Adv" element={<Adv />} />
//           <Route path="/Profile" element={<Profile />} />
//           <Route path="/Seller" element={<Seller />} />
//         </Route>
//       </Route>
//     </Routes>
//   )
// }


import {
  MAIN_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  PROFILE_ROUTE,
  ADV_ROUTE,
  SELLER_ROUTE
} from '../utils/constants'

export const publicRoutes = [
  {
      element: <Auth />,
      path: LOGIN_ROUTE
  },
  {
      element: <Auth />,
      path: REGISTRATION_ROUTE
  },
  {
      element: <Main />,
      path: MAIN_ROUTE
  },
  {
      element: <Adv />,
      path: ADV_ROUTE
  },
  {
      element: <Seller />,
      path: SELLER_ROUTE
  }
]

export const privateRoutes = [
  {
      element: <Profile />,
      path: PROFILE_ROUTE
  }
]
