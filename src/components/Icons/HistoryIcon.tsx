import { createIcon } from "@chakra-ui/icons";

// using `path`
const HistoryIcon = createIcon({
  displayName: "HistoryIcon",
  viewBox: "0 0 24 24",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: [
    <path
      fill="#FCDA82"
      fill-rule="evenodd"
      d="M12 6.75a.75.75 0 0 1 .75.75V12a.75.75 0 0 1-1.5 0V7.5a.75.75 0 0 1 .75-.75Z"
      clip-rule="evenodd"
    />,
    <path
      fill="#FCDA82"
      fill-rule="evenodd"
      d="M11.35 11.625a.75.75 0 0 1 1.025-.275l3.9 2.25a.75.75 0 1 1-.75 1.3l-3.9-2.25a.75.75 0 0 1-.274-1.025ZM21.019 4.847a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-.75.75h-3.75a.75.75 0 1 1 0-1.5h3v-3a.75.75 0 0 1 .75-.75Z"
      clip-rule="evenodd"
    />,
    <path
      fill="#FCDA82"
      fill-rule="evenodd"
      d="M13.46 4.645A7.5 7.5 0 1 0 17.3 17.3a.75.75 0 1 1 1.062 1.06 9 9 0 1 1 0-12.723l3.186 3.178a.75.75 0 0 1-1.059 1.062l-3.188-3.18a7.5 7.5 0 0 0-3.84-2.053Z"
      clip-rule="evenodd"
    />,
  ],
});

export default HistoryIcon;
