import axios from "axios";
import {useState} from "react";
import {useSafeCall} from "./util/apiUtils.js";
const BASE_URL = "https://novi-backend-api-wgsgz.ondigitalocean.app/api";

export function useFetchEventsList() {
    const [result, setResult] = useState([]),
        [ failed, toggleFailed] = useState(false),
        [error , setError] = useState(""),
        [loaded, toggleLoaded] = useState(false),
        [filter, setFilter] = useState({});

    //TODO: memoization
    async function loadCall(controller){
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

    useSafeCall(loadCall);
    useSafeCall(loadCall,[filter]);

    return {result,loaded,failed,error, setFilter};
}

export function useFetchEvent(id) {
    const [result, setResult] = useState({}),
        [ failed, toggleFailed] = useState(false),
        [error , setError] = useState(""),
        [loaded, toggleLoaded] = useState(false);

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

    useSafeCall(loadCall);

    return {result,loaded,failed,error};
}

export function useFetchFriends(id) {
    const [result, setResult] = useState({}),
        [ failed, toggleFailed] = useState(false),
        [error , setError] = useState(""),
        [loaded, toggleLoaded] = useState(false);

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

    useSafeCall(loadCall);

    return {result,loaded,failed,error};
}

export function useCreateEvent() {
    const [result, setResult] = useState({}),
        [ failed, toggleFailed] = useState(false),
        [error , setError] = useState(""),
        [executing, toggleExecuting] = useState(false);

    async function postCall( data){
        try{
            toggleExecuting(true);
            toggleFailed( false);
            setError( "");
            setResult({});

            console.log("create event: ", data);
            // const response = await axios.post(`${BASE_URL}/events/`, {
            //     headers: {
            //         'novi-education-project-id': import.meta.env.VITE_API_KEY,
            //         signal: controller.signal
            //     }
            // });

            setResult({});
        }
        catch(err){
            console.warn(err);
            toggleFailed( true);
            setError( err.message);
        }
        finally {
            toggleExecuting(false);
        }
    }

    async function createEvent(data,onSucces){
        try {
            await postCall(data);
            onSucces(true);
        }
        catch(err){
            console.warn(err);
            onSucces(false);
        }
    }

    return {result, executing,failed,error, createEvent};
}