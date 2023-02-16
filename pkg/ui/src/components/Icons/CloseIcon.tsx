import { createIcon } from "@chakra-ui/icons";

// using `path`
const CloseIcon = createIcon({
  displayName: "CloseIcon",
  viewBox: "0 0 25 24",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <path
      fill="currentColor"
      d="M18.697 7.115a.997.997 0 1 0-1.41-1.41l-4.885 4.885-4.885-4.885a.997.997 0 0 0-1.41 1.41L10.992 12l-4.885 4.885a.997.997 0 0 0 1.41 1.41l4.885-4.885 4.885 4.885a.997.997 0 1 0 1.41-1.41L13.812 12l4.885-4.885Z"
    />
  ),
});

export default CloseIcon;
