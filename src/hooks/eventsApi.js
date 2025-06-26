import axios from "axios";
import React, {useCallback, useEffect} from "react";
import * as apiUtil from "./util/apiUtils.js";
const BASE_URL = "https://novi-backend-api-wgsgz.ondigitalocean.app/api";

export function useFetchEventsList() {

    const [result, setResult] = React.useState([]),
        [ failed, toggleFailed] = React.useState(false),
        [error , setError] = React.useState(""),
        [loaded, toggleLoaded] = React.useState(false);

    async function loadCall(controller){
        console.log("loadCall");
        try{
            toggleLoaded(false);
            toggleFailed( false);
            setError( "");
            setResult([]);

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

            setResult(response.data);
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

    console.log("build");
    const reloadWithFilter = useCallback( async(filter)=>{
        console.log("called reloadWithFilter");
        const controller = new AbortController();

        console.log("filter",filter);

        loadCall(controller, filter);


        return function cleanup() {
            console.log("called abort");
            controller.abort();
        }
    },[]);

    apiUtil.useSafeCall(reloadWithFilter,[reloadWithFilter]);

    return {result,loaded,failed,error, reload:reloadWithFilter};
}

export function useFetchEvent(id) {

    const [result, setResult] = React.useState({}),
        [ failed, toggleFailed] = React.useState(false),
        [error , setError] = React.useState(""),
        [loaded, toggleLoaded] = React.useState(false);

    async function loadCall(controller){
        try{
            toggleLoaded(false);
            toggleFailed( false);
            setError( "");
            setResult({});

            const response = await axios.get(`${BASE_URL}/events/${id}`, {
                headers: {
                    'novi-education-project-id': import.meta.env.VITE_API_KEY,
                    signal: controller.signal
                },
                params: {
                    'limit': 10
                    ,'sort': "eventDT"
                    ,"eventDT[gt]":new Date()
                }
            });

            response.data.genres = JSON.parse(response.data.genres);
            response.data.location = JSON.parse(response.data.location);

            setResult(response.data);
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

export function useFetchFriends(id) {

    const [result, setResult] = React.useState({}),
        [ failed, toggleFailed] = React.useState(false),
        [error , setError] = React.useState(""),
        [loaded, toggleLoaded] = React.useState(false);

    async function loadCall(controller){
        try{
            toggleLoaded(false);
            toggleFailed( false);
            setError( "");
            setResult([]);

            const response = await axios.get(`${BASE_URL}/events/${id}`, {
                headers: {
                    'novi-education-project-id': import.meta.env.VITE_API_KEY,
                    signal: controller.signal
                },
                params: {
                    'limit': 10
                    ,'sort': "eventDT"
                    ,"eventDT[gt]":new Date()
                }
            });

            setResult([
                {
                    id:1,
                    name:"Pietje Pub"
                },
                {
                    id:2,
                    name:"Bob de Brouwer"
                },
                {
                    id:3,
                    name:"Fee Sneus"
                },
                {
                    id:4,
                    name:"Bertje Gab"
                }
            ]);
            // setResult(response.data);
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