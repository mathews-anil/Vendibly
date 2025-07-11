import React from "react";

const IconCheckMark = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            height={24}
            viewBox="0 0 25 24"
            fill="none"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.53 17.9999C10.254 17.9999 9.99001 17.8859 9.80101 17.6849L4.93801 12.5059C4.55901 12.1039 4.58001 11.4709 4.98201 11.0929C5.38501 10.7149 6.01801 10.7349 6.39501 11.1369L10.52 15.5279L18.928 6.32587C19.302 5.91687 19.934 5.88987 20.342 6.26187C20.749 6.63387 20.777 7.26687 20.405 7.67387L11.268 17.6739C11.081 17.8799 10.815 17.9979 10.537 17.9999H10.53Z"
                fill="#03133D"
            />
            <mask
                id="mask0_1_1478"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x={4}
                y={6}
                width={17}
                height={12}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.53 17.9999C10.254 17.9999 9.99001 17.8859 9.80101 17.6849L4.93801 12.5059C4.55901 12.1039 4.58001 11.4709 4.98201 11.0929C5.38501 10.7149 6.01801 10.7349 6.39501 11.1369L10.52 15.5279L18.928 6.32587C19.302 5.91687 19.934 5.88987 20.342 6.26187C20.749 6.63387 20.777 7.26687 20.405 7.67387L11.268 17.6739C11.081 17.8799 10.815 17.9979 10.537 17.9999H10.53Z"
                    fill="white"
                />
            </mask>
            <g mask="url(#mask0_1_1478)">
                <rect x="0.666626" width={24} height={24} fill="#FF6A3D" />
            </g>
        </svg>
    );
};

export default IconCheckMark;
