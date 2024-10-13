import OffersAside from "./offersAside";
import OfferItemDetail from "./OfferItemDetail";
import { useJobContext } from "../context/JobContext";
export default function MainComponent() {
    const { jobItems, loading, error, selectedItem, setSelectedItem } = useJobContext();

    if (loading) return <div className="flex justify-center items-center mt-10">Loading...</div>;
    if (error) return <div className="flex justify-center items-center mt-10">Error fetching jobs: {error.message}</div>;

    return (
        <div className="absolute right-1/2 left-1/2 top-1/4 -translate-x-1/2 w-10/12 h-[600px] grid grid-cols-12 bg-gray-700">
            <OffersAside />
            <OfferItemDetail />
        </div>
    );
}