import React from "react";

type Props = {
    className?: string;
};

const StyledComponents = (props: Props) => {
    return (
        <svg
            width="60"
            height="61"
            viewBox="0 0 60 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={props.className}
        >
            <g clipPath="url(#clip0_608_568)">
                <path
                    d="M15.2452 29.5979C15.014 32.5489 17.572 34.7225 19.3177 34.7225C21.0658 34.6399 27.8741 28.825 27.8741 28.825C31.0763 24.7205 31.0901 22.8954 31.0901 21.4609C30.823 15.1277 19.4386 24.7738 15.2452 29.5979ZM43.4074 27.1466C44.9528 23.8318 42.8737 20.1502 38.3514 23.3839C34.7578 25.6989 30.1054 30.4611 27.8788 32.3254C26.846 34.4395 29.464 40.2415 33.6126 37.1781C38.5163 33.5673 42.0972 30.172 43.4074 27.1466ZM47.6162 7.09441L48.6121 0.788086H59.5999V12.2999L55.573 12.3486L50.7243 28.9932C51.0261 34.8676 48.0869 34.9632 47.7115 37.6587C46.7678 44.4333 39.2928 49.9765 36.4349 49.9765C34.5288 49.9205 33.1354 47.7063 32.6674 45.777C38.0416 39.7523 45.2686 35.0179 45.2686 35.0179C45.7199 31.8495 44.7281 30.8407 48.0636 28.1408L51.2466 11.1793C48.5282 9.36 47.2598 9.38824 47.6162 7.09441ZM26.1692 35.1843C28.956 40.8754 32.9827 41.0237 39.2256 33.7781C39.374 34.448 39.5364 35.1498 39.2383 36.835C26.5386 48.3473 14.5771 59.5518 10.9362 60.7881H0.399902V57.924C2.11346 55.5156 16.1767 43.7595 26.1692 35.1843ZM44.9384 46.2034C44.3667 51.1295 39.9353 55.4401 34.0139 60.7881H15.2475L31.0683 47.2816C33.7993 53.5811 38.6503 52.6685 44.9385 46.2034H44.9384ZM22.7456 35.0221L0.399902 54.3257V41.8018L13.5499 30.9521C14.2534 34.9905 18.5629 38.5466 22.7456 35.0223V35.0221Z"
                    fill="#373737"
                    className="fill-primary"
                    fillOpacity="0.65"
                />
            </g>
            <defs>
                <clipPath id="clip0_608_568">
                    <rect
                        width="59.2"
                        height="60"
                        fill="white"
                        className="fill-default"
                        transform="translate(0.399902 0.788086)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};

export default StyledComponents;
