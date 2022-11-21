import { createIcon } from "@chakra-ui/icons";

// using `path`
const ClockIcon = createIcon({
  displayName: "ClockIcon",
  viewBox: "0 0 24 24",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: [
    <path
      stroke="#000"
      strokeLinecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    />,
    <path
      stroke="#000"
      strokeLinecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M12 6v6l4 2"
    />,
  ],
});

export default ClockIcon;
