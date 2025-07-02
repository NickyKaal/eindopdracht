import './RegisterPage.css'
import NameBanner from "../../components/header/NameBanner.jsx";
import RegisterTile from "./RegisterTile.jsx";

function RegisterPage() {
    return (
        <>
            <header className="page-header">
                <NameBanner/>
            </header>
            <main className="page-main-register">
                <RegisterTile/>
            </main>
        </>
    )
}

export default RegisterPage
