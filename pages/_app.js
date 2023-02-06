import '../styles/globals.css'

import MainContainer from '../components/MainContainer'

 function App({ Component, pageProps }) {
  return (  
  <MainContainer>
    <Component{...pageProps}/>  
  </MainContainer>
  )

}

export default App;
