import React from "react";

type Props = {
    className?: string;
};

const Bun = (props: Props) => {
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
                d="M30 5.57959C27.5466 5.57959 25.1278 6.66943 22.3312 8.2674C21.3726 8.81734 20.4194 9.37674 19.4719 9.94553C17.6536 11.0251 15.6197 12.2527 13.2487 13.4719H13.2478V13.4729C4.97203 17.7835 0 25.0022 0 32.7587C0 39.1838 3.38391 45.0033 8.81906 49.2033C14.2542 53.4033 21.7444 55.9965 30 55.9965C38.2552 55.9965 45.7448 53.4033 51.18 49.2033C56.6147 45.0033 60 39.1838 60 32.7587C60 24.9947 55.0266 17.784 46.7513 13.4738V13.4719C43.8234 11.9532 41.6002 10.628 39.6248 9.45006L39.6239 9.44865C38.7755 8.92928 37.9805 8.45303 37.1831 8.01521L37.1794 8.01334C34.5675 6.52365 32.4427 5.57959 30 5.57959ZM30 6.07553C32.3166 6.07553 34.3467 6.9685 36.9384 8.44646L36.9394 8.4474L36.9412 8.44834C37.7287 8.881 38.52 9.35303 39.367 9.87334L39.3684 9.87381H39.3694C41.3447 11.0522 43.5802 12.3877 46.5225 13.9135C54.6694 18.1566 59.5041 25.2066 59.5041 32.7587C59.5041 39.0099 56.2158 44.6855 50.8767 48.811C45.5381 52.9369 38.1516 55.5005 30 55.5005C21.848 55.5005 14.4609 52.9374 9.12187 48.8115C3.78281 44.6865 0.496406 39.0099 0.496406 32.7587C0.496406 25.2141 5.32922 18.1571 13.4761 13.9135C15.8653 12.6849 17.9105 11.4497 19.7259 10.3716C20.671 9.80444 21.6217 9.2466 22.5778 8.69818C25.3509 7.11381 27.6938 6.07553 30 6.07553ZM30 7.4935C27.9984 7.4935 25.9195 8.476 23.333 9.91834C22.4325 10.4265 21.502 10.9857 20.5195 11.5669V11.5679H20.5186C18.6703 12.6685 16.5562 13.913 14.1834 15.1571V15.1562C6.56766 19.1288 1.98328 25.7044 1.98328 32.7582C1.98328 38.6579 5.14734 43.9988 10.2234 47.8519C15.3 51.7051 22.2928 54.0835 30 54.0835C37.7072 54.0835 44.6995 51.7051 49.7756 47.8524C54.8522 43.9993 58.0163 38.6579 58.0163 32.7587C58.0163 25.704 53.4314 19.1297 45.8067 15.1712L45.8058 15.1707C42.8161 13.6454 40.4831 12.211 38.5847 11.0766H38.5837C37.7194 10.5647 36.9258 10.0904 36.2025 9.6685H36.2002C33.7852 8.28521 31.9852 7.4935 30 7.4935ZM31.8548 9.01975C31.8895 9.01975 31.9275 9.02678 31.9673 9.04178C37.973 11.4057 38.3859 15.9582 37.6561 18.6277C37.6411 18.6916 37.6017 18.7471 37.5464 18.7824C37.4905 18.8189 37.423 18.8331 37.3571 18.8225C37.2912 18.8118 37.2317 18.777 37.1902 18.7247C37.1503 18.6734 37.1324 18.6083 37.1405 18.5438C36.952 16.7498 36.3697 15.0196 35.4352 13.4766C34.4879 11.9144 33.2159 10.5742 31.7053 9.54662V9.51568C31.4766 9.3549 31.6059 9.01975 31.8548 9.01975ZM29.7577 9.20725C29.7914 9.20476 29.8253 9.20917 29.8573 9.22021C29.8893 9.23126 29.9187 9.24869 29.9438 9.27146C34.4813 13.8619 32.9667 18.1149 31.2291 20.2571C31.0388 20.4793 30.6984 20.2487 30.7931 19.981C31.3628 18.2804 31.5441 16.4738 31.3237 14.694C31.1005 12.9081 30.4829 11.1943 29.5158 9.67646V9.64647C29.3967 9.44537 29.5673 9.22365 29.7577 9.20865V9.20725ZM27.9562 9.39943C28.0814 9.38021 28.2141 9.4435 28.2459 9.61506C29.7694 15.6666 26.16 18.6662 23.4858 19.6683C23.1998 19.7752 23.0255 19.4077 23.2477 19.2169C24.6516 18.0415 25.7826 16.5741 26.5617 14.9171C27.3309 13.2777 27.7247 11.4873 27.7144 9.67646C27.7144 9.51943 27.8316 9.41818 27.9562 9.39943ZM25.7086 10.4682C25.8305 10.4991 25.9256 10.6027 25.8895 10.7551C24.517 16.8755 19.9237 18.1538 17.0677 17.9851C16.7663 17.993 16.7733 17.5862 17.0588 17.5018C18.8575 16.9866 20.5305 16.1058 21.9731 14.9143C23.3957 13.7387 24.5522 12.2741 25.3659 10.6177C25.3977 10.5577 25.4489 10.5103 25.5112 10.4832C25.5734 10.4561 25.643 10.451 25.7086 10.4687V10.4682ZM20.1427 26.7005C20.4652 26.6928 20.7877 26.7195 21.1045 26.7802C21.9466 26.9402 22.7241 27.3415 23.3423 27.9352C23.9499 28.5186 24.3666 29.2723 24.5377 30.0971C24.705 30.9157 24.6167 31.766 24.2845 32.5327C23.947 33.3094 23.3854 33.9676 22.6716 34.4232C21.9458 34.8871 21.102 35.1325 20.2406 35.1301C19.0828 35.1282 17.9733 34.6829 17.1548 33.8926C16.3369 33.1022 15.8775 32.0312 15.8775 30.9146C15.8783 30.0768 16.1355 29.2592 16.6144 28.5718C17.1021 27.8728 17.7849 27.3328 18.5775 27.0193C19.0761 26.8207 19.6061 26.7128 20.1427 26.7005ZM39.8273 26.7005C40.1503 26.6936 40.4731 26.7213 40.7902 26.783C41.6328 26.9451 42.41 27.3488 43.027 27.9451C43.6332 28.5305 44.0479 29.2859 44.2163 30.1116C44.3815 30.9317 44.2903 31.7827 43.9552 32.5491C43.6137 33.3255 43.0481 33.9822 42.3309 34.4349C41.602 34.8958 40.7558 35.1372 39.8934 35.1301C38.7389 35.1244 37.6331 34.6763 36.8203 33.8855C36.007 33.0957 35.5509 32.0283 35.5533 30.9146C35.5533 30.0793 35.8111 29.2632 36.292 28.5699C36.781 27.8703 37.4653 27.3303 38.2594 27.0174C38.759 26.8192 39.29 26.7119 39.8273 26.7005ZM18.982 28.0168C18.7401 28.0051 18.4984 28.0453 18.2733 28.1349C17.9754 28.2525 17.7187 28.4554 17.5355 28.718C17.3552 28.9762 17.2582 29.2834 17.2575 29.5983C17.2575 30.0169 17.43 30.4187 17.7356 30.7158C18.0468 31.0144 18.4613 31.1813 18.8925 31.1818C19.2161 31.1838 19.5334 31.0927 19.8066 30.9193C20.0754 30.7488 20.2872 30.5021 20.415 30.2105C20.5404 29.9222 20.5741 29.6023 20.5116 29.2941C20.4479 28.9844 20.292 28.7012 20.0644 28.4818C19.7726 28.1999 19.3873 28.0345 18.982 28.0168ZM38.6348 28.0168C38.3929 28.0051 38.1512 28.0453 37.9261 28.1349C37.6279 28.2525 37.371 28.4553 37.1873 28.718C37.0073 28.9763 36.9107 29.2835 36.9103 29.5983C36.9103 30.0146 37.0805 30.414 37.3828 30.7102C37.6902 31.0084 38.1003 31.1772 38.5284 31.1818H38.5439C38.8679 31.1839 39.1857 31.0928 39.4594 30.9193C39.7279 30.7486 39.9395 30.5019 40.0673 30.2105C40.1929 29.9222 40.2268 29.6023 40.1644 29.2941C40.1006 28.9843 39.9446 28.7011 39.7167 28.4818C39.4248 28.2001 39.0401 28.0348 38.6348 28.0168ZM25.2234 38.109L34.9172 38.124C34.947 38.1206 34.9772 38.1251 35.0047 38.1371C35.0322 38.1491 35.056 38.1682 35.0737 38.1924C34.8634 39.0116 34.4874 39.7789 33.9689 40.4471L33.9352 40.419C32.9358 39.5016 31.6139 38.979 30.2344 38.9565C29.4989 38.9624 28.7732 39.1259 28.1062 39.436C27.4545 39.7385 26.8761 40.1786 26.4108 40.726C25.766 39.9944 25.3029 39.1211 25.0589 38.1769C25.0664 38.1619 25.0978 38.1094 25.223 38.1094L25.2234 38.109ZM30.2742 39.7215C31.4508 39.7552 32.5711 40.2122 33.4158 41.0021L33.4547 41.034C33.2916 41.1985 33.1186 41.3555 32.9362 41.5027C32.1466 42.2363 31.1413 42.6956 30.0698 42.8124C28.9955 42.6943 27.989 42.2291 27.203 41.4872C27.1266 41.4263 27.053 41.3621 26.9803 41.2974H26.9831C27.3765 40.8091 27.8748 40.4156 28.4409 40.1462C29.0135 39.8724 29.6391 39.7276 30.2738 39.7219L30.2742 39.7215Z"
                fill="#373737"
                className="fill-primary"
                fillOpacity="0.65"
            />
        </svg>
    );
};

export default Bun;