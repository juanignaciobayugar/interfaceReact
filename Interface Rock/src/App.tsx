
import Main from '../src/components/Main'
import Header from "../src/components/Header"
import { useState} from "react"

<source />

function App() {
  const [mesActivo, setMesActivo] = useState<"febrero" | "marzo" | "abril">("febrero")

  return (
    <>
      <Header onMesChange={setMesActivo} mesActivo={mesActivo} />
      <Main mesActivo={mesActivo} />
    </>
  )
}

export default App
