import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import {
	ClerkLoaded,
	ClerkLoading,
	SignedIn,
	SignedOut,
	UserButton,
} from "@clerk/nextjs";

export default function Navbar() {
	return (
		<div className="h-24 flex justify-between items-center">
			{/* LEFT */}
			<div className="md:hidden lg:block w-[20%]">
				<Link href="/" className="font-bold text-xl text-blue-500">
					Social Media
				</Link>
			</div>

			{/* CENTER */}
			<div className="hidden md:flex w-[50%] text-sm">
				{/* LINKS */}
				<div className="flex gap-6 text-gray-600">
					<Link href="/" className="flex items-center gap-2">
						<Image
							src="/home.png"
							alt="homepage"
							width={16}
							height={16}
							className="w-4 h-4"
						/>
						<span>Homepage</span>
					</Link>
					<Link href="/" className="flex items-center gap-2">
						<Image
							src="/friends.png"
							alt="friends"
							width={16}
							height={16}
							className="w-4 h-4"
						/>
						<span>Friends</span>
					</Link>
					<Link href="/" className="flex items-center gap-2">
						<Image
							src="/stories.png"
							alt="stories"
							width={16}
							height={16}
							className="w-4 h-4"
						/>
						<span>Stories</span>
					</Link>
				</div>
			</div>

			{/* RIGHT */}
			<div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
				<ClerkLoading>
					<div className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
				</ClerkLoading>

				<ClerkLoaded>
					<SignedIn>
						<div className="cursor-pointer">
							<Image src="/people.png" alt="img" width={20} height={20} />
						</div>
						<div className="cursor-pointer">
							<Image src="/messages.png" alt="img" width={20} height={20} />
						</div>
						<div className="cursor-pointer">
							<Image
								src="/notifications.png"
								alt="img"
								width={20}
								height={20}
							/>
						</div>
						<UserButton />
					</SignedIn>

					<SignedOut>
						<div className="flex items-center gap-2 cursor-pointer text-sm text-gray-600">
							<Image src="/login.png" alt="img" width={20} height={20} />
							<Link href="/sign-in">Login/Register</Link>
						</div>
					</SignedOut>
				</ClerkLoaded>
				<MobileMenu />
			</div>
		</div>
	);
}
