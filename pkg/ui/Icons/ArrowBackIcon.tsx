import { createIcon } from "@chakra-ui/icons";

// using `path`
const ArrowBackIcon = createIcon({
  displayName: "ArrowBackIcon",
  viewBox: "0 0 25 24",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <path
      fill="#252527"
      d="M20.106 11.91a1 1 0 0 0-1-1H7.936l4.88-4.88a1 1 0 1 0-1.415-1.415L4.106 11.91l7.295 7.295a.998.998 0 0 0 1.411-1.41L7.936 12.91h11.17a1 1 0 0 0 1-1Z"
    />
  ),
});

export default ArrowBackIcon;
