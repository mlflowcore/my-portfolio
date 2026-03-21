// Replaced Next.js Link with anchors

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Chhatra Neupane. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <a href="#" className="text-xs hover:underline underline-offset-4 text-muted-foreground hover:text-foreground transition-colors">
          Privacy
        </a>
        <a href="#" className="text-xs hover:underline underline-offset-4 text-muted-foreground hover:text-foreground transition-colors">
          Terms of Service
        </a>
      </nav>
    </footer>
  );
} 