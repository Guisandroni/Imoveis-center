import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./styles/globalConfigCss"
import { defaultTheme } from "./styles/theme/defaultTheme"
import {Home} from './components/home/index.tsx'

function App() {

  return (
    
    <ThemeProvider theme={defaultTheme}>
      <Home/>
      <GlobalStyles/>
    </ThemeProvider>
  )
}

export default App
