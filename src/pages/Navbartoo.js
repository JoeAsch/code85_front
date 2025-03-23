import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "../pages/NoPage";
import Reports from "../pages/Reports";
import Layout from "../pages/Layout";
import Home from '../pages/Home';
import EntryForm from "../pages/EntryForm";
import RemoveForm from "../pages/RemoveForm";




function Browser()  {
    return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="reports" element={<h2><Reports /></h2>} />
    <Route path="entryform" element={<EntryForm />} />
    <Route path="removeform" element={<RemoveForm/> }/>
    <Route path="*" element={<NoPage />} />
    </Route>
    </Routes>
    </BrowserRouter>
    );
    } 
    export default Browser