import { createIcon } from "@chakra-ui/icons";

// using `path`
const WalletIcon = createIcon({
  displayName: "WalletIcon",
  viewBox: "0 0 30 30",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <path
      fill="#F3DC9F"
      d="M19.688 15a.938.938 0 0 0 0 1.875h1.875a.938.938 0 0 0 0-1.875h-1.875ZM6.563 3.75A2.813 2.813 0 0 0 3.75 6.563v15a4.688 4.688 0 0 0 4.688 4.687H22.5a3.75 3.75 0 0 0 3.75-3.75V11.25a3.75 3.75 0 0 0-1.875-3.248V7.5a3.75 3.75 0 0 0-3.75-3.75H6.562Zm0 1.875h14.062A1.875 1.875 0 0 1 22.5 7.5H6.562a.937.937 0 1 1 0-1.875Zm0 3.75H22.5a1.875 1.875 0 0 1 1.875 1.875V22.5a1.875 1.875 0 0 1-1.875 1.875H8.437a2.812 2.812 0 0 1-2.812-2.813V9.216c.293.103.61.159.938.159Z"
    />
  ),
});

export default WalletIcon;
