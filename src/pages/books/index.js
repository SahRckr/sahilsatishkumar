import React from "react";

import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";

import styles from "./books.module.css";
import "./goodreads.css";

const Books = () => (
	<Layout>
		<Head>
			<script
				src="https://www.goodreads.com/review/grid_widget/73366453.Currently%20Reading:?cover_size=medium&hide_link=true&hide_title=&num_books=200&order=d&shelf=currently-reading&sort=date_added&widget_id=1587903274"
				type="text/javascript"
				charset="utf-8"
			></script>
			<script
				src="https://www.goodreads.com/review/grid_widget/73366453.Read:?cover_size=medium&hide_link=true&hide_title=&num_books=200&order=d&shelf=read&sort=date_added&widget_id=1587903573"
				type="text/javascript"
				charset="utf-8"
			></script>
			<script
				src="https://www.goodreads.com/review/grid_widget/73366453.Reading%20Queue:?cover_size=medium&hide_link=true&hide_title=&num_books=200&order=d&shelf=to-read&sort=date_added&widget_id=1587903429"
				type="text/javascript"
				charset="utf-8"
			></script>
		</Head>
		<div className="bookshelf">
			<div id="gr_grid_widget_1587903274">
				<h2>
					<a
						rel="nofollow"
						href="https://www.goodreads.com/review/list/73366453-sahil-satishkumar?shelf=currently-reading&utm_medium=api&utm_source=grid_widget"
					>
						Currently Reading:
					</a>
				</h2>
				<div className="gr_grid_container" />
			</div>
			<div id="gr_grid_widget_1587903573">
				<h2>
					<a
						rel="nofollow"
						href="https://www.goodreads.com/review/list/73366453-sahil-satishkumar?shelf=read&utm_medium=api&utm_source=grid_widget"
					>
						Read:
					</a>
				</h2>
				<div className="gr_grid_container" />
			</div>
			<div id="gr_grid_widget_1587903429">
				<h2>
					<a
						rel="nofollow"
						href="https://www.goodreads.com/review/list/73366453-sahil-satishkumar?shelf=to-read&utm_medium=api&utm_source=grid_widget"
					>
						Reading Queue:
					</a>
				</h2>
				<div className="gr_grid_container" />
			</div>
		</div>
		<div className="gr_grid_branding">
			<a
				className=""
				rel="nofollow"
				href="https://www.goodreads.com/user/show/73366453-sahil-satishkumar"
			>
				Sahil Satishkumar's favorite books »
			</a>
		</div>
	</Layout>
);

export default Books;
