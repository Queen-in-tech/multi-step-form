import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { FormProvider } from "./context"
import Info from "./pages/Info"
import Plan from "./pages/Plan"
import AddOn from "./pages/AddOn"
import Summary from "./pages/Summary"

function App() {


  return (
    <FormProvider>
    <Router>
    <Routes>
      <Route path="/" element={<Info/>}/>
      <Route path="plan" element={<Plan/>}/>
      <Route path="add-on" element={<AddOn/>}/>
      <Route path="summary" element={<Summary/>}/>
    </Routes>
    </Router>
    </FormProvider>
  )
}

export default App
