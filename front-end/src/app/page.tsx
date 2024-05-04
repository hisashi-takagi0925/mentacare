import { Button, Stack, TextField, Typography } from "@mui/material";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Stack spacing={2}>
        <a href="/api/auth/login">Login</a>
        <a href="/api/auth/logout">Logout</a>
        <Button variant="contained">Click me</Button>
      </Stack>
    </div>
  );
}
