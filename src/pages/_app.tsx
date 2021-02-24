import '../styles/global.css'

import { ChallengesProvider } from '../contexts/ChallengeContext'

function MyApp({ Component, pageProps }) {
  return ( 
    //Toda aplicação pode ter acesso aos dados do ChallengeContext
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
