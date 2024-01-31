import * as React from 'react';
export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  cart: (props: IconProps) => (
    <svg
      height="512px"
      width="512px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      xmlSpace="preserve"
      fill={props.fillColor || '#000000'}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <path d="M8,0C7.447,0,7,0.447,7,1s0.447,1,1,1h7v56c0,1.104,0.896,2,2,2s2-0.896,2-2V2h7c0.553,0,1-0.447,1-1s-0.447-1-1-1H8z"></path>
          <path d="M58,11c-5.514,0-10,4.486-10,10s4.486,10,10,10s10-4.486,10-10S63.514,11,58,11z M58,29c-4.418,0-8-3.582-8-8s3.582-8,8-8 s8,3.582,8,8S62.418,29,58,29z"></path>
        </g>
      </g>
    </svg>
  ),
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
  box: (props: IconProps) => (
    <svg
      width="90"
      height="90"
      viewBox="0 0 90 90"
      fill="none"
      stroke-miterlimit="10"
      stroke-linejoin="round"
      {...props}
    >
      <path
        d="M89.0993 62.5839H56.3861L38.2295 78.6005H75.3795L89.0993 62.5839Z"
        fill="var(--shadow-color)"
        stroke="var(--shadow-color)"
      ></path>
      <path
        d="M74.8612 20.0518H27.3211L12.5215 36.3155V78.6005H60.0616L74.8612 62.3366V20.0518Z"
        fill="#D4744B"
        stroke="var(--shadow-color)"
      ></path>
      <path
        d="M12.5215 36.3155C13.0349 36.3155 60.0616 36.3155 60.0616 36.3155L74.8612 20.0518H27.3211L12.5215 36.3155Z"
        fill="#665DAC"
      ></path>
      <path
        d="M74.8612 20.0518H27.3211L12.5215 36.3155V78.6005H60.0616L74.8612 62.3366V20.0518Z"
        stroke="var(--shadow-color)"
      ></path>
      <path
        d="M60.0616 78.6005H12.5215V36.3155H43.6328H45.5114H60.0616V78.6005Z"
        fill="#F69267"
        stroke="var(--shadow-color)"
      ></path>
      <path
        d="M70.985 41.2823C70.8381 41.8864 70.1781 42.5334 70.1781 42.5334L65.3497 47.7767C65.3497 47.7767 65.1705 47.8892 64.8624 47.7571C64.6025 47.6457 64.5674 47.2721 64.5674 47.2721V44.7318C64.5674 44.7318 64.5674 44.1283 64.7007 43.7042C64.8343 43.28 65.2437 42.8961 65.2437 42.8961L70.3869 37.322C70.3869 37.322 70.6653 37.0746 70.9262 37.2743C71.1757 37.465 71.1024 37.8905 71.1024 37.8905V40.1073C71.1024 40.1073 71.1314 40.6783 70.985 41.2823Z"
        fill="#FABE64"
        stroke="var(--shadow-color)"
      ></path>
      <path d="M27.3213 20.0518V36.3155" stroke="var(--shadow-color)"></path>
      <path
        d="M31.9745 9.37566C31.9745 9.37566 30.9975 9.36677 29.9672 10.1194C28.9369 10.8721 28.5977 12.253 28.5977 12.253V36.2145H60.0761V36.1118L70.7355 24.5808V11.395C70.7355 11.395 70.8398 10.3898 70.0116 9.80705C69.3415 9.33545 68.4331 9.37587 68.4331 9.37587H31.9745V9.37566Z"
        fill="#FFD18C"
        stroke="var(--shadow-color)"
      ></path>
      <path
        d="M60.0761 36.1116L67.3587 28.2091V12.2527H28.5977V36.2143H60.0761V36.1116Z"
        fill="#FABE64"
        stroke="var(--shadow-color)"
      ></path>
      <path
        d="M51.3369 33.5748L60.0616 36.3155L62.0935 33.9226V18.2081H51.3369V33.5748Z"
        fill="#FFE1B3"
        stroke="var(--shadow-color)"
      ></path>
      <path
        d="M26.5592 15.5581C26.5592 15.5581 25.1339 15.4859 23.5484 16.1145C21.0515 17.1046 21.14 19.0221 21.14 19.0221V32.632H26.5592H49.9667H54.6005V18.2731C54.6005 18.2731 54.6755 17.1115 54.043 16.379C53.2061 15.4099 52.1049 15.5583 52.1049 15.5583H26.5592V15.5581Z"
        fill="#B35980"
        stroke="var(--shadow-color)"
      ></path>
      <path
        d="M49.9663 19.0219H21.1396V32.6318H49.9663V19.0219Z"
        fill="#EB81AF"
        stroke="var(--shadow-color)"
      ></path>
      <path
        d="M49.9668 19.0219C49.9668 19.0219 50.0228 16.7843 52.0551 16.3038C54.0611 15.8293 54.6006 18.0267 54.6006 18.0267"
        stroke="var(--shadow-color)"
      ></path>
      <path
        d="M53.2065 18.6117C53.2065 18.6117 53.2944 17.62 52.274 17.6293C51.3772 17.6374 51.3564 18.8522 51.3564 18.8522V32.4281H53.2065V18.6117V18.6117Z"
        fill="#FAE8E1"
        stroke="var(--shadow-color)"
      ></path>
      <path
        d="M21.112 24.7198C21.112 24.7198 19.6867 24.6474 18.1011 25.2761C15.6045 26.2663 15.6928 28.1837 15.6928 28.1837V36.3155H21.112H55.4286H60.0626V26.9503C60.0626 26.9503 60.1507 25.9529 59.417 25.2761C58.6833 24.5992 57.611 24.7198 57.611 24.7198H21.112V24.7198Z"
        fill="#49B889"
        stroke="var(--shadow-color)"
      ></path>
      <path
        d="M55.4282 28.1837H15.6924V36.3155H55.4282V28.1837Z"
        fill="#81D8B4"
        stroke="var(--shadow-color)"
      ></path>
      <path
        d="M55.4287 28.1837C55.4287 28.1837 55.1749 25.622 57.5671 24.9679C59.1738 24.5285 59.9423 26.0995 59.9423 26.0995"
        stroke="var(--shadow-color)"
      ></path>
      <path
        d="M58.6683 27.1702C58.6683 27.1702 58.5802 26.2011 57.6113 26.6416C56.795 27.0127 56.8184 28.2568 56.8184 28.2568V36.1117H58.6683V27.1702Z"
        fill="#DFEDB2"
        stroke="var(--shadow-color)"
      ></path>
      <path
        d="M67.3594 12.2528C67.3594 12.2528 67.2323 10.467 69.0199 9.98063C70.3787 9.61086 70.6835 10.8141 70.6835 10.8141"
        stroke="var(--shadow-color)"
      ></path>
      <path
        d="M29.4416 52.0862H17.4316V43.2768H31.953V49.7079L29.4416 52.0862Z"
        fill="#FFD8C8"
        stroke="var(--shadow-color)"
      ></path>
      <path d="M19.8184 46.4627H28.8039" stroke="var(--shadow-color)"></path>
      <path d="M19.8184 48.9294H28.8039" stroke="var(--shadow-color)"></path>
      <path
        d="M69.7079 25.7026V12.1889C69.7079 11.8028 69.4298 11.4898 69.087 11.4898C68.7439 11.4898 68.4658 11.8028 68.4658 12.1889V27.0584L69.7079 25.7026Z"
        fill="var(--shadow-color)"
      ></path>
      <path
        d="M60.0615 36.3155L74.8611 20.0518"
        stroke="var(--shadow-color)"
      ></path>
      <path
        d="M69.8846 42.8678L68.6426 44.3289V39.4238L69.8846 37.8817V42.8678Z"
        fill="#D6A356"
        stroke="var(--shadow-color)"
      ></path>
      <path
        d="M67.3574 40.9546V45.2552"
        stroke="var(--shadow-color)"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M66.8052 41.6443C66.8052 41.6443 64.5674 42.9571 64.5674 44.5053C64.5674 46.0535 64.5674 46.7841 64.5674 47.028C64.5674 47.2721 64.8082 48.3646 65.6864 47.4111C66.5643 46.4576 66.8052 46.1961 66.8052 46.1961V41.6443Z"
        fill="var(--shadow-color)"
        stroke="var(--shadow-color)"
      ></path>
    </svg>
  ),
};
