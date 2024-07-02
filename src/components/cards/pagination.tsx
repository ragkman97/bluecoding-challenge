import React from "react";


const texts = {
    prev: 'Prev',
    next: 'Next',
}

interface PaginationProps {
    prev: (e: React.MouseEvent<HTMLButtonElement>) => void;
    next: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export function Pagination(props: PaginationProps) {
    return (
        <section>
            <button
                className="p-2 border border-gray-100 shadow rounded-full"
                onClick={props.prev}
            > {texts.prev} </button>
            <button
                className="p-2 border border-gray-100 shadow rounded-full"
                onClick={props.next}
            > {texts.next} </button>
        </section>
    )
}