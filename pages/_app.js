import '../styles/globals.css'

import MainContainer from '../components/MainContainer'

 function App({ Component, children }) {
  return (  
  <MainContainer>
    <Component{...children}/>  
  </MainContainer>
  )

}

export default App;
