import React from 'react';

const Modal = (props) => {
    return (
        <div>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={() => props.setModalData(null)} htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <figure><img className='w-full h-60' src={props.data.img} alt="Shoes" /></figure>

                    <h3 className="text-lg font-bold">{props.data.name}</h3>
                    <p>Price : {props.data.price}</p>
                    <div className="badge badge-outline">Action : {props.data.action}</div>
                    <div className="badge badge-outline">Bullet : {props.data.bullet}</div>
                    <div className="badge badge-outline">Capacity : {props.data.capacity}</div>
                </div>
            </div>
        </div >
    );
};

export default Modal;