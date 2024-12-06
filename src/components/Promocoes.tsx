import React, { useState } from 'react'
import PaginatedItems from './PaginatedItems'
import Modal from 'react-modal';
import { Flip, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Promocoes = () => {

  const notify = () => toast.success('Enviado com sucesso!', {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Flip,
  });

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Flip}
      />
    </div>
  );

}

export default Promocoes


