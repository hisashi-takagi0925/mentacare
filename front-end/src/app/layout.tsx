import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { AuthRouter } from "@/_components/AuthRouter";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <AppRouterCacheProvider>
            <AuthRouter>{children}</AuthRouter>
          </AppRouterCacheProvider>
        </body>
      </UserProvider>
    </html>
  );
}
