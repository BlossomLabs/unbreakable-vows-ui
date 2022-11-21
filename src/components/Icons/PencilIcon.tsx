import { createIcon } from "@chakra-ui/icons";

// using `path`
const PencilIcon = createIcon({
  displayName: "PencilIcon",
  viewBox: "0 0 23 23",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <path
      stroke="#000"
      strokeLinecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M16.68 2.784a2.827 2.827 0 1 1 4 4l-13.5 13.5-5.5 1.5 1.5-5.5 13.5-13.5Z"
    />
  ),
});

export default PencilIcon;
