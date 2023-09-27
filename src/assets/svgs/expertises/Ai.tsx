import React from "react";

type Props = {
    className?: string;
};

const Ai = (props: Props) => {
    return (
        <svg
            width="60"
            height="61"
            viewBox="0 0 60 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={props.className}
        >
            <path
                d="M26.325 27.6634C26.075 26.8884 25.85 26.1384 25.6 25.3634C25.35 24.5884 25.125 23.8634 24.925 23.1384C24.725 22.4384 24.55 21.7884 24.375 21.1884H24.325C24.1 22.2634 23.825 23.3384 23.475 24.4134C23.1 25.6134 22.725 26.8634 22.325 28.1134C21.975 29.3884 21.6 30.5634 21.225 31.6134H27.575C27.425 31.0859 27.225 30.4634 27 29.8109C26.775 29.1384 26.55 28.4134 26.325 27.6634ZM49.375 1.58838H10.625C4.75 1.58838 0 6.33838 0 12.2134V49.4634C0 55.3384 4.75 60.0884 10.625 60.0884H49.375C55.25 60.0884 60 55.3384 60 49.4634V12.2134C60 6.33838 55.25 1.58838 49.375 1.58838ZM36.75 42.9134H31.5225C31.35 42.9384 31.175 42.8134 31.125 42.6384L29.075 36.6884H19.775L17.875 42.5634C17.825 42.7884 17.625 42.9384 17.4 42.9159H12.7C12.425 42.9159 12.35 42.7634 12.425 42.4659L20.475 19.2884C20.55 19.0384 20.625 18.7634 20.725 18.4634C20.825 17.9384 20.875 17.3884 20.875 16.8384C20.85 16.7134 20.95 16.5884 21.075 16.5634H27.55C27.75 16.5634 27.85 16.6384 27.875 16.7634L37 42.5134C37.075 42.7859 37 42.9134 36.75 42.9134ZM45.25 42.5384C45.25 42.8134 45.1525 42.9384 44.9275 42.9384H40.025C39.775 42.9384 39.65 42.7859 39.65 42.5384V23.2884C39.65 23.0384 39.7525 22.9384 39.9775 22.9384H44.9275C45.1525 22.9384 45.25 23.0634 45.25 23.2884V42.5384ZM44.7275 19.9634C44.4323 20.2632 44.0763 20.4964 43.6834 20.6474C43.2906 20.7983 42.8701 20.8634 42.45 20.8384C41.625 20.8634 40.825 20.5384 40.2225 19.9634C39.6497 19.3371 39.3447 18.5116 39.3725 17.6634C39.3475 16.8134 39.6725 16.0134 40.27 15.4384C40.875 14.8634 41.675 14.5634 42.5 14.5634C43.4775 14.5634 44.2225 14.8634 44.775 15.4384C45.325 16.0384 45.625 16.8384 45.6 17.6634C45.625 18.5134 45.325 19.3384 44.7275 19.9634Z"
                fill="#373737"
                className="fill-primary"
                fillOpacity="0.65"
            />
        </svg>
    );
};

export default Ai;
