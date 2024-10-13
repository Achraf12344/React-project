// @ts-ignore
import React from "react";
import Button from "./common/Button";
import OfferItem from "./OfferItem";
import {useJobContext} from "../context/JobContext";

export default function OffersAside() {
    const { jobItems, setSelectedItem } = useJobContext();

    return (
        <div className="col-span-4 bg-white">
            <div className="flex justify-between items-center p-3 border-b border-b-1">
                <span>
                    <span className="font-bold mr-1">{jobItems.length}</span>
                    Results
                </span>
                <div className="flex gap-2">
                    <Button type="secondary">Relevant</Button>
                    <Button>Recent</Button>
                </div>
            </div>
            <div className="max-h-[500px] overflow-y-auto">
                {jobItems.map((item) => (
                    <OfferItem
                        key={item.id}
                        item={item}
                        onClick={() => setSelectedItem(item)}
                    />
                ))}
            </div>
        </div>
    );
}
