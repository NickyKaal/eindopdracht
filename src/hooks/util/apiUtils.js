import {useEffect} from "react";

export default function useSafeCall(apiCall, dependencies = []) {

    useEffect(()=>{
        const controller = new AbortController();

        apiCall(controller);

        return function cleanup() {
            controller.abort();
        }
    },dependencies);
}