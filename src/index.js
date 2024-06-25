
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Searchapp from "./Components/Searchapp";
import secoundPage from "./Components/secoundPage";
import pages from "./Components/pages"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Searchapp />}>
          <Route index element={<pages />} />
          <Route path="blogs" element={<secoundPage />} />
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);