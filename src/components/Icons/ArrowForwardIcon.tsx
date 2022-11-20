import { createIcon } from "@chakra-ui/icons";

// using `path`
const ArrowForwardIcon = createIcon({
  displayName: "ArrowForwardIcon",
  viewBox: "0 0 24 24",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <path
      fill="#252527"
      d="M4 12a1 1 0 0 0 1 1h11.17l-4.88 4.88a1 1 0 0 0 1.415 1.415L20 12l-7.295-7.295a.997.997 0 0 0-1.41 1.41L16.17 11H5a1 1 0 0 0-1 1Z"
    />
  ),
});

export default ArrowForwardIcon;
