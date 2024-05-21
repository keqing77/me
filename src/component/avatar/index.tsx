import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";

export default function BasicAvatar() {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Avatar
        variant="soft"
        alt="keqing"
        src="/avatar.jpeg"
        size="lg"
        sx={{ width: "120px", height: "120px" }}
      />
    </Box>
  );
}
