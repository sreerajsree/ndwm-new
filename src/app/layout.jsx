import RootLayout from "@/components/RootLayout";
import "./globals.css";

export const metadata = {
  title: {
    template: "Abdullah",
    default: "Abdullah",
  },
};

export default function Layout({ children }) {
  return (
    <html
      lang="en"
      className="h-full bg-indigo-900 text-base antialiased text-neutral-100"
    >
      <body className="flex min-h-full flex-col lowercase">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
