import {toUpperCase} from "../lib/utils";
import {useJobContext} from "../context/JobContext";

export default function OfferItemDetail() {
    const { selectedItem } = useJobContext();
    if (!selectedItem)
        return (
            <div className="col-span-8 bg-white relative flex justify-center items-center font-bold text-xl">
                Select a job to see details
            </div>
        );

    return (
        <div className="col-span-8 bg-white relative">
            <img
                src={selectedItem.image}
                alt="offer item"
                className="w-full h-[250px] object-cover"
            />
            <div className={`flex items-start text-white gap-8 px-16 absolute top-[27%]`}>
                <span className="w-[115px] h-[130px] flex justify-center items-center bg-green-400 text-3xl font-bold rounded-lg">
                    {toUpperCase(selectedItem.initials)}
                </span>
                <div className="flex flex-col">
                    <h3 className="font-bold text-3xl text-opacity-80">
                        {selectedItem.title}
                    </h3>
                    <i className="text-gray-300 font-bold text-lg">
                        {selectedItem.company}
                    </i>
                    <p className="text-black text-lg pt-10">
                        {selectedItem.description || "Job description goes here."}
                    </p>

                    <p className="flex justify-between pt-5 text-black">
                        <span>{selectedItem.type || "Full-time"}</span>
                        <span>{selectedItem.salary || "$85k - $100k"}</span>
                        <span>{selectedItem.location || "Global"}</span>
                    </p>

                    <p className="flex justify-between pt-5 text-black">
                        <span>Posted: {selectedItem.postedTime || "N/A"}</span>
                        <span>Experience: {selectedItem.experience || "N/A"}</span>
                    </p>

                    <p className="text-black text-lg pt-10 font-bold">
                        Qualifications:
                    </p>
                    <div className="flex flex-wrap gap-2 pt-5">
                        {selectedItem.qualifications && selectedItem.qualifications.map((qual, index) => (
                            <span key={index} className="bg-blue-200 text-blue-800 py-1 px-3 rounded-full text-sm">
                                {qual}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}