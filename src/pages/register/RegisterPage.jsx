import './RegisterPage.css'
import NameBanner from "../../components/common/NameBanner.jsx";
import RegisterTile from "../../components/auth/RegisterTile.jsx";

function RegisterPage({authenticateCB}) {

    return (
        <>
            <header className="page-header">
                <NameBanner/>
            </header>
            <main className="page-main">
                <RegisterTile authenticateCB={authenticateCB}/>
            </main>
        </>
    )
}

export default RegisterPage
