import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:'430641031569-266g12kfb4fhbh0bt985afuduea8613j.apps.googleusercontent.com',
      clientSecret:'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',

    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)
