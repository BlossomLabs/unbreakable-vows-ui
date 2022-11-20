import { createIcon } from "@chakra-ui/icons";

// using `path`
const EyeClosedIcon = createIcon({
  displayName: "EyeClosedIcon",
  viewBox: "0 0 24 24",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <path
      stroke="#B7B2AF"
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M18.854 11.934 21 15.637M14.457 13.996l.666 3.778M9.535 13.988l-.666 3.788M5.137 11.934 2.99 15.656M3 9.834c1.575 1.95 4.463 4.415 9 4.415 4.538 0 7.425-2.465 9-4.415"
    />
  ),
});

export default EyeClosedIcon;
