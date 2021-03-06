import Link from "next/link";
import { tw } from "twind";
import Header from "./Header";
export default function Layout({ children }) {
  return (
    <div
      className={tw`flex flex-col min-h-screen bg-gray-200 dark:bg-gray-custom`}
    >
      <Header />
      <main
        className={tw`flex-1 p-4 mx-auto w-full max-w-4xl bg-gray-50 rounded-3xl standalone:mt-8 md:px-8 md:py-8 dark:bg-gray-custom`}
      >
        {children}
      </main>
      <div id="footer">
        <ul>
          <li>&copy; {new Date().getFullYear()}</li>
        </ul>
      </div>
    </div>
  );
}
