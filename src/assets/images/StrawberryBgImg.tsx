import {FC} from "react";
import {IconProps} from "@/types.ts";

export const StrawberryBgImg: FC<IconProps> = props => {
    return (
        <svg width="390" height="551" viewBox="0 0 390 551" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g filter="url(#filter0_f_6067_180)">
                <ellipse cx="207.5" cy="453.945" rx="124.5" ry="17.0548" fill="black"/>
            </g>
            <g filter="url(#filter1_f_6067_180)">
                <ellipse cx="200" cy="275.438" rx="128" ry="145.534" fill="#CB10AC"/>
            </g>
            <defs>
                <filter id="filter0_f_6067_180" x="32.2" y="386.09" width="350.6" height="135.71"
                        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="25.4" result="effect1_foregroundBlur_6067_180"/>
                </filter>
                <filter id="filter1_f_6067_180" x="-57.8" y="0.10405" width="515.6" height="550.669"
                        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="64.9" result="effect1_foregroundBlur_6067_180"/>
                </filter>
            </defs>
        </svg>
    )
}
