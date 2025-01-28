import React, { createContext, useState, useContext, ReactNode } from "react";
import { useNavigate } from 'react-router-dom';

interface RatingContextType {
    ratings: {
        staff: number;
        clean: number;
        satisfaction: string;
        return: string;
        recommend: string;
    };
    setRatings: React.Dispatch<React.SetStateAction<RatingContextType["ratings"]>>;
}

// Create the context
const RatingContext = createContext<RatingContextType | undefined>(undefined);

// Create the Provider
export const RatingContextProvider = function ({ children }: { children: ReactNode }) {
    const [ratings, setRatings] = useState({
        staff: 0,
        clean: 0,
        satisfaction: '',
        return: '',
        recommend: ''
    });

    const navigate = useNavigate();

    const value = {
        ratings,
        setRatings,
    };

    return <RatingContext.Provider value={value}>{children}</RatingContext.Provider>;
};

// Custom hook to use the context
export const useRating = () => {
    const context = useContext(RatingContext);
    if (!context) {
        throw new Error("useRating must be used within a RatingContextProvider");
    }
    return context;
};
