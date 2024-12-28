//import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

//const isProtectedRoute = createRouteMatcher(["/settings(.*)", "/"]);

//export default clerkMiddleware((auth, req) => {
//	if (isProtectedRoute(req)) auth.protect();
//});

//export const config = {
//	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
//};

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/settings(.*)"]);

export default clerkMiddleware(async (auth, req) => {
	const authObj = await auth();

	if (isProtectedRoute(req)) {
		if (!authObj.userId) {
			return new Response("Unauthorized", { status: 401 });
		}
	}
});

export const config = {
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
