import { createIcon } from "@chakra-ui/icons";

// using `path`
const RedStamp = createIcon({
  displayName: "RedStamp",
  viewBox: "0 0 52 52",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: [
    <g filter="url(#red-stamp-a)">
      <path fill="url(#red-stamp-b)" d="M0 0h52v52H0z" />
    </g>,
    <defs>
      <pattern
        id="red-stamp-b"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#c" transform="scale(.00087)" />
      </pattern>
      <filter
        id="red-stamp-a"
        width="53"
        height="53"
        x="-1"
        y="0"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx="-1" dy="1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
        <feBlend in2="shape" result="effect1_innerShadow_635_4618" />
      </filter>
      <image
        id="c"
        width="1184"
        height="1152"
      />
    </defs>,
  ],
});

export default RedStamp;