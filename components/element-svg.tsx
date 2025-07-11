import React from "react";

const ElementSVG = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={217}
            height={172}
            viewBox="0 0 217 172"
            fill="none"
            {...props}
        >
            <rect
                x="124.816"
                y="8.5625"
                width="82.9207"
                height="83.4109"
                rx="41.4604"
                transform="rotate(23.2202 124.816 8.5625)"
                fill="url(#paint0_linear_1_81)"
            />
            <rect
                x="113.785"
                y="1.07489"
                width="75.3008"
                height="75.3008"
                rx="37.6504"
                transform="rotate(23.2202 113.785 1.07489)"
                stroke="#5472AA"
                strokeWidth="1.63697"
            />
            <rect
                width="23.7381"
                height="23.7321"
                rx="11.8661"
                transform="matrix(0.919048 0.394146 -0.394387 0.918944 9.37109 0)"
                fill="#CFD9EE"
            />
            <rect
                width="11.3943"
                height="11.3914"
                rx="5.69571"
                transform="matrix(0.919048 0.394146 -0.394387 0.918944 13.457 77.1523)"
                fill="#5472AA"
            />
            <rect
                x="0.996765"
                y="2.49465"
                width="19.9384"
                height="19.9325"
                rx="9.96624"
                transform="matrix(0.919048 0.394146 -0.394387 0.918944 195.736 139.708)"
                stroke="#EFA2B6"
                strokeWidth="3.79966"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_1_81"
                    x1="124.816"
                    y1="50.268"
                    x2="207.737"
                    y2="50.268"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FAD0C4" />
                    <stop offset="0.01" stopColor="#FAD0C4" />
                    <stop offset={1} stopColor="#FFD1FF" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default ElementSVG;
