import HeaderContainer from './components/layout/HeaderContainer'
import MainContainer from './components/layout/MainContainer'

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <MainContainer page=''>
        MainContainer
      </MainContainer>
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
