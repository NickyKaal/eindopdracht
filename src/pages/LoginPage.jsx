import './LoginPage.css'
import NameBanner from "../components/common/NameBanner.jsx";
import LoginTile from "../components/auth/LoginTile.jsx";

function LoginPage() {

    return (
        <>
            <header className="page-header">
                <NameBanner/>
            </header>
            <main className="page-main">
                <LoginTile/>
            </main>
        </>
    )
}

export default LoginPage
