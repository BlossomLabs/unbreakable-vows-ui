import { createIcon } from "@chakra-ui/icons";

// using `path`
const TerminateIcon = createIcon({
  displayName: "TerminateIcon",
  viewBox: "0 0 25 24",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: [
    <path
      fill="#FCDA82"
      fillRule="evenodd"
      d="M12.048 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM2.298 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75-9.75-4.365-9.75-9.75Z"
      clipRule="evenodd"
    />,
    <path
      fill="#FCDA82"
      fillRule="evenodd"
      d="M15.578 8.47a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-1.06-1.06l6-6a.75.75 0 0 1 1.06 0Z"
      clipRule="evenodd"
    />,
    <path
      fill="#FCDA82"
      fillRule="evenodd"
      d="M8.518 8.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />,
  ],
});

export default TerminateIcon;
