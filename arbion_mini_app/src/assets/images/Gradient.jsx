// eslint-disable-next-line react/prop-types
function Gradient({ className }) {
    return (
      <div className={className}>
        <svg width="100vw" height="100vh" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.05" filter="url(#filter0_f_4_2251)">
        <ellipse cx="126" cy="179" rx="206" ry="280" fill="#D8D8D8"/>
        <ellipse cx="323" cy="103" rx="206" ry="280" fill="#F5F5F5"/>
        <ellipse cx="206" cy="280" rx="206" ry="280" transform="matrix(1 0 0 -1 -80 888)" fill="#D8D8D8"/>
        <ellipse cx="206" cy="280" rx="206" ry="280" transform="matrix(1 0 0 -1 117 964)" fill="#F5F5F5"/>
        </g>
        <defs>
        <filter id="filter0_f_4_2251" x="-380" y="-477" width="1209" height="1741" filterUnits="userSpaceOnUse" colorInterpolation="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_4_2251"/>
        </filter>
        </defs>
        </svg>
      </div>
    );
  }
  
  export default Gradient;
  