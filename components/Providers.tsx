import { Toaster } from "sonner";
import PageLoader from "./PageLoader";
import { ThemeProvider } from "../providers/ThemeProvider"; // Note the path

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <PageLoader />
      {children}
      <Toaster richColors position="top-center" />
    </ThemeProvider>
  );
}