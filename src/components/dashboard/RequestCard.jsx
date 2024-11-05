/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';

const RequestCard = ({ type, onAccept }) => {

    return (
        <div className="border border-black flex-grow-1 rounded-lg">
            <div className="flex flex-col gap-2 p-2">
                <h1 className="text-xl font-semibold">Lorem, ipsum dolor.</h1>
                <p className="text-gray-700 h-[120px] overflow-y-scroll scrollbar-hide">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, nulla sint ratione eum illum eos nostrum sunt quia facere quis iusto nihil, aut maxime quo, repudiandae ab dignissimos iure beatae repellat obcaecati consequatur? Ratione, quidem laborum explicabo ex est itaque dignissimos debitis maxime corrupti labore ducimus. Cumque magni dicta autem!
                </p>
                <hr />
                <div>
                    <h2 className="font-medium">15th May - 16th May</h2>
                    <h3 className="text-gray-700">150 rupiya</h3>
                </div>
                <hr />
                <div>
                    <h2 className="font-medium">Jivesh Goel</h2>
                    <h3 className="text-gray-700">abc@gmail.com</h3>
                </div>
            </div>
            {type === 'open' && (
                <div className="flex border rounded-b-lg">
                    <button
                        onClick={onAccept}
                        className="w-full text-white font-semibold rounded-bl-lg px-4 py-2 bg-green-500">
                        Accept
                    </button>
                    <button className="w-full text-white font-semibold rounded-br-lg px-4 py-2 bg-red-500">
                        Reject
                    </button>
                </div>
            )}
        </div>
    );
};

export default RequestCard;
