import React from "react";

type Props = {
    className?: string;
};

const NodeJs = (props: Props) => {
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
                d="M29.6531 49.1881C29.4562 49.1881 29.2594 49.1324 29.0813 49.0395L27.2812 47.9809C27.0094 47.8323 27.1406 47.7766 27.2344 47.7487C27.5906 47.628 27.6656 47.6002 28.05 47.3773C28.0875 47.3587 28.1438 47.368 28.1813 47.3866L29.5687 48.2038C29.6156 48.2316 29.6906 48.2316 29.7375 48.2038L35.1562 45.1022C35.2031 45.0744 35.2406 45.0186 35.2406 44.9536V38.7598C35.2406 38.6948 35.2125 38.6391 35.1562 38.6113L29.7375 35.519C29.6906 35.4911 29.625 35.4911 29.5687 35.519L24.15 38.6113C24.0938 38.6391 24.0656 38.7041 24.0656 38.7598V44.9536C24.0656 45.0094 24.1031 45.0651 24.15 45.0929L25.6312 45.938C26.4375 46.3373 26.9344 45.8637 26.9344 45.3994V39.2799C26.9344 39.1963 27 39.122 27.0938 39.122H27.7781C27.8625 39.122 27.9375 39.187 27.9375 39.2799V45.3994C27.9375 46.4673 27.3562 47.0709 26.3344 47.0709C26.025 47.0709 25.7719 47.0709 25.0875 46.7366L23.6625 45.9287C23.3156 45.7244 23.0906 45.3529 23.0906 44.9536V38.7598C23.0906 38.3605 23.3062 37.9798 23.6625 37.7848L29.0813 34.6833C29.4281 34.4883 29.8781 34.4883 30.2156 34.6833L35.6344 37.7848C35.9813 37.9891 36.2063 38.3605 36.2063 38.7598V44.9536C36.2063 45.3529 35.9906 45.7337 35.6344 45.9287L30.2156 49.0302C30.0562 49.1324 29.8594 49.1881 29.6531 49.1881ZM34.0312 43.0779C34.0312 41.9171 33.2437 41.6107 31.575 41.3878C29.8875 41.1649 29.7188 41.0535 29.7188 40.6635C29.7188 40.3385 29.8594 39.9113 31.1062 39.9113C32.2219 39.9113 32.6344 40.1528 32.8031 40.8956C32.8219 40.9699 32.8781 41.0164 32.9531 41.0164H33.6562C33.7031 41.0164 33.7406 40.9978 33.7688 40.9699C33.7969 40.9328 33.8156 40.8956 33.8063 40.8492C33.6938 39.5677 32.8406 38.9734 31.1062 38.9734C29.5594 38.9734 28.6406 39.6234 28.6406 40.7006C28.6406 41.88 29.5594 42.1957 31.0406 42.3443C32.8125 42.5207 32.9531 42.7714 32.9531 43.115C32.9531 43.7186 32.4656 43.9693 31.3219 43.9693C29.8875 43.9693 29.5687 43.6165 29.4656 42.9107C29.4562 42.8364 29.3906 42.7807 29.3063 42.7807H28.6031C28.5188 42.7807 28.4437 42.8457 28.4437 42.9386C28.4437 43.8393 28.9406 44.9165 31.3125 44.9165C33.0469 44.9165 34.0312 44.2479 34.0312 43.0779ZM39.1406 38.4255C39.1406 38.992 38.6719 39.4563 38.1 39.4563C37.5281 39.4563 37.0594 38.992 37.0594 38.4255C37.0594 37.8405 37.5469 37.3948 38.1 37.3948C38.6625 37.3855 39.1406 37.8405 39.1406 38.4255ZM38.9719 38.4255C38.9719 37.9427 38.5781 37.5619 38.0906 37.5619C37.6125 37.5619 37.2188 37.9427 37.2188 38.4255C37.2188 38.9084 37.6125 39.2984 38.0906 39.2984C38.5781 39.2891 38.9719 38.8991 38.9719 38.4255ZM38.55 39.0013H38.3063C38.2969 38.9456 38.2594 38.6484 38.2594 38.6391C38.2406 38.5741 38.2219 38.537 38.1375 38.537H37.9313V39.0013H37.7063V37.8405H38.1094C38.25 37.8405 38.5219 37.8405 38.5219 38.147C38.5219 38.3605 38.3812 38.407 38.2969 38.4348C38.4562 38.4441 38.4656 38.5463 38.4938 38.6948C38.5031 38.7877 38.5219 38.9456 38.55 39.0013ZM38.2875 38.1841C38.2875 38.0262 38.175 38.0262 38.1188 38.0262H37.9313V38.3513H38.1094C38.2594 38.3513 38.2875 38.2491 38.2875 38.1841ZM12.8719 24.9515C12.8719 24.7008 12.7406 24.4779 12.525 24.3572L6.77813 21.0792C6.68438 21.0235 6.57188 20.9956 6.45938 20.9863H6.40313C6.29063 20.9863 6.1875 21.0235 6.08438 21.0792L0.346875 24.3572C0.13125 24.4779 0 24.71 0 24.9515L0.009375 33.7732C0.009375 33.8939 0.075 34.0054 0.178125 34.0704C0.28125 34.1354 0.4125 34.1354 0.525 34.0704L3.9375 32.1296C4.15312 31.9996 4.28438 31.7767 4.28438 31.5353V27.4123C4.28438 27.1708 4.41563 26.9387 4.63125 26.818L6.08438 25.9915C6.19688 25.9265 6.30937 25.8987 6.43125 25.8987C6.55312 25.8987 6.675 25.9265 6.77813 25.9915L8.23125 26.818C8.44688 26.9387 8.57812 27.1708 8.57812 27.4123V31.5353C8.57812 31.7767 8.70937 32.0089 8.925 32.1296L12.3375 34.0704C12.4406 34.1354 12.5813 34.1354 12.6844 34.0704C12.7875 34.0147 12.8531 33.8939 12.8531 33.7732L12.8719 24.9515ZM44.2969 15.3218V31.7024C44.2969 31.9439 44.1656 32.176 43.95 32.2967L38.2031 35.584C37.9875 35.7047 37.725 35.7047 37.5094 35.584L31.7625 32.2967C31.5469 32.176 31.4156 31.9439 31.4156 31.7024V25.1279C31.4156 24.8865 31.5469 24.6543 31.7625 24.5336L37.5094 21.2463C37.725 21.1256 37.9875 21.1256 38.2031 21.2463L39.6375 22.0635C39.7969 22.1564 40.0031 22.0357 40.0031 21.8592V13.1303C40.0031 12.8703 40.2844 12.7032 40.5188 12.8332L43.9406 14.7275C44.1562 14.839 44.2969 15.0711 44.2969 15.3218ZM39.9844 27.2916C39.9844 27.2266 39.9469 27.1708 39.9 27.143L37.9313 26.0101C37.875 25.9822 37.8094 25.9822 37.7531 26.0101L35.7844 27.143C35.7281 27.1708 35.7 27.2266 35.7 27.2916V29.5481C35.7 29.6131 35.7375 29.6688 35.7844 29.6966L37.7531 30.8203C37.8094 30.8481 37.875 30.8481 37.9219 30.8203L39.8906 29.6966C39.9469 29.6688 39.975 29.6131 39.975 29.5481V27.2916H39.9844ZM59.6531 27.2266C59.8687 27.1058 60 26.8737 60 26.6323V25.0443C60 24.8029 59.8687 24.5707 59.6531 24.45L53.9438 21.1628C53.7281 21.042 53.4656 21.042 53.25 21.1628L47.5031 24.45C47.2875 24.5707 47.1562 24.8029 47.1562 25.0443V31.6189C47.1562 31.8696 47.2875 32.0925 47.5031 32.2132L53.2125 35.4354C53.4187 35.5562 53.6813 35.5562 53.8969 35.4354L57.3469 33.5318C57.5813 33.4018 57.5813 33.0675 57.3469 32.9375L51.5625 29.6502C51.45 29.5852 51.3844 29.4738 51.3844 29.3531V27.2916C51.3844 27.1708 51.45 27.0594 51.5625 26.9944L53.3625 25.9637C53.4656 25.8987 53.6063 25.8987 53.7094 25.9637L55.5094 26.9944C55.6125 27.0594 55.6875 27.1708 55.6875 27.2916V28.9073C55.6875 29.1673 55.9781 29.3345 56.2125 29.2045L59.6531 27.2266ZM52.4062 27.5516C52.3688 27.5794 52.3406 27.6166 52.3406 27.663V28.9259C52.3406 28.9723 52.3688 29.0188 52.4062 29.0373L53.5125 29.6688C53.55 29.6966 53.6063 29.6966 53.6438 29.6688L54.75 29.0373C54.7875 29.0095 54.8156 28.9723 54.8156 28.9259V27.663C54.8156 27.6166 54.7875 27.5701 54.75 27.5516L53.6438 26.9201C53.6063 26.8923 53.55 26.8923 53.5125 26.9201L52.4062 27.5516ZM28.575 31.591V25.0536C28.575 24.8122 28.425 24.58 28.2094 24.4593L22.4813 21.1906C22.2844 21.0792 22.0125 21.0606 21.7875 21.1906L16.0594 24.4593C15.8438 24.58 15.6937 24.8029 15.6937 25.0536V31.591C15.6937 31.851 15.8719 32.0739 16.0687 32.1853L21.8063 35.454C22.0312 35.584 22.2938 35.5747 22.5 35.454L28.2188 32.1853C28.3875 32.0925 28.5094 31.9346 28.5563 31.7489C28.5656 31.7024 28.575 31.6467 28.575 31.591ZM21.6094 19.9927L21.5344 20.0391H21.6375L21.6094 19.9927ZM28.7531 32.0832L28.7156 32.0182V32.1017L28.7531 32.0832Z"
                fill="#373737"
                className="fill-primary"
                fillOpacity="0.65"
            />
        </svg>
    );
};

export default NodeJs;
