import { Link, Outlet } from "react-router-dom";
import { getInvoices } from "../components/data";
import '../App.css';



export default function Invoices() {
    let invoices = getInvoices();
    return (
        <div className="invoices-wrapper">
            <nav className="invoices-items-wrapper">
                {invoices.map((invoice) => (
                    <Link className="invoices-link"
                          to={`/invoices/${invoice.number}`}
                          key={invoice.number}
                    >
                        {invoice.name}
                    </Link>
                ))}
            </nav>
            <Outlet />
        </div>
    );
}
