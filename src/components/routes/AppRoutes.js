import { Routes, Route } from 'react-router-dom'
import Auth from '../../pages/Auth/Auth'
import { ProtectedRoute } from './ProtectedRoute'
import Layout from '../../pages/Layout/Layout'
import Main from '../../pages/Main/Main'
import Seller from '../../pages/Seller/Seller'
import Profile from '../../pages/Profile/Profile'
import Adv from '../../pages/Adv/Adv'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/Auth" element={<Auth />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/Adv" element={<Adv />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Seller" element={<Seller />} />
        </Route>
      </Route>
    </Routes>
  )
}
