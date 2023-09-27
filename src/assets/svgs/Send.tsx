type Props = {
    className?: string;
};
const Send = (props: Props) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={props.className}
        >
            <g clipPath="url(#clip0_612_1508)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.991 6.01009L5.39904 10.5631L9.59404 12.9911L13.293 9.29109C13.4807 9.10358 13.7351 8.99829 14.0004 8.99839C14.2657 8.99848 14.52 9.10395 14.7075 9.29159C14.8951 9.47923 15.0003 9.73367 15.0002 9.99894C15.0002 10.2642 14.8947 10.5186 14.707 10.7061L11.007 14.4061L13.437 18.6001L17.991 6.01009ZM18.314 3.76609C19.509 3.33309 20.667 4.49109 20.234 5.68609L14.952 20.2911C14.518 21.4891 12.882 21.6351 12.243 20.5321L9.02604 14.9741L3.46804 11.7571C2.36504 11.1181 2.51004 9.48209 3.70904 9.04809L18.314 3.76609Z"
                    fill="#373737"
                    fillOpacity="0.65"
                    className="fill-primary"
                />
            </g>
            <defs>
                <clipPath id="clip0_612_1508">
                    <rect width="24" height="24" fill="white" className="fill-default" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default Send;
