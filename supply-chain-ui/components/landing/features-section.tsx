import { cn } from "@/lib/utils";
import {
	IconBolt,
	IconShieldCheck,
	IconArrowsExchange,
	IconPhoto,
	IconUsers,
	IconChartBar,
	IconTicket,
	IconLeaf,
} from "@tabler/icons-react";

export function FeaturesSection() {
	const features = [
		{
			title: "Real-Time Inventory Management",
			description:
				"Monitor and update items like PCs and other items in real-time for accurate, up-to-date records.",
			icon: <IconBolt />,
		},
		{
			title: "Blockchain for Security and Transparency",
			description:
				"Log every item transaction on a decentralized blockchain to guarantee data integrity and prevent tampering.",
			icon: <IconShieldCheck />,
		},
		{
			title: "Dynamic Allocation with Machine Learning",
			description:
				"Use predictive models to allocate and reassign item resources and descriptions based on usage patterns and future demand.",
			icon: <IconArrowsExchange />,
		},
		{
			title: " Centralized Audit and Monitoring System",
			description:
				"Conduct audits and track inventory from a centralized platform, ensuring transparency.",
			icon: <IconPhoto />,
		},
		{
			title: "Computer Vision for detecting items",
			description:
				"Identify items and checking the freshness using computer vision (YOLOV11) automatically without a manual. Saving time and effort.",
			icon: <IconUsers />,
		},
		{
			title: "Automated Alert Notifcation",
			description:
				"Automatically get alert messages based on items lifecycle data like expiry to minimize low rating delivery and improve operational efficiency.",
			icon: <IconChartBar />,
		},
		{
			title: "Redis for Fast Data Access",
			description:
				"Leverage Redis caching to provide quick access to frequently used data, reducing database load and improving response times.",
			icon: <IconTicket />,
		},
		{
			title: "Cost Management",
			description:
				"Track real-time inventory and item usage to make informed predictions and control maintenance costs.",
			icon: <IconLeaf />,
		},
	];
	return (
		<section className='my-20 py-14'>
			<div className='flex flex-col items-center gap-2 space-y-4 mx-auto my-14 md:px-8r max-w-[63rem] text-center'>
				<h1 className='font-bold text-6xl'>Future of Inventory Management</h1>
				<span className='text-gray-500 text-xl'>
					More visibility, greater control, traceable ownership. A
					next-generation inventory management platform that lets you engage with
					item using computer vision, identify them, check the details like expiry date, brand name etc and find the freshness 
					of  fruits vegetables. A more immersive experience in ways never
					before possible. You make the rules.
				</span>
			</div>
			<div className='relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto py-10 max-w-7xl'>
				{features.map((feature, index) => (
					<Feature key={feature.title} {...feature} index={index} />
				))}
			</div>
		</section>
	);
}

const Feature = ({
	title,
	description,
	icon,
	index,
}: {
	title: string;
	description: string;
	icon: React.ReactNode;
	index: number;
}) => {
	return (
		<div
			className={cn(
				"flex flex-col lg:border-r py-10 relative group/feature border-neutral-800",
				(index === 0 || index === 4) && "lg:border-l border-neutral-800",
				index < 4 && "lg:border-b border-neutral-800",
				"group-hover/feature:from-neutral-800 group-hover/feature:via-neutral-700 group-hover/feature:to-neutral-600"
			)}
		>
			{index < 4 && (
				<div className='absolute inset-0 bg-gradient-to-t  from-neutral-800 to-transparent opacity-0 group-hover/feature:opacity-100 w-full h-full transition duration-200 pointer-events-none' />
			)}
			{index >= 4 && (
				<div className='absolute inset-0 bg-gradient-to-b from-neutral-800 to-transparent opacity-0 group-hover/feature:opacity-100 w-full h-full transition duration-200 pointer-events-none' />
			)}
			<div className='relative z-10 mb-4 px-10 text-neutral-400'>
				{icon}
			</div>
			<div className='relative z-10 mb-2 px-10 font-bold text-lg'>
				<div className='group-hover/feature:h-8 group-hover/feature:bg-purple-500 left-0 absolute inset-y-0 bg-neutral-700 rounded-tr-full rounded-br-full w-1 h-6 origin-center transition-all duration-200' />
				<span className='inline-block text-neutral-100 transition group-hover/feature:translate-x-2 duration-200'>
					{title}
				</span>
			</div>
			<p className='relative z-10 px-10 max-w-xs text-sm text-neutral-300'>
				{description}
			</p>
		</div>
	);
};
