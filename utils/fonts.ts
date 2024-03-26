import { Poppins } from "next/font/google";
import { Roboto_Mono } from "next/font/google";

export const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const roboto = Roboto_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});
