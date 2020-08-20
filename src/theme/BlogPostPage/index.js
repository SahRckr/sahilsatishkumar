/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect } from "react";

import Layout from "@theme/Layout";
import BlogPostItem from "@theme/BlogPostItem";
import BlogPostPaginator from "@theme/BlogPostPaginator";

function BlogPostPage(props) {
	const { content: BlogPostContents } = props;
	const { frontMatter, metadata } = BlogPostContents;

	useEffect(() => {
		const script = document.createElement("script");

		script.src = "https://utteranc.es/client.js";
		script.setAttribute("repo", "sahrckr/profile");
		script.setAttribute("issue-term", "url");
		script.setAttribute("label", "blog-post-comment");
		script.setAttribute("theme", "preferred-color-scheme");
		script.crossOrigin = "anonymous";
		script.async = true;

		document.getElementById("comment-system").appendChild(script);
	}, []);

	return (
		<Layout title={metadata.title} description={metadata.description}>
			{BlogPostContents && (
				<div className="container margin-vert--xl">
					<div className="row">
						<div className="col col--8 col--offset-2">
							<BlogPostItem
								frontMatter={frontMatter}
								metadata={metadata}
								isBlogPostPage
							>
								<BlogPostContents />
							</BlogPostItem>
							<div id="comment-system"></div>
							{(metadata.nextItem || metadata.prevItem) && (
								<div className="margin-vert--xl">
									<BlogPostPaginator
										nextItem={metadata.nextItem}
										prevItem={metadata.prevItem}
									/>
								</div>
							)}
						</div>
					</div>
				</div>
			)}
		</Layout>
	);
}

export default BlogPostPage;
