import {createContext, useEffect, useState} from "react";

export const SubjectContext = createContext({});

const ROLES = {
    admin: "admin",
    cAdmin: "community_admin",
    moderator: "moderator"
};

const DEFAULT_SUBJECT = {
    auth: false
    , id: null
    , isAdmin: false
    , isCAdmin: false
    , isMod: false
}

export function SubjectContextProvider({children}) {
    const [subject, setSubject] = useState(DEFAULT_SUBJECT);

    function buildSubject(id) {
        if (subject.id === id) {
            return subject.auth;
        }

        let response = {
            roles: [ROLES.admin]
        }

        let isAuth = true;
        console.log("build subject");
        setSubject({
            auth: isAuth
            , id: id
            , isAdmin: response.roles.includes(ROLES.admin)
            , isCAdmin: response.roles.includes(ROLES.cAdmin)
            , isMod: response.roles.includes(ROLES.moderator)
        });

        console.log("is auth: "+isAuth);
        return isAuth;
    }

    function register(data){
        console.log("Register subject");
        return buildSubject("admin");
    }

    function logoff(){
        console.log("Logoff subject");
        setSubject(DEFAULT_SUBJECT);
    }

    function authenticate(id,pw){
        console.log("Authenticate subject");
        return true;
    }

    let providerValue = {
        ...subject
        , logoff
        , login: buildSubject
        , authenticate
        , register
    };

    return <SubjectContext.Provider value={providerValue}>
        {children}
    </SubjectContext.Provider>
}