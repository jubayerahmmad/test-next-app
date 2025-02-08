import { collectionNames, dbConnect } from "./dbConnect";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("credentialss line 12", credentials);
        const { email, password } = credentials;

        const user = await dbConnect(collectionNames.ADD_USER).findOne({
          email,
        });

        console.log("user from db", user);

        const isPasswordOK = password === user?.password;
        console.log("isPassOk", isPasswordOK);

        // If no error and we have user data, return it
        if (isPasswordOK) {
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account) {
        try {
          const { provider, providerAccountId } = account;
          const { email: user_email, image, name } = user;

          const userData = {
            providerAccountId,
            name,
            provider,
            user_email,
            image,
            role: "User",
          };
          console.log("signin", userData);
          const userCollection = dbConnect(collectionNames.ADD_USER);
          const isUserExist = await userCollection.findOne({
            providerAccountId,
          });

          if (!isUserExist) {
            await userCollection.insertOne(userData);
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      return true;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.email = user?.email;
        token.role = user?.role;
      }
      return token;
    },
    async session({ session, token, user }) {
      if (token) {
        session.user.email = token?.email;
        session.user.role = token?.role;
      }
      return session;
    },
  },
};
