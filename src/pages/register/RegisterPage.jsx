import './RegisterPage.css'
import NameBanner from "../../components/header/NameBanner.jsx";
import RegisterTile from "./RegisterTile.jsx";

function RegisterPage({authenticateCB}) {

    return (
        <>
            <header className="page-header">
                <NameBanner/>
            </header>
            <main className="page-main-register">
                <RegisterTile authenticateCB={authenticateCB}/>
            </main>
        </>
    )
}

export default RegisterPage
