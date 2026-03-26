import { Toaster } from "sonner";
import PageLoader from "./PageLoader";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageLoader />
      {children}
      <Toaster richColors position="top-center" />
    </>
  );
}