import { createIcon } from "@chakra-ui/icons";

// using `path`
const SearchIcon = createIcon({
  displayName: "SearchIcon",
  viewBox: "0 0 25 24",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <path
      stroke="#FCDA82"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M11.774 18a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714ZM20.345 19.715l-3.728-3.729"
    />
  ),
});

export default SearchIcon;
