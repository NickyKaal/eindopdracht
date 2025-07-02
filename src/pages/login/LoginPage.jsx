import './LoginPage.css'
import NameBanner from "../../components/header/NameBanner.jsx";
import LoginTile from "./LoginTile.jsx";

function LoginPage() {
    return (
        <>
            <header className="page-header">
                <NameBanner/>
            </header>
            <main className="page-main-login">
                <LoginTile/>
            </main>
        </>
    )
}

export default LoginPage
