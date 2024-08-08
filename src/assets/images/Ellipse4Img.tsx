import {FC} from "react";
import {IconProps} from "@/types.ts";

export const Eclipse4Img: FC<IconProps> = props => {
    return (
        <svg width="390" height="711" viewBox="0 0 390 711" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g filter="url(#filter0_f_45_296)">
                <ellipse cx="70.2598" cy="204.635" rx="141.663" ry="207.658" transform="rotate(-10.863 70.2598 204.635)"
                         fill="#4A1174"/>
            </g>
            <defs>
                <filter id="filter0_f_45_296" x="-374.301" y="-301.065" width="889.122" height="1011.4"
                        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_45_296"/>
                </filter>
            </defs>
        </svg>
    )
}
