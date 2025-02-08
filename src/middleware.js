import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const middleware = async (req) => {
  const token = await getToken({ req });
  const isTokenExist = Boolean(token);
  const isAdmin = token?.role === "Admin";
  const isProtectedRoute = req.nextUrl.pathname.startsWith("/add-blog");
  if (!isTokenExist && isProtectedRoute && !isAdmin) {
    const callbackUrl = encodeURIComponent(req.nextUrl.pathname);
    return NextResponse.redirect(
      new URL(`/api/auth/signin?callbackUrl=${callbackUrl}`, req.url)
    );
  }

  return NextResponse.next();
};
