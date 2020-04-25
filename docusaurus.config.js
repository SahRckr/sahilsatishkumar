module.exports = {
	title: "Sahil Satishkumar (@sahrckr)",
	tagline: "Software Engineering, and other things",
	url: "https://sahilsatishkumar.dev",
	baseUrl: "/",
	favicon: "img/favicon.svg",
	organizationName: "facebook", // Usually your GitHub org/user name.
	projectName: "docusaurus", // Usually your repo name.
	themeConfig: {
		disableDarkMode: true,
		navbar: {
			title: "Hi, I'm Sahil",
			logo: {
				alt: "header-image",
				src: "img/favicon.svg",
			},
			links: [
				{ to: "blog", label: "Blog", position: "right" },
				{ to: "books", label: "Books", position: "right" },
				{ to: "contact", label: "Contact", position: "right" },
			],
		},
		footer: {
			style: "light",
			links: [
				{
					title: "",
					items: [
						{
							label: "Blog",
							to: "blog",
						},
						{
							label: "GitHub",
							href: "https://github.com/sahrckr",
						},
						{
							label: "Twitter",
							href: "https://twitter.com/@sahrkcr",
						},
					],
				},
			],
			copyright: `May the source be with you`,
		},
	},
	presets: [
		[
			"@docusaurus/preset-classic",
			{
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					editUrl:
						"https://github.com/facebook/docusaurus/edit/master/website/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			},
		],
	],
};
