import { IconBox } from "@tabler/icons-react";
import Link from "next/link";

const footerNavs = [
	{
		label: "Product",
		items: [
			{
				href: "/login",
				name: "Request for Budget",
			},
			{
				href: "/dashboard",
				name: "Analytics",
			},
			{
				href: "/faq",
				name: "FAQ",
			},
		],
	},

	{
		label: "Community",
		items: [
			{
				href: "/events",
				name: "Explore Stations",
			},
			{
				href: "/nft-details?nftAddress=",
				name: "Check your Inventory",
			},
			{
				href: "mailto:krishanmohank974@gmail.com",
				name: "Email",
			},
		],
	},
	{
		label: "Team behind Rakshak",
		items: [
			{
				href: "https://www.linkedin.com/in/sanya-kumari-upadhyay-19363728b/",
				name: "Sanya Kumari",
			},
			{
				href: "https://www.linkedin.com/in/krishna-mohan-194124167/",
				name: "Krishna Mohan",
			},
			{
				href: "https://www.linkedin.com/in/sidharth-banthia-0aa308272/",
				name: "Sidharth Banthia",
			},
			{
				href: "https://www.linkedin.com/in/niharika-sharma-84307b24a/",
				name: "Niharika Sharma",
			},			
			{
				href: "https://www.linkedin.com/in/sameer-kumar-9a9b69278/",
				name: "Sameer Kumar",
			},
						
			{
				href: "https://www.linkedin.com/in/ayushi-choudhary-3b7707285/",
				name: "Ayushi Choudhary",
			},
		],
	},
];

export function SiteFooter() {
	return (
		<footer>
			<div className='mx-auto xl:pb-2 w-full max-w-screen-xl'>
				<div className='md:flex md:justify-between gap-4 px-8 py-16 p-4 sm:pb-16'>
					<div className='flex flex-col gap-4 mb-12'>
						<Link className='flex items-center text-md' href='/'>
							
							<span className='ml-2'>
								<span className="flex"><IconBox className="ml-3px"/>
								Rakshak</span></span>
						</Link>
						<p className='max-w-xs'>Inventory Management System for  <br /> Police Department </p>
					</div>
					<div className='gap-8 sm:gap-10 grid grid-cols-1 sm:grid-cols-3'>
						{footerNavs.map((nav) => (
							<div key={nav.label}>
								<h2 className='mb-6 font-medium text-sm text-white uppercase tracking-tighter'>
									{nav.label}
								</h2>
								<ul className='gap-2 grid'>
									{nav.items.map((item) => (
										<li key={item.name}>
											<Link
												href={item.href}
												className='font-[450] text-gray-400 text-sm hover:text-gray-200 duration-200 cursor-pointer'
											>
												{item.name}
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>

				<div className='flex sm:flex sm:flex-row flex-col sm:justify-between sm:items-center gap-2 border-neutral-700/20 px-8 py-4 rounded-md'>
					{/* <div className='flex sm:justify-center space-x-5 sm:mt-0'>
						{footerSocials.map((social) => (
							<Link
								key={social.name}
								href={social.href}
								className='text-gray-500 hover:text-gray-900 dark:hover:text-gray-600 fill-gray-500 hover:fill-gray-900 dark:hover:fill-gray-600'
							>
								{social.icon}
								<span className='sr-only'>{social.name}</span>
							</Link>
						))}
					</div> */}
					<span className='text-gray-400 text-sm sm:text-center '>
						Copyright © {new Date().getFullYear()}{" "}
						<Link href='/' className='cursor-pointer'>
							Rakshak
						</Link>
						. All Rights Reserved.
					</span>
				</div>
			</div>
		</footer>
	);
}
