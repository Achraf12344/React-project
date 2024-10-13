// @ts-ignore
import React from 'react';
import {toUpperCase} from "../lib/utils";

const OfferItem = React.memo(({ item, onClick }) => {
    const { initials, title, company, time } = item;

    return (
        <div
            className="flex items-center gap-4 border-b border-gray-300 py-3 px-5 cursor-pointer hover:bg-gray-100"
            onClick={onClick}
        >
            <span className="text-black bg-gray-200 py-2 px-3 font-bold rounded-lg">
                {toUpperCase(initials)}
            </span>
            <div className="flex flex-col">
                <span className="font-bold text-lg text-black text-opacity-80">{title}</span>
                <i className="text-gray-800">{company}</i>
            </div>
            <span className="text-gray-500 font-bold text-sm place-self-end">
                {time}
            </span>
        </div>
    );
});

export default OfferItem;
