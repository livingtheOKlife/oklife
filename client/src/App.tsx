import HeaderContainer from './components/layout/HeaderContainer'

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <main id="main-container">MainContainer</main>
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
