import AddPost from "@/components/AddPost";
import Feed from "@/components/feed/Feed";
import LeftMenu from "@/components/leftMenu/LeftMenu";
import RigthMenu from "@/components/rightMenu/RigthMenu";
import Stories from "@/components/Stories";

export default function Home() {
	return (
		<div className="flex gap-6 pt-6">
			{/* Left */}
			<div className="hidden xl:block w-[20%]">
				<LeftMenu type="home" />
			</div>

			{/* Center */}
			<div className="w-full lg:w-[70%] xl:w-[50%]">
				<div className="flex flex-col gap-6">
					<Stories />
					<AddPost />
					<Feed />
				</div>
			</div>

			{/* Right */}
			<div className="hidden xl:block w-[30%]">
				<RigthMenu />
			</div>
		</div>
	);
}
