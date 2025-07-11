"use client";

import { useEffect, useState } from "react";

const MultiSectionSVG = (props: React.SVGProps<SVGSVGElement>) => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkScreen = () => setIsDesktop(window.innerWidth >= 1560);

        checkScreen();
        window.addEventListener("resize", checkScreen);

        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1921"
            height="3526"
            viewBox="0 0 1921 3526"
            fill="none"
            // preserveAspectRatio="none"
            preserveAspectRatio={isDesktop ? "none" : "xMidYMid meet"}
            {...props}
        >
            <g clipPath="url(#clip0_1_55)">
                <path
                    d="M1524.93 3283.96C1745.7 3292.29 1924.91 3109.2 1986.92 3016.62L2066.81 -2616L-61.3054 -2636.89L-122.54 3399.53C-32.6608 3359.54 186.801 3302.21 345.62 3392.75C544.143 3505.94 650.732 3530.96 870.155 3343C1089.58 3155.04 1248.96 3273.55 1524.93 3283.96Z"
                    fill="#F8F9FF"
                />
                <mask
                    id="mask0_1_55"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x={-93}
                    y={-26}
                    width={2129}
                    height={3481}
                >
                    <path
                        d="M1551.21 3233.28C1772.13 3235.82 1946.48 3048.1 2006.04 2953.92L2035.28 -25.5L-92.6553 9.42065V3392.01C-3.856 3349.68 214.027 3286.61 375.165 3372.96C576.588 3480.9 683.797 3503.12 898.215 3309.47C1112.63 3115.82 1275.07 3230.11 1551.21 3233.28Z"
                        fill="white"
                    />
                </mask>
                <g mask="url(#mask0_1_55)">
                    <g opacity="0.3" filter="url(#filter0_f_1_55)">
                        <g filter="url(#filter1_f_1_55)">
                            <path
                                d="M661.992 3494.24C833.031 3494.24 875.243 3221.68 875.243 3050.97C875.243 2880.26 1282.95 2776.7 1046.56 2666.99C936.859 2616.08 851.912 2629.68 736.869 2666.99C463.589 2755.64 352.298 3014.44 352.298 3185.15C352.298 3355.86 490.952 3494.24 661.992 3494.24Z"
                                fill="#90FFAC"
                            />
                        </g>
                        <g filter="url(#filter2_f_1_55)">
                            <path
                                d="M700.384 2629.27C794.451 2520.26 874.029 2344.67 871.691 2200.7C864.247 1742.26 -154.201 2160.6 -371.939 2564.11C-557.238 2907.5 -742.677 3591.69 -353.539 3620.43C-106.764 3638.66 161.006 3558.43 267.072 3334.86C330.024 3202.17 304.924 2983.79 393.103 2866.35C462.08 2774.47 625.328 2716.25 700.384 2629.27Z"
                                fill="#FFDEDA"
                            />
                        </g>
                        <g filter="url(#filter3_f_1_55)">
                            <circle
                                cx="1374.83"
                                cy="3152.2"
                                r="588.838"
                                fill="url(#paint0_linear_1_55)"
                            />
                        </g>
                        <g filter="url(#filter4_f_1_55)">
                            <circle
                                cx="1053.16"
                                cy="3074.93"
                                r="143.765"
                                fill="#1EFF00"
                            />
                        </g>
                    </g>
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_f_1_55"
                    x="-957.507"
                    y="1625.56"
                    width="3296.18"
                    height="6191.37"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="187.5"
                        result="effect1_foregroundBlur_1_55"
                    />
                </filter>
                <filter
                    id="filter1_f_1_55"
                    x="-47.7021"
                    y="2233.71"
                    width="1567.98"
                    height="1660.53"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="200"
                        result="effect1_foregroundBlur_1_55"
                    />
                </filter>
                <filter
                    id="filter2_f_1_55"
                    x="-982.507"
                    y="1600.56"
                    width="2254.25"
                    height="2422.37"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="200"
                        result="effect1_foregroundBlur_1_55"
                    />
                </filter>
                <filter
                    id="filter3_f_1_55"
                    x="385.993"
                    y="2163.36"
                    width="1977.68"
                    height="1977.67"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="200"
                        result="effect1_foregroundBlur_1_55"
                    />
                </filter>
                <filter
                    id="filter4_f_1_55"
                    x="609.392"
                    y="2631.16"
                    width="887.53"
                    height="887.53"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="150"
                        result="effect1_foregroundBlur_1_55"
                    />
                </filter>
                <linearGradient
                    id="paint0_linear_1_55"
                    x1="1374.83"
                    y1="2563.36"
                    x2="1374.83"
                    y2="3741.04"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#CC8BFF" />
                    <stop offset="1" stopColor="#E1FBFF" />
                </linearGradient>
                <clipPath id="clip0_1_55">
                    <rect
                        width="2191"
                        height="3526"
                        fill="white"
                        transform="translate(-123.89)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};

export default MultiSectionSVG;

// import React from "react";

// const MultiSectionSVG = (props: React.SVGProps<SVGSVGElement>) => {
//     return (
//         <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width={1920}
//             height={3526}
//             viewBox="0 0 1920 3526"
//             fill="none"
//             preserveAspectRatio="none"
//             {...props}
//         >
//             <g clipPath="url(#clip0_1_55)">
//                 <path
//                     d="M1524.82 3283.96C1745.59 3292.29 1924.8 3109.2 1986.81 3016.62L2066.7 -2616L-61.4157 -2636.89L-122.65 3399.53C-32.7711 3359.54 186.691 3302.21 345.509 3392.75C544.033 3505.94 650.622 3530.96 870.044 3343C1089.47 3155.04 1248.85 3273.55 1524.82 3283.96Z"
//                     fill="#F8F9FF"
//                 />
//                 <mask
//                     id="mask0_1_55"
//                     style={{ maskType: "alpha" }}
//                     maskUnits="userSpaceOnUse"
//                     x={-93}
//                     y={-26}
//                     width={2129}
//                     height={3481}
//                 >
//                     <path
//                         d="M1551.1 3233.28C1772.02 3235.82 1946.37 3048.1 2005.93 2953.92L2035.17 -25.5L-92.7656 9.42065V3392.01C-3.96635 3349.68 213.917 3286.61 375.055 3372.96C576.478 3480.9 683.687 3503.12 898.105 3309.47C1112.52 3115.82 1274.96 3230.11 1551.1 3233.28Z"
//                         fill="white"
//                     />
//                 </mask>
//                 <g mask="url(#mask0_1_55)">
//                     <g opacity="0.3" filter="url(#filter0_f_1_55)">
//                         <g filter="url(#filter1_f_1_55)">
//                             <path
//                                 d="M661.881 3494.24C832.92 3494.24 875.133 3221.68 875.133 3050.97C875.133 2880.26 1282.84 2776.7 1046.45 2666.99C936.748 2616.08 851.801 2629.68 736.759 2666.99C463.478 2755.64 352.188 3014.44 352.188 3185.15C352.188 3355.86 490.842 3494.24 661.881 3494.24Z"
//                                 fill="#90FFAC"
//                             />
//                         </g>
//                         <g filter="url(#filter2_f_1_55)">
//                             <path
//                                 d="M700.273 2629.27C794.341 2520.26 873.918 2344.67 871.581 2200.7C864.137 1742.26 -154.312 2160.6 -372.049 2564.11C-557.349 2907.5 -742.788 3591.69 -353.649 3620.43C-106.874 3638.66 160.895 3558.43 266.961 3334.86C329.914 3202.17 304.814 2983.79 392.992 2866.35C461.97 2774.47 625.218 2716.25 700.273 2629.27Z"
//                                 fill="#FFDEDA"
//                             />
//                         </g>
//                         <g filter="url(#filter3_f_1_55)">
//                             <circle
//                                 cx="1374.72"
//                                 cy="3152.2"
//                                 r="588.838"
//                                 fill="url(#paint0_linear_1_55)"
//                             />
//                         </g>
//                         <g filter="url(#filter4_f_1_55)">
//                             <circle
//                                 cx="1053.05"
//                                 cy="3074.93"
//                                 r="143.765"
//                                 fill="#1EFF00"
//                             />
//                         </g>
//                     </g>
//                     <rect
//                         x="1688.82"
//                         y="2196.56"
//                         width="82.9207"
//                         height="83.4109"
//                         rx="41.4604"
//                         transform="rotate(23.2202 1688.82 2196.56)"
//                         fill="url(#paint1_linear_1_55)"
//                     />
//                     <rect
//                         x="1677.79"
//                         y="2189.07"
//                         width="75.3008"
//                         height="75.3008"
//                         rx="37.6504"
//                         transform="rotate(23.2202 1677.79 2189.07)"
//                         stroke="#5472AA"
//                         strokeWidth="1.63697"
//                     />
//                     <rect
//                         width="23.7381"
//                         height="23.7321"
//                         rx="11.8661"
//                         transform="matrix(0.919048 0.394146 -0.394387 0.918944 1573.36 2188)"
//                         fill="#CFD9EE"
//                     />
//                     <rect
//                         width="11.3943"
//                         height="11.3914"
//                         rx="5.69571"
//                         transform="matrix(0.919048 0.394146 -0.394387 0.918944 1577.45 2265.15)"
//                         fill="#5472AA"
//                     />
//                     <rect
//                         x="0.996765"
//                         y="2.49465"
//                         width="19.9384"
//                         height="19.9325"
//                         rx="9.96624"
//                         transform="matrix(0.919048 0.394146 -0.394387 0.918944 1759.72 2327.71)"
//                         stroke="#EFA2B6"
//                         strokeWidth="3.79966"
//                     />
//                 </g>
//             </g>
//             <defs>
//                 <filter
//                     id="filter0_f_1_55"
//                     x="-957.617"
//                     y="1625.56"
//                     width="3296.18"
//                     height="6191.37"
//                     filterUnits="userSpaceOnUse"
//                     colorInterpolationFilters="sRGB"
//                 >
//                     <feFlood floodOpacity={0} result="BackgroundImageFix" />
//                     <feBlend
//                         mode="normal"
//                         in="SourceGraphic"
//                         in2="BackgroundImageFix"
//                         result="shape"
//                     />
//                     <feGaussianBlur
//                         stdDeviation="187.5"
//                         result="effect1_foregroundBlur_1_55"
//                     />
//                 </filter>
//                 <filter
//                     id="filter1_f_1_55"
//                     x="-47.8125"
//                     y="2233.71"
//                     width="1567.98"
//                     height="1660.53"
//                     filterUnits="userSpaceOnUse"
//                     colorInterpolationFilters="sRGB"
//                 >
//                     <feFlood floodOpacity={0} result="BackgroundImageFix" />
//                     <feBlend
//                         mode="normal"
//                         in="SourceGraphic"
//                         in2="BackgroundImageFix"
//                         result="shape"
//                     />
//                     <feGaussianBlur
//                         stdDeviation={200}
//                         result="effect1_foregroundBlur_1_55"
//                     />
//                 </filter>
//                 <filter
//                     id="filter2_f_1_55"
//                     x="-982.617"
//                     y="1600.56"
//                     width="2254.25"
//                     height="2422.37"
//                     filterUnits="userSpaceOnUse"
//                     colorInterpolationFilters="sRGB"
//                 >
//                     <feFlood floodOpacity={0} result="BackgroundImageFix" />
//                     <feBlend
//                         mode="normal"
//                         in="SourceGraphic"
//                         in2="BackgroundImageFix"
//                         result="shape"
//                     />
//                     <feGaussianBlur
//                         stdDeviation={200}
//                         result="effect1_foregroundBlur_1_55"
//                     />
//                 </filter>
//                 <filter
//                     id="filter3_f_1_55"
//                     x="385.883"
//                     y="2163.36"
//                     width="1977.68"
//                     height="1977.67"
//                     filterUnits="userSpaceOnUse"
//                     colorInterpolationFilters="sRGB"
//                 >
//                     <feFlood floodOpacity={0} result="BackgroundImageFix" />
//                     <feBlend
//                         mode="normal"
//                         in="SourceGraphic"
//                         in2="BackgroundImageFix"
//                         result="shape"
//                     />
//                     <feGaussianBlur
//                         stdDeviation={200}
//                         result="effect1_foregroundBlur_1_55"
//                     />
//                 </filter>
//                 <filter
//                     id="filter4_f_1_55"
//                     x="609.281"
//                     y="2631.16"
//                     width="887.53"
//                     height="887.53"
//                     filterUnits="userSpaceOnUse"
//                     colorInterpolationFilters="sRGB"
//                 >
//                     <feFlood floodOpacity={0} result="BackgroundImageFix" />
//                     <feBlend
//                         mode="normal"
//                         in="SourceGraphic"
//                         in2="BackgroundImageFix"
//                         result="shape"
//                     />
//                     <feGaussianBlur
//                         stdDeviation={150}
//                         result="effect1_foregroundBlur_1_55"
//                     />
//                 </filter>
//                 <linearGradient
//                     id="paint0_linear_1_55"
//                     x1="1374.72"
//                     y1="2563.36"
//                     x2="1374.72"
//                     y2="3741.04"
//                     gradientUnits="userSpaceOnUse"
//                 >
//                     <stop stopColor="#CC8BFF" />
//                     <stop offset={1} stopColor="#E1FBFF" />
//                 </linearGradient>
//                 <linearGradient
//                     id="paint1_linear_1_55"
//                     x1="1688.82"
//                     y1="2238.27"
//                     x2="1771.74"
//                     y2="2238.27"
//                     gradientUnits="userSpaceOnUse"
//                 >
//                     <stop stopColor="#FAD0C4" />
//                     <stop offset="0.01" stopColor="#FAD0C4" />
//                     <stop offset={1} stopColor="#FFD1FF" />
//                 </linearGradient>
//                 <clipPath id="clip0_1_55">
//                     <rect
//                         width={2191}
//                         height={3526}
//                         fill="white"
//                         transform="translate(-124)"
//                     />
//                 </clipPath>
//             </defs>
//         </svg>
//     );
// };

// export default MultiSectionSVG;
