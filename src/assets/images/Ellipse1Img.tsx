import {FC} from "react";
import {IconProps} from "@/types.ts";

export const Eclipse1Img: FC<IconProps> = props => {
    return (
        <svg width="390" height="598" viewBox="0 0 390 598" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g filter="url(#filter0_f_45_297)">
                <ellipse cx="326.663" cy="481.693" rx="124.5" ry="182.5" transform="rotate(-10.863 326.663 481.693)"
                         fill="#4A1174"/>
            </g>
            <defs>
                <filter id="filter0_f_45_297" x="-100.384" y="0.913818" width="854.094" height="961.559"
                        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_45_297"/>
                </filter>
            </defs>
        </svg>
    )
}
