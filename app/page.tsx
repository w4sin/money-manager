"use client";
import { submitForm } from "./action";
import GoogleButton from "./components/google/google-button";
import LineButton from "./components/line-button";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen overflow-hidden bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-full max-w-[500px] md:w-[500px] rounded-xl shadow-2xl/20 border border-gray-300 bg-white/95 px-3 py-10 md:px-10 md:py-8 mx-2">
          <form action={submitForm} className="flex flex-col space-y-4">
            <h2
              className="text-2xl font-bold mb-6 text-center text-primary"

              // bg-gradient-to-br from-[#165af8] via-[#60d3c0] to-[#b3bb59] bg-clip-text text-transparent"
            >
              Money Manager
            </h2>

            <GoogleButton name="provider" value="google" type="submit" />

            <LineButton name="provider" value="line" type="submit" />
          </form>
        </div>
      </div>
    </main>
  );
}
