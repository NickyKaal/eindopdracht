import axios from "axios";
import React, {useCallback, useEffect} from "react";
import * as apiUtil from "./util/apiUtils.js";
const BASE_URL = "https://novi-backend-api-wgsgz.ondigitalocean.app/api";

export function useFetchOptions() {

    const [result, setResult] = React.useState([]),
        [ failed, toggleFailed] = React.useState(false),
        [error , setError] = React.useState(""),
        [loaded, toggleLoaded] = React.useState(false);

    //TODO: memoization
    async function loadCall(controller){
        try{
            toggleLoaded(false);
            toggleFailed( false);
            setError( "");
            setResult([]);

            //TODO: juiste call
            const response = await axios.get(`${BASE_URL}/events`, {
                headers: {
                    'novi-education-project-id': import.meta.env.VITE_API_KEY,
                    signal: controller.signal
                },
                params: {
                    'limit': 10
                    ,'sort': "eventDT"
                    ,"eventDT[gt]":new Date()
                    ,"fields":"id"
                }
            });

            //TODO: Vervangen met echte data
            setResult([
                {value:"potato",display:"Potato"}
                ,{value:"adjura",display:"Adjura"}
                ,{value:"charlotte",display:"Charlotte de Witte"}
                ,{value:"bbjecha",display:"Boris Brejcha"}
            ]);
        }
        catch(err){
            console.warn(err);
            toggleFailed( true);
            setError( err.message);
        }
        finally {
            toggleLoaded(true);
        }
    }

    apiUtil.useSafeCall(loadCall);

    return {result,loaded,failed,error};
}
