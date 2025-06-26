import axios from "axios";
import React, {useCallback, useEffect} from "react";
import * as apiUtil from "./util/apiUtils.js";
import {useNavigate, useParams} from "react-router-dom";
const BASE_URL = "https://novi-backend-api-wgsgz.ondigitalocean.app/api";

export function useFetchNotificationsList(filter = {}) {

    const [result, setResult] = React.useState([]),
        [ failed, toggleFailed] = React.useState(false),
        [error , setError] = React.useState(""),
        [loaded, toggleLoaded] = React.useState(false)

    //TODO: memoization, DRY
    async function loadCall(controller){
        try{
            toggleLoaded(false);
            toggleFailed( false);
            setError( "");
            setResult([]);


            const response = await axios.get(`${BASE_URL}/notifications`, {
                headers: {
                    'novi-education-project-id': import.meta.env.VITE_API_KEY,
                    signal: controller.signal
                },
                params: {
                    ...filter,
                    'limit': filter?.limit || 10
                    ,'sort': filter?.sort || "-created"
                    ,"fields":filter?.id || "id"
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

    return {result,loaded,failed,error};
}

export function useFetchNotification(id) {

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


            const response = await axios.get(`${BASE_URL}/notifications/${id}`, {
                headers: {
                    'novi-education-project-id': import.meta.env.VITE_API_KEY,
                    signal: controller.signal
                },
                params: {
                    'limit': 1
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

    const handleLoad = useCallback((controller)=>{
        loadCall(controller);
    },[id]);

    apiUtil.useSafeCall(handleLoad,[handleLoad]);

    return {result,loaded,failed,error};
}

export function useFetchId(){

    const [loadID, setLoadID] = React.useState(0),
        [ failed, toggleFailed] = React.useState(false),
        [error , setError] = React.useState(""),
        [loaded, toggleLoaded] = React.useState(false);

    async function loadCall(controller){

        try{
            toggleLoaded(false);
            toggleFailed( false);
            setError( "");
            setLoadID(0);

            const response = await axios.get(`${BASE_URL}/notifications`, {
                headers: {
                    'novi-education-project-id': import.meta.env.VITE_API_KEY,
                    signal: controller.signal
                },
                params: {
                    'limit': 1
                    ,'sort':  "-created"
                    ,"fields": "id"
                }
            });

            setLoadID(response.data[0].id);

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

    return {id:loadID,loaded,failed,error};
}

export function useCreateEvent() {


    const [result, setResult] = React.useState({}),
        [ failed, toggleFailed] = React.useState(false),
        [error , setError] = React.useState(""),
        [executing, toggleExecuting] = React.useState(false);

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