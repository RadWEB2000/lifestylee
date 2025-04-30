"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiArrowLeft as LeftArrow, FiArrowRight as RightArrow } from "react-icons/fi";

type Props = {
    currentPage: number;
    totalPages: number;
    basePath?: string;
};

export default function Pagination({ currentPage, totalPages, basePath = "/blog" }: Props) {
    const router = useRouter();
    const [inputPage, setInputPage] = useState<number>(currentPage);

    // 🛡️ Auto-redirect jeśli ktoś wpisał za dużą liczbę ręcznie (np. ?page=999)
    useEffect(() => {
        if (currentPage > totalPages && totalPages >= 1) {
            const safePage = totalPages;
            const href = safePage === 1 ? basePath : `${basePath}?page=${safePage}`;
            router.replace(href);
        }
    }, [currentPage, totalPages, basePath, router]);

    // 🔕 Ukryj paginację, jeśli niepotrzebna
    if (totalPages <= 1) return null;

    const goToPage = (page: number) => {
        const safePage = Math.max(1, Math.min(totalPages, page));
        const href = safePage === 1 ? basePath : `${basePath}?page=${safePage}`;
        router.push(href);
    };

    return (
        <div className="bg-red-200/40 flex items-center gap-2 rounded-md text-sm justify-end mt-10 w-[1075px] max-w-[95vw] mx-auto my-8">
            <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage <= 1}
                className="text-gray-500 disabled:opacity-30 cursor-pointer"
            >
                <LeftArrow />
            </button>

            <input
                type="number"
                className="w-12 text-center border rounded px-1 py-0.5"
                value={inputPage}
                min={1}
                max={totalPages}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputPage(Number(e.target.value))}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    if (e.key === "Enter") goToPage(inputPage);
                }}
            />

            <span className="text-stone-500">z {totalPages}</span>

            <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage >= totalPages}
                className="text-gray-500 disabled:opacity-30 cursor-pointer"
            >
                <RightArrow />
            </button>
        </div>
    );
}