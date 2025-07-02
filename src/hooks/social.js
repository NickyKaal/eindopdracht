import axios from "axios";
import { useState} from "react";
import {useSafeCall} from "./util/apiUtils.js";
const BASE_URL = "https://novi-backend-api-wgsgz.ondigitalocean.app/api";

export function useFetchOptions() {

    const [result, setResult] = useState([]),
        [ failed, toggleFailed] = useState(false),
        [error , setError] = useState(""),
        [loaded, toggleLoaded] = useState(false);

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
                {value:"ppub",display:"Pietje Pub"}
                ,{value:"bbrouwer",display:"Bob de Brouwer"}
                ,{value:"fsneus",display:"Fee Sneus"}
                ,{value:"bgab",display:"Bertje Gab"}
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

    useSafeCall(loadCall);

    return {result,loaded,failed,error};
}
