"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FiArrowLeft as LeftArrow, FiArrowRight as RightArrow } from "react-icons/fi";

type Props = {
    currentPage: number;
    totalPages: number;
    basePath?: string;
};

export default function Pagination({ currentPage, totalPages, basePath = "/blog" }: Props) {
    const router = useRouter();

    useEffect(() => {
        if (currentPage > totalPages && totalPages >= 1) {
            const safePage = totalPages;
            const href = safePage === 1 ? basePath : `${basePath}?page=${safePage}`;
        router.replace(href);
        router.refresh(); 
        }
    }, [currentPage, totalPages, basePath, router]);

    if (totalPages <= 1) return null;

    const goToPage = (page: number) => {
        const safePage = Math.max(1, Math.min(totalPages, page));
        
        const href = safePage === 1 ? basePath : `${basePath}?page=${safePage}`;
        router.push(href);
        router.refresh(); 
    };

    return (
        <div className="flex items-center gap-2 rounded-md text-sm justify-end mt-10 w-[1075px] max-w-[95vw] mx-auto my-8">
            <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage <= 1}
                className="text-stone-800 disabled:opacity-30 cursor-pointer disabled:cursor-default"
            >
                <LeftArrow />
            </button>

            <span className="text-stone-800 cursor-default select-none">{currentPage} z {totalPages}</span>

            <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage >= totalPages}
                className="text-stone-800 disabled:opacity-30 cursor-pointer disabled:cursor-default"
            >
                <RightArrow />
            </button>
        </div>
    );
}