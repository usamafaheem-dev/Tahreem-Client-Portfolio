"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface PortfolioData {
    hero: {
        firstName: string;
        lastName: string;
        title: string;
        qaWords: string[];
        typewriterSentences: string[];
        cvPdf: string;
        heroImage: string;
        heroAnimation: string;
        stat1Value: string;
        stat1Label: string;
        stat2Value: string;
        stat2Label: string;
    };
    about: {
        heading: string;
        subheading: string;
        description: string;
        aboutImage: string;
        stats: {
            accuracy: string;
            experienceYears: string;
        };
        features: { title: string; desc: string; }[];
    };
    contact: {
        email: string;
        phone: string;
        whatsapp: string;
        location: string;
        linkedin: string;
        github: string;
    };
    experience: {
        id: number;
        role: string;
        company: string;
        date: string;
        description: string;
        type: string;
    }[];
    projects: {
        id: number;
        title: string;
        link: string;
        type: string;
        image: string;
        description: string;
        testing: string[];
        tools: string[];
        bugs: string;
        color: string;
    }[];
    footer: {
        brandName: string;
        brandLastName: string;
        tagline: string;
        copyright: string;
        designCredit: string;
    };
    settings: {
        password: string;
        primaryColor: string;
        accentColor: string;
        fontColor: string;
        heroAnimation: string;
    };
}

interface PortfolioContextType {
    data: PortfolioData | null;
    loading: boolean;
    refreshData: () => Promise<void>;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState<PortfolioData | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await fetch('/api/portfolio', { cache: 'no-store' });
            if (res.ok) {
                const json = await res.json();
                setData(json);
            }
        } catch (error) {
            console.error('Failed to fetch portfolio data', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <PortfolioContext.Provider value={{ data, loading, refreshData: fetchData }}>
            {children}
        </PortfolioContext.Provider>
    );
};

export const usePortfolio = () => {
    const context = useContext(PortfolioContext);
    if (context === undefined) {
        throw new Error('usePortfolio must be used within a PortfolioProvider');
    }
    return context;
};
