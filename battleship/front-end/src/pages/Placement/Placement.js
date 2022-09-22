import "../../assets/css/Body.sass";
import React,{ useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * @returns Body page
 */
 export default function Placement() {
    const [goToHome, setgoToHome] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const [roomID, setRoomID] = useState("");

    function onLoad(){
        try{
            setRoomID(location.state.roomID);
        }catch(e){
            navigate("/");
        }
    }

    useEffect(() => {
        onLoad();
    }, []) // eslint-disable-line react-hooks/exhaustive-deps


    useEffect(() => {
        if(goToHome) {
            navigate("/");
        }
    }, [goToHome]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="Body">
            <div className="Header1">
                <h1>Plan Your Ships</h1>
                <h5>RoomID: { roomID }</h5>
            </div>
            <button className="back" onClick={ () => setgoToHome(true) }>Back</button>
        </div>
    );
 }