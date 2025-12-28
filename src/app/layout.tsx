import {DesktopHeader} from "@/components/layout/DesktopHeader";
import {MobileHeader} from "@/components/layout/MobileHeader";
import "./globals.css";

export const metadata = {
  title: {
    default: "SmarTec",
    template: "%s | SmarTec",
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es">
      <body>
        <MobileHeader />
        <DesktopHeader />
        {children}
      </body>
    </html>
  );
}
