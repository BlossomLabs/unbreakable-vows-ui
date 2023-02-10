import { createIcon } from "@chakra-ui/icons";

// using `path`
const CalendarIcon = createIcon({
  displayName: "CalendarIcon",
  viewBox: "0 0 24 24",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <path
      fill="#FCDA82"
      d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm0 18H4V10h16v11Zm0-13H4V5h16v3Z"
    />
  ),
});

export default CalendarIcon;
