import Nav from "@trooper/components/Nav";
import "@trooper/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="py-[16px]  px-[12px] md:py-[32px]  md:px-[80px] overflow-hidden">
      <img
        src="grid-bg.png"
        alt="bg"
        height={720}
        width={1200}
        className=" w-[1200px] h-[720px]  my-[36px] absolute mx-auto left-[50%] -translate-x-[50%]"
      />
      <Toaster />
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}
