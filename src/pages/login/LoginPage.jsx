import './LoginPage.css'
import NameBanner from "../../components/header/NameBanner.jsx";
import LoginTile from "../../components/auth/LoginTile.jsx";

function LoginPage({authenticateCB}) {

    return (
        <>
            <header className="page-header">
                <NameBanner/>
            </header>
            <main className="page-main">
                <LoginTile authenticateCB={authenticateCB}/>
            </main>
        </>
    )
}

export default LoginPage
