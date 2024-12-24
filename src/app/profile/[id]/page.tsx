import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import RigthMenu from "@/components/RigthMenu";
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
