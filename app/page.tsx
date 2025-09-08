"use client";
import Image from "next/image";
import IconLogin from "../public/icons/login.svg";
import Input from "./components/Input";

export default function Home() {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    console.log("email : ", formData.get("email"));
  };

  return (
    <main className="min-h-screen min-w-screen overflow-hidden bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-full md:w-[500px] rounded-xl shadow-2xl/20 border border-gray-300 bg-white/95 px-3 py-10 md:p-10 mx-2">
          <form onSubmit={onSubmit} className="flex flex-col space-y-4">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

            <Input label="Username" name="username" error={!!false} fullWidth />
            <Input label="Password" name="password" type="password" error={!!false} fullWidth />

            <button
              type="submit"
              className="btn btn-lg btn-primary rounded-lg mt-5"
            >
              <Image
                src={IconLogin}
                alt="login icon"
                width={24}
                height={24}
                className="mr-0.5 invert-100 brightness-100"
                priority
              />
              Login
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
