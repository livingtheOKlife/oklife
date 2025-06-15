import AlertContainer from './components/layout/AlertContainer'
import HeaderContainer from './components/layout/HeaderContainer'
import MainContainer from './components/layout/MainContainer'
import MenuContainer from './components/layout/MenuContainer'
import ModalContainer from './components/layout/ModalContainer'
import SearchContainer from './components/layout/SearchContainer'

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <MainContainer page=''>
        MainContainer
      </MainContainer>
      <SearchContainer />
      <ModalContainer />
      <MenuContainer />
      <AlertContainer />
      <footer id="footer-container">
        <div>
          <span>livingthe<em>OK</em>life</span>
          <span>&copy; 2025</span>
        </div>
        <span>
          All rights reserved.
        </span>
      </footer>
    </div>
  )
}

export default App
