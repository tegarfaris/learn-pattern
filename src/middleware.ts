import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const cookies = request.cookies;
  const destination = request.nextUrl.pathname;

  let credential;
  let role;

  if(request.cookies.get("dataRegister")?.value ){
    credential = JSON.parse(request.cookies.get("dataRegister")?.value as string)
    role= credential.role
  }

  console.log(role, "role")

  if (cookies.get("dataRegister")) {
    console.log("ada ga", destination);
    if(destination.startsWith("/dashboard") && role === "admin"){
      console.log("admin ke dashboard")
      return NextResponse.next()
    }else if(destination.startsWith("/dashboard") && role === "client"){
      console.log("client ke homepage")
      return NextResponse.redirect(new URL("/", request.url))
    } else if (destination.startsWith("/auth")) {
      console.log("masuk ga");
      return NextResponse.redirect(new URL("/", request.url));
    }else if(destination.startsWith("/") && role === "admin"){
      return NextResponse.redirect(new URL("/dashboard", request.url))
    }

  } else {
    console.log("unauthorized");
    if (destination.startsWith("/auth")) {
      console.log("lanjut a");
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/auth/register", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/auth/:path*", "/dashboard"],
};
