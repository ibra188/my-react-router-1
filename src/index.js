import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Expenses from "./components/expenses";
import Invoices from "./components/invoices";
import Invoice from "./components/invoice";
import './App.css';



const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="expenses" element={<Expenses />} />
            <Route path="invoices" element={<Invoices /> }>
                <Route path=":invoicesId" element={<Invoice />} />
            </Route>
            <Route
                path="*"
                elements={
                <main className="text-1">
                    <p>Theres's nothing here!</p>
                </main>
                }
                >
            </Route>
        </Routes>
    </BrowserRouter>,
    rootElement
);