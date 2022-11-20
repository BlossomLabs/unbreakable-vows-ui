import { createIcon } from "@chakra-ui/icons";

// using `path`
const LockIcon = createIcon({
  displayName: "LockIcon",
  viewBox: "0 0 25 24",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: [
    <path
      fill="#E6E6E6"
      stroke="#E6E6E6"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2.083"
      d="M19.869 11h-14a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2Z"
    />,
    <path
      fill="#E6E6E6"
      fill-rule="evenodd"
      d="M12.869 3.042A3.958 3.958 0 0 0 8.91 7v4a1.042 1.042 0 0 1-2.083 0V7A6.042 6.042 0 1 1 18.91 7v4a1.042 1.042 0 0 1-2.083 0V7a3.958 3.958 0 0 0-3.958-3.958Z"
      clip-rule="evenodd"
    />,
  ],
});

export default LockIcon;
