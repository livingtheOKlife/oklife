import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom'
import store from './store.ts'
import { AppProvider } from './context/app/AppProvider.tsx'
import App from './App.tsx'
import './index.css'
import HomePage from './pages/HomePage.tsx'
import CreateAccountPage from './pages/CreateAccountPage.tsx'
import SignInPage from './pages/SignInPage.tsx'
import VerifyAccountPage from './pages/VerifyAccountPage.tsx'
import PageNotFoundPage from './pages/PageNotFoundPage.tsx'

/**------------------------------ browser router
 *
 * @name router
 * @requires react-router-dom
 * @description creates routes from page components
 *
 * --------------- */

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index path='/' element={<HomePage />} />
      <Route path='/create-account' element={<CreateAccountPage />} />
      <Route path='/sign-in' element={<SignInPage />} />
      <Route path='/verify-account' element={<VerifyAccountPage />} />
      <Route path='/page-not-found' element={<PageNotFoundPage />} />
      <Route path='/*' element={<Navigate to="/page-not-found" replace />} />
    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <AppProvider>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </AppProvider>
  </Provider>
)
