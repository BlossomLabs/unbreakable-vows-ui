import { createIcon } from "@chakra-ui/icons";

// using `path`
const HeartIcon = createIcon({
  displayName: "HeartIcon",
  viewBox: "0 0 25 24",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <path
      fill="#FCDA82"
      fillRule="evenodd"
      d="M15.083 3.433a6.019 6.019 0 0 1 4.487 0c.712.286 1.36.707 1.908 1.238a5.72 5.72 0 0 1 1.28 1.858 5.598 5.598 0 0 1 0 4.4 5.72 5.72 0 0 1-1.28 1.859l-8.247 8a.75.75 0 0 1-1.044 0l-8.247-8a5.655 5.655 0 0 1-1.731-4.059c0-1.527.625-2.986 1.73-4.059A5.963 5.963 0 0 1 8.092 3c1.553 0 3.046.599 4.151 1.67l.467.453.466-.452a5.895 5.895 0 0 1 1.908-1.238Zm5.35 2.314a4.393 4.393 0 0 0-1.422-.922 4.519 4.519 0 0 0-3.369 0 4.395 4.395 0 0 0-1.422.922l-.989.96a.75.75 0 0 1-1.044 0l-.99-.96A4.463 4.463 0 0 0 8.092 4.5c-1.17 0-2.286.451-3.107 1.247A4.155 4.155 0 0 0 3.71 8.729c0 1.114.456 2.188 1.275 2.982l7.725 7.494 7.724-7.494c.406-.393.727-.86.945-1.371a4.1 4.1 0 0 0 0-3.222 4.223 4.223 0 0 0-.945-1.371Z"
      clipRule="evenodd"
    />
  ),
});

export default HeartIcon;
