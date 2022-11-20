import { createIcon } from "@chakra-ui/icons";

// using `path`
const ChangesIcon = createIcon({
  displayName: "ChangesIcon",
  viewBox: "0 0 25 24",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: [
    <path
      fill="#FCDA82"
      fill-rule="evenodd"
      d="M11.506 12a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM8.88 13.125a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z"
      clip-rule="evenodd"
    />,
    <path
      fill="#FCDA82"
      fill-rule="evenodd"
      d="M10.714 13.917a.75.75 0 0 1 0 1.06L4.161 21.53a.75.75 0 1 1-1.06-1.06l6.553-6.553a.75.75 0 0 1 1.06 0Z"
      clip-rule="evenodd"
    />,
    <path
      fill="#FCDA82"
      fill-rule="evenodd"
      d="M11.617 4.548a.75.75 0 0 1 .794.172l7.5 7.5a.75.75 0 0 1 .172.793l-2.099 5.594a1.49 1.49 0 0 1-1.149.957h-.003L3.754 21.74a.75.75 0 0 1-.863-.863L5.067 7.804a1.51 1.51 0 0 1 .95-1.155l.004-.001 5.596-2.1ZM6.551 8.05a.01.01 0 0 0-.006.007l-2.002 12.03 12.034-2.001.002-.004 1.93-5.144-6.817-6.817L6.551 8.05Z"
      clip-rule="evenodd"
    />,
    <path
      fill="#FCDA82"
      fill-rule="evenodd"
      d="M14.302 1.927a1.5 1.5 0 0 1 1.645.329l6.428 6.428a1.5 1.5 0 0 1 0 2.132l-2.464 2.464a.75.75 0 0 1-1.06-1.06l2.47-2.47-.005-.004-6.435-6.435-.004.004L12.41 5.78a.75.75 0 0 1-1.06-1.06l2.463-2.464a1.5 1.5 0 0 1 .488-.33Z"
      clip-rule="evenodd"
    />,
  ],
});

export default ChangesIcon;
