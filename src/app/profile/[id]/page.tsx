import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import RigthMenu from "@/components/RigthMenu";
import Image from "next/image";
import React from "react";

export default function ProfilePage() {
	return (
		<div className="flex gap-6 pt-6">
			{/* Left */}
			<div className="hidden xl:block w-[20%]">
				<LeftMenu type="profile" />
			</div>

			{/* Center */}
			<div className="w-full lg:w-[70%] xl:w-[50%]">
				<div className="flex flex-col gap-6">
					<div className="flex flex-col items-center justify-center text-gray-800">
						<div className="w-full h-64 relative">
							<Image
								alt=""
								fill
								className="rounded-md object-cover"
								src="https://images.pexels.com/photos/19807850/pexels-photo-19807850/free-photo-of-house-in-deep-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
							/>
							<Image
								alt=""
								width={128}
								height={128}
								src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
								className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white object-cover"
							/>
						</div>
						<h1 className="mt-20 mb-4 text-2xl font-medium">Anna Joanna</h1>
						<div className="flex items-center justify-center gap-12 mb-4">
							<div className="flex flex-col items-center">
								<span className="font-medium">129</span>
								<span className="text-sm">Posts</span>
							</div>
							<div className="flex flex-col items-center">
								<span className="font-medium">13.4k</span>
								<span className="text-sm">Followers</span>
							</div>
							<div className="flex flex-col items-center">
								<span className="font-medium">1.5k</span>
								<span className="text-sm">Following</span>
							</div>
						</div>
					</div>

					<Feed />
				</div>
			</div>

			{/* Right */}
			<div className="hidden xl:block w-[30%]">
				<RigthMenu userId="test" />
			</div>
		</div>
	);
}
