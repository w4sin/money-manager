"use server";

import { signIn } from "@/auth";
import { prisma } from "@/prisma"

export async function submitForm(formData: FormData) {
    const provider = formData.get("provider");
    console.log("count user : ", await prisma.user.count());
    await signIn(provider?.toString() || "google");
}