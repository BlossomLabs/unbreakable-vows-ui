import { createIcon } from "@chakra-ui/icons";

// using `path`
const CopyIcon = createIcon({
  displayName: "CopyIcon",
  viewBox: "0 0 25 24",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: [
    <path
      fill="#FCDA82"
      fill-rule="evenodd"
      d="M7.578 3.75a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1 0-1.5h3.75V4.5h-10.5v3.75a.75.75 0 1 1-1.5 0v-4.5Z"
      clip-rule="evenodd"
    />,
    <path
      fill="#FCDA82"
      fill-rule="evenodd"
      d="M3.078 8.25a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-.75.75h-12a.75.75 0 0 1-.75-.75v-12Zm1.5.75v10.5h10.5V9h-10.5Z"
      clip-rule="evenodd"
    />,
  ],
});

export default CopyIcon;
