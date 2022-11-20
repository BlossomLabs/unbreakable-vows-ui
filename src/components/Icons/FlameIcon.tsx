import { createIcon } from "@chakra-ui/icons";

// using `path`
const FlameIcon = createIcon({
  displayName: "FlameIcon",
  viewBox: "0 0 25 24",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: [
    <path
      fill="#FCDA82"
      fillRule="evenodd"
      d="m13.065 1.607-.386.643-.386-.643a.75.75 0 0 1 .772 0Zm-.386 1.536a20.264 20.264 0 0 0-3.207 2.718c-1.82 1.91-3.543 4.545-3.543 7.639a6.75 6.75 0 0 0 13.5 0c0-3.094-1.724-5.729-3.543-7.639a20.265 20.265 0 0 0-3.207-2.718Zm-.386-1.536.386.643.386-.643.003.002.005.003.02.012a7.904 7.904 0 0 1 .323.208 21.764 21.764 0 0 1 3.556 2.995c1.93 2.027 3.957 5.017 3.957 8.673a8.25 8.25 0 1 1-16.5 0c0-3.656 2.026-6.646 3.957-8.673a21.762 21.762 0 0 1 3.556-2.995 12.416 12.416 0 0 1 .322-.208l.02-.012.006-.003.003-.002Z"
      clipRule="evenodd"
    />,
    <path
      fill="#FCDA82"
      fillRule="evenodd"
      d="m13.065 10.607-.386.643-.386-.643a.75.75 0 0 1 .772 0Zm-.386 1.55-.13.098c-.325.25-.758.618-1.19 1.093-.872.96-1.68 2.287-1.68 3.902a3 3 0 0 0 6 0c0-1.615-.809-2.943-1.68-3.902a9.155 9.155 0 0 0-1.32-1.19Zm-.387-1.55.387.643.386-.643.002.001.004.003.012.007.04.025.135.088a10.662 10.662 0 0 1 1.85 1.608c1.004 1.104 2.07 2.776 2.07 4.911a4.5 4.5 0 1 1-9 0c0-2.135 1.067-3.807 2.07-4.91A10.656 10.656 0 0 1 12.1 10.73l.135-.088.04-.025.011-.007.004-.003h.002Zm.774 1.286Z"
      clipRule="evenodd"
    />,
  ],
});

export default FlameIcon;
