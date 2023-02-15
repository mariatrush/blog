import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import IndexPage from './pages/IndexPage/IndexPage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import { UserContextProvider } from './common/UserContext'
import CreatePost from './pages/CreatePost/CreatePost'
import PostPage from './pages/PostPage/PostPage'
import EditPost from './pages/EditPost/EditPost'
import AuthentificatedView from './components/AuthentificatedView/AuthentificatedView'

function App() {
  return (
    <div>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/create"
              element={
                <AuthentificatedView>
                  <CreatePost />
                </AuthentificatedView>
              }
            />
            <Route path="/post/:id" element={<PostPage />} />
            <Route
              path="/edit/:id"
              element={
                <AuthentificatedView>
                  <EditPost />
                </AuthentificatedView>
              }
            />
          </Route>
        </Routes>
      </UserContextProvider>
    </div>
  )
}

export default App
