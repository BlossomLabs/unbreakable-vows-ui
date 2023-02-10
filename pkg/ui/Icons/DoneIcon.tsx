import { createIcon } from "@chakra-ui/icons";

// using `path`
const DoneIcon = createIcon({
  displayName: "DoneIcon",
  viewBox: "0 0 24 24",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <path
      fill="#252527"
      d="m9 16.2-3.5-3.5a.99.99 0 1 0-1.4 1.4L9 19 20.3 7.7a.99.99 0 1 0-1.4-1.4L9 16.2Z"
    />
  ),
});

export default DoneIcon;
