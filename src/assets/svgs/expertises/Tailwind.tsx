import React from "react";

type Props = {
    className?: string;
};

const Tailwind = (props: Props) => {
    return (
        <svg
            width="60"
            height="61"
            viewBox="0 0 60 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={props.className}
        >
            <g clipPath="url(#clip0_608_614)">
                <path
                    d="M6.20016 27.0728C4.54641 27.0728 3.51562 27.9062 3.10547 29.5571C3.72656 28.727 4.45312 28.4209 5.27344 28.6313C5.74219 28.7485 6.08344 29.0893 6.45656 29.4756C7.06594 30.0962 7.76906 30.8124 9.30562 30.8124C10.957 30.8124 11.9883 29.979 12.3984 28.3276C11.7778 29.1587 11.0508 29.4643 10.2305 29.2538C9.76172 29.1367 9.42281 28.7963 9.04734 28.4101C8.43797 27.7895 7.73438 27.0728 6.20016 27.0728ZM26.7886 27.2963V33.6592H27.7261V27.2959L26.7886 27.2963ZM25.2305 27.4482C24.9023 27.4482 24.6333 27.7173 24.6333 28.0449C24.6333 28.3618 24.9028 28.6435 25.2305 28.6435C25.5581 28.6435 25.8398 28.3623 25.8291 28.0449C25.8291 27.7173 25.5586 27.4482 25.2305 27.4482ZM36.0117 27.4482C35.6836 27.4482 35.4145 27.7173 35.4145 28.0449C35.4145 28.3623 35.6841 28.6435 36.0117 28.6435C36.3525 28.6435 36.6211 28.3623 36.6103 28.0449C36.6103 27.7173 36.3398 27.4482 36.0117 27.4482ZM46.0205 27.5542V29.9092C45.6923 29.4512 45.1763 29.1713 44.497 29.1713C43.312 29.1713 42.3291 30.1674 42.3291 31.4673C42.3291 32.7563 43.312 33.7651 44.497 33.7651C45.1763 33.7651 45.6923 33.4838 46.0205 33.0254V33.6592H46.958V27.5546L46.0205 27.5542ZM17.5092 27.8471L16.5717 28.1274V29.2993H15.7734V30.2021H16.5717V32.3003C16.5717 33.4351 17.1455 33.8349 18.5986 33.6592V32.8149C17.8828 32.8496 17.5205 32.8623 17.5205 32.3003V30.2021H18.5859V29.2993H17.5092V27.8471ZM21.2006 29.1713C20.0156 29.1713 19.0327 30.1674 19.0327 31.4673C19.0327 32.7563 20.0161 33.7651 21.2006 33.7651C21.8803 33.7651 22.3945 33.4838 22.7241 33.0254V33.6592H23.6616V29.2993H22.7241V29.9087C22.3941 29.4512 21.8798 29.1713 21.2006 29.1713ZM39.8681 29.1821C39.2822 29.1821 38.8134 29.4057 38.5205 29.8745V29.312H37.583V33.6699H38.5205V31.3262C38.5205 30.4365 39.0127 30.0737 39.6338 30.0737C40.2197 30.0737 40.6059 30.4126 40.6059 31.081V33.6592H41.5434V30.9746C41.5434 29.8506 40.8403 29.1821 39.8681 29.1821ZM50.1094 29.1821C48.7856 29.1821 47.8022 30.1778 47.8022 31.4799C47.8022 32.769 48.7988 33.7763 50.1094 33.7763C50.9667 33.7763 51.7153 33.331 52.0669 32.6392L51.2592 32.1831C51.0464 32.5801 50.6255 32.8496 50.0981 32.8496C49.3364 32.8496 48.7505 32.2637 48.7505 31.4799C48.7505 30.6943 49.3256 30.1084 50.0981 30.1084C50.6255 30.1084 51.0595 30.3667 51.2466 30.7768L52.0556 30.3081C51.7041 29.627 50.9667 29.1821 50.1094 29.1821ZM54.2695 29.1948C53.3798 29.1948 52.6763 29.7095 52.6763 30.5298C52.6763 32.0874 55.02 31.6562 55.02 32.4282C55.02 32.7798 54.7031 32.9213 54.2822 32.9213C53.8003 32.9213 53.4487 32.687 53.31 32.2876L52.5005 32.7563C52.7822 33.377 53.4145 33.7763 54.2822 33.7763C55.2197 33.7763 55.9814 33.2968 55.9814 32.4287C55.9814 30.8115 53.6377 31.292 53.6377 30.4951C53.6377 30.1904 53.9311 30.0371 54.2695 30.0498C54.6342 30.0498 54.938 30.2017 55.0898 30.5424L55.8881 30.0957C55.582 29.5229 54.9858 29.1948 54.2695 29.1948ZM58.2905 29.1948C57.3984 29.1948 56.6958 29.7095 56.6958 30.5298C56.6958 32.0874 59.0395 31.6562 59.0395 32.4282C59.0395 32.7798 58.7222 32.9213 58.3013 32.9213C57.8213 32.9213 57.4697 32.687 57.3291 32.2876L56.52 32.7563C56.8012 33.377 57.4331 33.7763 58.3013 33.7763C59.2388 33.7763 60.0005 33.2968 60.0005 32.4287C60.0005 30.8115 57.6567 31.292 57.6567 30.4951C57.6567 30.1904 57.9502 30.0371 58.2905 30.0498C58.6533 30.0498 58.957 30.2017 59.1108 30.5424L59.9077 30.0957C59.6011 29.5229 59.0044 29.1948 58.2905 29.1948ZM24.7622 29.2993V33.6587H25.6997V29.2993H24.7622ZM28.4428 29.2993L29.8139 33.6587H30.7387L31.6528 30.7182L32.5552 33.6592H33.4819L34.853 29.2993H33.8569L32.9991 32.3115L32.0991 29.2993H31.1967L30.2812 32.3115L29.4384 29.2993H28.4423H28.4428ZM35.5434 29.2993V33.6587H36.4809V29.2993H35.5434ZM21.3398 30.0849C22.1255 30.0849 22.7241 30.6709 22.7241 31.4799C22.7241 32.2871 22.1255 32.8735 21.3398 32.8735C20.5561 32.8735 19.9702 32.2876 19.957 31.4799C19.957 30.6704 20.5566 30.0849 21.3398 30.0849ZM44.6381 30.0849C45.4219 30.0849 46.0205 30.6709 46.0205 31.4799C46.0205 32.2871 45.4219 32.8735 44.6377 32.8735C43.8525 32.8735 43.2534 32.2876 43.2534 31.4799C43.2534 30.6704 43.853 30.0849 44.6381 30.0849ZM3.09516 30.7881C1.44141 30.7881 0.410625 31.6196 0 33.2724C0.620625 32.4399 1.34766 32.1357 2.16797 32.3462C2.63672 32.4634 2.9775 32.8042 3.35062 33.1899C3.96047 33.811 4.66313 34.5268 6.19969 34.5268C7.85109 34.5268 8.88234 33.6938 9.2925 32.0424C8.67188 32.8735 7.94484 33.1796 7.12453 32.9668C6.65578 32.8496 6.31734 32.5107 5.94187 32.1245C5.34328 31.5015 4.64016 30.7881 3.09516 30.7881Z"
                    fill="#373737"
                    className="fill-primary"
                    fillOpacity="0.65"
                />
            </g>
            <defs>
                <clipPath id="clip0_608_614">
                    <rect
                        width="60"
                        height="60"
                        fill="white"
                        className="fill-default"
                        transform="translate(0 0.788086)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};

export default Tailwind;
