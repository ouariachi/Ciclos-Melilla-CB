import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const ALLOWED_EMAILS = JSON.parse(process.env.ALLOWED_EMAILS as string);

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      return user.email && ALLOWED_EMAILS.includes(user.email);
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  }
}