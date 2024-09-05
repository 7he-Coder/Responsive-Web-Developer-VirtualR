import { resourcesLinks, platformLinks, communityLinks } from "../constants";
const Footer = () => {
	return (
		<footer className="mt-20 border-t py-10 border-neutral-700">
			<div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
				<div>
					<h3 className="text-md font-semibold mb-4">Resources</h3>
					<ul className="space-y-2">
						{resourcesLinks.map((link, index) => (
							<li key={index}>
								<a
									className="text-neutral-300 hover:text-white"
									href={link.href}
								>
									{link.text}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h3 className="text-md font-semibold mb-4">PlatformLinks</h3>
					<ul className="space-y-2">
						{platformLinks.map((link, index) => (
							<li key={index}>
								<a
									className="text-neutral-300 hover:text-white"
									href={link.href}
								>
									{link.text}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h3 className="text-md font-semibold mb-4">CommunityLinks</h3>
					<ul className="space-y-2">
						{communityLinks.map((link, index) => (
							<li key={index}>
								<a
									className="text-neutral-300 hover:text-white"
									href={link.href}
								>
									{link.text}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="text-center mt-10">
				<span className="text-sm text-neutral-300">
					Copyright © 2024-25 | Made by Abhay Gautam, All rights reserved.
				</span>
			</div>
		</footer>
	);
};

export default Footer;
