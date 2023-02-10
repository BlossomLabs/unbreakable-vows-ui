import { createIcon } from "@chakra-ui/icons";

// using `path`
const ChevronDownIcon = createIcon({
  displayName: "ChevronDownIcon",
  viewBox: "0 0 28 28",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: [
    <path
      fill="#FCDA82"
      fillRule="evenodd"
      d="m14.001 15.061 4.667-4.478a.305.305 0 0 1 .423.005l.82.801a.29.29 0 0 1 .005.415l-5.698 5.47a.28.28 0 0 1-.217.08.297.297 0 0 1-.217-.08l-5.698-5.47a.29.29 0 0 1 .005-.415l.82-.8a.305.305 0 0 1 .423-.006l4.667 4.478Z"
      clipRule="evenodd"
    />,
    <mask
      id="a"
      width="13"
      height="8"
      x="8"
      y="10"
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="m14.001 15.061 4.667-4.478a.305.305 0 0 1 .423.005l.82.801a.29.29 0 0 1 .005.415l-5.698 5.47a.28.28 0 0 1-.217.08.297.297 0 0 1-.217-.08l-5.698-5.47a.29.29 0 0 1 .005-.415l.82-.8a.305.305 0 0 1 .423-.006l4.667 4.478Z"
        clipRule="evenodd"
      />
    </mask>,
    <g mask="url(#a)">
      <path fill="#FCDA82" d="M8 8h12v12H8z" />
    </g>,
  ],
});

export default ChevronDownIcon;
