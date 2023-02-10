import { createIcon } from "@chakra-ui/icons";

// using `path`
const PlusIcon = createIcon({
  displayName: "PlusIcon",
  viewBox: "0 0 15 14",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <path
      fill="#252527"
      d="M14.983 7a1 1 0 0 1-1 1h-5v5a1 1 0 1 1-2 0V8h-5a1 1 0 0 1 0-2h5V1a1 1 0 0 1 2 0v5h5a1 1 0 0 1 1 1Z"
    />
  ),
});

export default PlusIcon;
