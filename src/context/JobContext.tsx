import { createContext, useContext, useState, useEffect } from 'react';

const JobContext = createContext();

export const JobProvider = ({ children }) => {
    const [jobItems, setJobItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null); // Add selectedItem state

    useEffect(() => {
        // @ts-ignore
        const fetchJobItems = async () => {
            try {
                const response = await fetch('https://670bbe237e5a228ec1ce7757.mockapi.io/api/offers/offers');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setJobItems(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchJobItems();
    }, []);

    return (
        <JobContext.Provider value={{ jobItems, loading, error, selectedItem, setSelectedItem }}>
            {children}
        </JobContext.Provider>
    );
};

export const useJobContext = () => {
    return useContext(JobContext);
};
