import { useGetCurrentUser } from '@/Shared/hook/useGetCurrentUser';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useGetHistory = () => {
    const { currentUser } = useGetCurrentUser();
    const [history, setHistory] = useState([]);
    const { Id } = useParams();

    const getHistory = async () => {
        try {
            const UserId = Id || currentUser?._id;
            if (!UserId) {
                console.error("User ID is not available");
                return;
            }

            console.log(`Fetching history for userId: ${UserId}`);
            const response = await fetch(`http://localhost:3000/airtime/${UserId}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Fetched data:', data);
            setHistory(data);
        } catch (error) {
            console.error("Failed to fetch history:", error);
        }
    };

    useEffect(() => {
        if (currentUser) {
            getHistory();
        }
    }, [Id, currentUser]);

    return {
        history
    };
};

export default useGetHistory;