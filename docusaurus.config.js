module.exports = {
	title: "Sahil Satishkumar (@sahrckr)",
	tagline: "Software Engineering, and other things",
	url: "https://sahilsatishkumar.dev",
	baseUrl: "/",
	favicon: "/img/header.ico",
	organizationName: "sahilsatishkumar", // Usually your GitHub org/user name.
	projectName: "profile", // Usually your repo name.
	themeConfig: {
		googleAnalytics: {
			trackingID: "UA-141789564-1",
			anonymizeIP: false,
		},
		disableDarkMode: true,
		navbar: {
			title: "Hi, I'm Sahil",
			logo: {
				alt: "header-image",
				src: "/img/favicon.svg",
			},
			links: [
				{ to: "blog", label: "Blog", position: "right" },
				{ to: "books", label: "Books", position: "right" },
				{ to: "contact", label: "Contact", position: "right" },
			],
		},
		footer: {
			style: "light",
			// links: [
			// 	{
			// 		title: "",
			// 		items: [
			// 			{
			// 				label: "Blog",
			// 				to: "blog",
			// 			},
			// 			{
			// 				label: "GitHub",
			// 				href: "https://github.com/sahrckr",
			// 			},
			// 			{
			// 				label: "Twitter",
			// 				href: "https://twitter.com/@sahrkcr",
			// 			},
			// 		],
			// 	},
			// ],
			copyright: `May the source be with you`,
		},
	},
	presets: [
		[
			"@docusaurus/preset-classic",
			{
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			},
		],
	],
	plugins: ["@docusaurus/plugin-google-analytics"],
};
