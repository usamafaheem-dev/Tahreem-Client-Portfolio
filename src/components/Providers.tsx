"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { PortfolioProvider } from "@/context/PortfolioContext";

export function Providers({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <PortfolioProvider>
                {children}
            </PortfolioProvider>
        </ThemeProvider>
    );
}
