import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["vn", "en"],

  // Used when no locale matches
  defaultLocale: "vn",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(vn|en)/:path*"],
};
