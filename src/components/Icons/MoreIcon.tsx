import { createIcon } from "@chakra-ui/icons";

// using `path`
const MoreIcon = createIcon({
  displayName: "MoreIcon",
  viewBox: "0 0 24 24",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <path
      stroke="#9E9693"
      strokeLinecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM19 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
  ),
});

export default MoreIcon;
