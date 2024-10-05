import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

const handler = NextAuth({
  providers: [
    Auth0Provider({
      clientId: "5NPEAg43gaXZlo55lNBsJUbs69DIIk9T",
      clientSecret:
        "snHyJ6No4uycoHr0Eo4tyJ6m1tmjZUdSJbpfZo-EEdSh3onjfIqVYnP0CIlRXoal",
      issuer: "https://dev-z4uoszynhmrjv2el.us.auth0.com",
    }),
  ],
});

export { handler as GET, handler as POST };
