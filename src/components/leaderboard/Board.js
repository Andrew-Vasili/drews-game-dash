import React from 'react'
import Profiles from './Profiles';
import { Leaderboard } from './Database';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Board() {

  const notify = () => toast('🏆Team Name - Achievement Title', {
    position: "top-right",
    autoClose: 60000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark"
    });;

  return (
    <div className="board">
        <br/>
        <h1 className='leaderboard text-light onClick={notify}'>Robocode Leaderboard!</h1>

        <Profiles Leaderboard={Leaderboard}></Profiles>

        <div>
        <button className='popupButton' onClick={notify}>!</button>
        <ToastContainer
            />
        </div>

    </div>
  )
}
