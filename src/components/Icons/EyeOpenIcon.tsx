import { createIcon } from "@chakra-ui/icons";

// using `path`
const EyeOpenIcon = createIcon({
  displayName: "EyeOpenIcon",
  viewBox: "0 0 24 24",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: [
    <path
      stroke="#fff"
      strokeLinecap="round"
      stroke-linejoin="round"
      d="M12 5.25C4.5 5.25 1.5 12 1.5 12s3 6.75 10.5 6.75S22.5 12 22.5 12s-3-6.75-10.5-6.75Z"
    />,
    <path
      stroke="#fff"
      strokeLinecap="round"
      stroke-linejoin="round"
      d="M12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
    />,
  ],
});

export default EyeOpenIcon;
