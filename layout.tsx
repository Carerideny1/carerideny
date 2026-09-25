import type {Metadata} from "next";
import "./globals.css";
import {SiteHeader,SiteFooter} from "@/components/site-chrome";
import {SiteMotion} from "@/components/site-motion";
export const metadata:Metadata={title:{default:"Care Ride Transportation | Long Island & NYC",template:"%s | Care Ride Transportation"},description:"Non-emergency medical transportation across Long Island, Manhattan, Queens, Brooklyn, and the Bronx. Based in Shirley, New York. Explore services and arrange your next step.",icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><SiteMotion/><SiteHeader/><main id="main">{children}</main><SiteFooter/></body></html>;}
