    /* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';

const RequestCard = ({ type, onAccept, title, description, startDate, endDate, amount, clientName, clientMail }) => {

    return (
        <div className="border border-black flex-grow-1 rounded-lg">
            <div className="flex flex-col gap-2 p-2">
                <h1 className="text-xl font-semibold">{title}</h1>
                <p className="text-gray-700 h-[120px] overflow-y-scroll scrollbar-hide">
                    {description}
                </p>
                <hr />
                <div>
                    <h2 className="font-medium">{startDate} - {endDate}</h2>
                    <h3 className="text-gray-700">{amount}</h3>
                </div>
                <hr />
                <div>
                    <h2 className="font-medium">{clientName}</h2>
                    <h3 className="text-gray-700">{clientMail}</h3>
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
