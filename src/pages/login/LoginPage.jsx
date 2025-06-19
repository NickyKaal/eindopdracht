import './LoginPage.css'
import NameBanner from "../../components/header/NameBanner.jsx";
import LoginTile from "./LoginTile.jsx";

function LoginPage({authenticateCB}) {

    return (
        <>
            <header className="page-header">
                <NameBanner/>
            </header>
            <main className="page-main-login">
                <LoginTile authenticateCB={authenticateCB}/>
            </main>
        </>
    )
}

export default LoginPage
