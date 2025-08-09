import Image from "next/image";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />

    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Lorem Ipsum</h1>

      {Array.from({ length: 300 }).map((_, i) => (
        <p key={i} className="text-lg text-gray-700 max-w-xl text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      ))}

    </main>
    </>
  );
}
