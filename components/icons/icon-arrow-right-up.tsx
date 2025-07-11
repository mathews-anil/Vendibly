import React from "react";

const IconArrowRightUp = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <path
                d="M6.5 18L18.5 6"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.75 6H18.5V15.75"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default IconArrowRightUp;
