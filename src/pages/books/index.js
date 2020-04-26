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
				<div className="gr_grid_container">
					<div className="gr_grid_book_container">
						<a
							title="Barking Up the Wrong Tree: The Surprising Science Behind Why Everything You Know About Success Is (Mostly) Wrong"
							rel="nofollow"
							href="https://www.goodreads.com/book/show/31706504-barking-up-the-wrong-tree"
						>
							<img
								alt="Barking Up the Wrong Tree: The Surprising Science Behind Why Everything You Know About Success Is (Mostly) Wrong"
								border="0"
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1489173753l/31706504._SX98_.jpg"
							/>
						</a>
					</div>
					<div className="gr_grid_book_container">
						<a
							title="21 Lessons for the 21st Century"
							rel="nofollow"
							href="https://www.goodreads.com/book/show/38820046-21-lessons-for-the-21st-century"
						>
							<img
								alt="21 Lessons for the 21st Century"
								border="0"
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1564577305l/38820046._SX98_.jpg"
							/>
						</a>
					</div>
					<div className="gr_grid_book_container">
						<a
							title="Outliers: The Story of Success"
							rel="nofollow"
							href="https://www.goodreads.com/book/show/3228917-outliers"
						>
							<img
								alt="Outliers: The Story of Success"
								border="0"
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1344266315l/3228917._SX98_.jpg"
							/>
						</a>
					</div>
				</div>
			</div>
			<div id="gr_grid_widget_1587903330">
				<h2>
					<a
						rel="nofollow"
						href="https://www.goodreads.com/review/list/73366453-sahil-satishkumar?shelf=read&utm_medium=api&utm_source=grid_widget"
					>
						Read:
					</a>
				</h2>
				<div className="gr_grid_container">
					<div className="gr_grid_book_container">
						<a
							title="How Will You Measure Your Life?"
							rel="nofollow"
							href="https://www.goodreads.com/book/show/13425570-how-will-you-measure-your-life"
						>
							<img
								alt="How Will You Measure Your Life?"
								border="0"
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328046792l/13425570._SX98_.jpg"
							/>
						</a>
					</div>
					<div className="gr_grid_book_container">
						<a
							title="That Will Never Work: The Birth of Netflix and the Amazing Life of an Idea"
							rel="nofollow"
							href="https://www.goodreads.com/book/show/44428950-that-will-never-work"
						>
							<img
								alt="That Will Never Work: The Birth of Netflix and the Amazing Life of an Idea"
								border="0"
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1565067558l/44428950._SX98_.jpg"
							/>
						</a>
					</div>
					<div className="gr_grid_book_container">
						<a
							title="Bad Blood: Secrets and Lies in a Silicon Valley Startup"
							rel="nofollow"
							href="https://www.goodreads.com/book/show/50253296-bad-blood"
						>
							<img
								alt="Bad Blood: Secrets and Lies in a Silicon Valley Startup"
								border="0"
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1577993383l/50253296._SX98_.jpg"
							/>
						</a>
					</div>
					<div className="gr_grid_book_container">
						<a
							title="Get Out of Debt Now: The Easy Way"
							rel="nofollow"
							href="https://www.goodreads.com/book/show/17791084-get-out-of-debt-now"
						>
							<img
								alt="Get Out of Debt Now: The Easy Way"
								border="0"
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1365677769l/17791084._SX98_.jpg"
							/>
						</a>
					</div>
					<div className="gr_grid_book_container">
						<a
							title="Digital Minimalism: Choosing a Focused Life in a Noisy World"
							rel="nofollow"
							href="https://www.goodreads.com/book/show/40405444-digital-minimalism"
						>
							<img
								alt="Digital Minimalism: Choosing a Focused Life in a Noisy World"
								border="0"
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1544192948l/40405444._SX98_.jpg"
							/>
						</a>
					</div>
					<div className="gr_grid_book_container">
						<a
							title="The Monk Who Sold His Ferrari: A Fable About Fulfilling Your Dreams and Reaching Your Destiny"
							rel="nofollow"
							href="https://www.goodreads.com/book/show/43877.The_Monk_Who_Sold_His_Ferrari"
						>
							<img
								alt="The Monk Who Sold His Ferrari: A Fable About Fulfilling Your Dreams and Reaching Your Destiny"
								border="0"
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388189325l/43877._SX98_.jpg"
							/>
						</a>
					</div>
					<div className="gr_grid_book_container">
						<a
							title="Algorithms to Live By: The Computer Science of Human Decisions"
							rel="nofollow"
							href="https://www.goodreads.com/book/show/25666050-algorithms-to-live-by"
						>
							<img
								alt="Algorithms to Live By: The Computer Science of Human Decisions"
								border="0"
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1454296875l/25666050._SX98_.jpg"
							/>
						</a>
					</div>
					<div className="gr_grid_book_container">
						<a
							title="Zero to One: Notes on Startups, or How to Build the Future"
							rel="nofollow"
							href="https://www.goodreads.com/book/show/18050143-zero-to-one"
						>
							<img
								alt="Zero to One: Notes on Startups, or How to Build the Future"
								border="0"
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1414347376l/18050143._SX98_.jpg"
							/>
						</a>
					</div>
					<div className="gr_grid_book_container">
						<a
							title="Grit"
							rel="nofollow"
							href="https://www.goodreads.com/book/show/27213329-grit"
						>
							<img
								alt="Grit"
								border="0"
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1457889762l/27213329._SX98_.jpg"
							/>
						</a>
					</div>
					<div className="gr_grid_book_container">
						<a
							title="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones"
							rel="nofollow"
							href="https://www.goodreads.com/book/show/40121378-atomic-habits"
						>
							<img
								alt="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones"
								border="0"
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1535115320l/40121378._SX98_.jpg"
							/>
						</a>
					</div>
					<div className="gr_grid_book_container">
						<a
							title="Thinking, Fast and Slow"
							rel="nofollow"
							href="https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow"
						>
							<img
								alt="Thinking, Fast and Slow"
								border="0"
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1317793965l/11468377._SX98_.jpg"
							/>
						</a>
					</div>
					<div className="gr_grid_book_container">
						<a
							title="Sapiens: A Brief History of Humankind"
							rel="nofollow"
							href="https://www.goodreads.com/book/show/23692271-sapiens"
						>
							<img
								alt="Sapiens: A Brief History of Humankind"
								border="0"
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1420585954l/23692271._SX98_.jpg"
							/>
						</a>
					</div>
					<div className="gr_grid_book_container">
						<a
							title="Blockchain: Ultimate guide to understanding blockchain, bitcoin, cryptocurrencies, smart contracts and the future of money."
							rel="nofollow"
							href="https://www.goodreads.com/book/show/35299422-blockchain"
						>
							<img
								alt="Blockchain: Ultimate guide to understanding blockchain, bitcoin, cryptocurrencies, smart contracts and the future of money."
								border="0"
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1587872936l/35299422._SX98_.jpg"
							/>
						</a>
					</div>
					<div className="gr_grid_book_container">
						<a
							title="Design Patterns: Elements of Reusable Object-Oriented Software"
							rel="nofollow"
							href="https://www.goodreads.com/book/show/8732565-design-patterns"
						>
							<img
								alt="Design Patterns: Elements of Reusable Object-Oriented Software"
								border="0"
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328347527l/8732565._SX98_.jpg"
							/>
						</a>
					</div>
				</div>
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
				<div className="gr_grid_container">
					<div className="gr_grid_book_container">
						<a
							title="The Total Money Makeover: A Proven Plan for Financial Fitness (Classic Edition)"
							rel="nofollow"
							href="https://www.goodreads.com/book/show/17591758-the-total-money-makeover"
						>
							<img
								alt="The Total Money Makeover: A Proven Plan for Financial Fitness"
								border="0"
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1363560268l/17591758._SX98_.jpg"
							/>
						</a>
					</div>
					<div className="gr_grid_book_container">
						<a
							title="The Game: Penetrating the Secret Society of Pickup Artists"
							rel="nofollow"
							href="https://www.goodreads.com/book/show/900.The_Game"
						>
							<img
								alt="The Game: Penetrating the Secret Society of Pickup Artists"
								border="0"
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1410129471l/900._SX98_.jpg"
							/>
						</a>
					</div>
					<div className="gr_grid_book_container">
						<a
							title="The Art of Possibility: Transforming Professional and Personal Life"
							rel="nofollow"
							href="https://www.goodreads.com/book/show/35509026-the-art-of-possibility"
						>
							<img
								alt="The Art of Possibility: Transforming Professional and Personal Life"
								border="0"
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1498326446l/35509026._SX98_.jpg"
							/>
						</a>
					</div>
					<div className="gr_grid_book_container">
						<a
							title="The War of Art: Break Through the Blocks and Win Your Inner Creative Battles"
							rel="nofollow"
							href="https://www.goodreads.com/book/show/14653803-the-war-of-art"
						>
							<img
								alt="The War of Art: Break Through the Blocks and Win Your Inner Creative Battles"
								border="0"
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1411337490l/14653803._SX98_.jpg"
							/>
						</a>
					</div>
					<div className="gr_grid_book_container">
						<a
							title="The Dip: The Extraordinary Benefits of Knowing When to Quit (and When to Stick)"
							rel="nofollow"
							href="https://www.goodreads.com/book/show/977846.The_Dip"
						>
							<img
								alt="The Dip: The Extraordinary Benefits of Knowing When to Quit"
								border="0"
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348822987l/977846._SX98_.jpg"
							/>
						</a>
					</div>
					<div className="gr_grid_book_container">
						<a
							title="The God of Small Things"
							rel="nofollow"
							href="https://www.goodreads.com/book/show/5778867-the-god-of-small-things"
						>
							<img
								alt="The God of Small Things"
								border="0"
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320435726l/5778867._SX98_.jpg"
							/>
						</a>
					</div>
					<div className="gr_grid_book_container">
						<a
							title="Talk Like TED: The 9 Public Speaking Secrets of the World's Top Minds"
							rel="nofollow"
							href="https://www.goodreads.com/book/show/30122899-talk-like-ted"
						>
							<img
								alt="Talk Like TED: The 9 Public Speaking Secrets of the World's Top Minds"
								border="0"
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1490254883l/30122899._SX98_.jpg"
							/>
						</a>
					</div>
					<div className="gr_grid_book_container">
						<a
							title="Competing Against Luck"
							rel="nofollow"
							href="https://www.goodreads.com/book/show/28925252-competing-against-luck"
						>
							<img
								alt="Competing Against Luck"
								border="0"
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1456694112l/28925252._SX98_.jpg"
							/>
						</a>
					</div>
					<div className="gr_grid_book_container">
						<a
							title="Act Like a Leader, Think Like a Leader"
							rel="nofollow"
							href="https://www.goodreads.com/book/show/21413975-act-like-a-leader-think-like-a-leader"
						>
							<img
								alt="Act Like a Leader, Think Like a Leader"
								border="0"
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1412063201l/21413975._SX98_.jpg"
							/>
						</a>
					</div>
					<div className="gr_grid_book_container">
						<a
							title="Winners Take All: The Elite Charade of Changing the World"
							rel="nofollow"
							href="https://www.goodreads.com/book/show/37506348-winners-take-all"
						>
							<img
								alt="Winners Take All: The Elite Charade of Changing the World"
								border="0"
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1528750369l/37506348._SX98_.jpg"
							/>
						</a>
					</div>
					<div className="gr_grid_book_container">
						<a
							title="The Five Dysfunctions of a Team: A Leadership Fable"
							rel="nofollow"
							href="https://www.goodreads.com/book/show/21343.The_Five_Dysfunctions_of_a_Team"
						>
							<img
								alt="The Five Dysfunctions of a Team: A Leadership Fable"
								border="0"
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1400841022l/21343._SX98_.jpg"
							/>
						</a>
					</div>
					<div className="gr_grid_book_container">
						<a
							title="The Origin of Species: (Patterns of Life)"
							rel="nofollow"
							href="https://www.goodreads.com/book/show/35285252-the-origin-of-species"
						>
							<img
								alt="The Origin of Species:"
								border="0"
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1545466456l/35285252._SX98_.jpg"
							/>
						</a>
					</div>
					<div className="gr_grid_book_container">
						<a
							title="A Mind for Numbers: How to Excel at Math and Science (Even If You Flunked Algebra)"
							rel="nofollow"
							href="https://www.goodreads.com/book/show/18693655-a-mind-for-numbers"
						>
							<img
								alt="A Mind for Numbers: How to Excel at Math and Science"
								border="0"
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1575009552l/18693655._SX98_.jpg"
							/>
						</a>
					</div>
					<div className="gr_grid_book_container">
						<a
							title="The Power of Habit: Why We Do What We Do and How to Change"
							rel="nofollow"
							href="https://www.goodreads.com/book/show/17248798-the-power-of-habit"
						>
							<img
								alt="The Power of Habit: Why We Do What We Do and How to Change"
								border="0"
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1366562921l/17248798._SX98_.jpg"
							/>
						</a>
					</div>
					<div className="gr_grid_book_container">
						<a
							title="Security Analysis"
							rel="nofollow"
							href="https://www.goodreads.com/book/show/20512514-security-analysis"
						>
							<img
								alt="Security Analysis"
								border="0"
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1437117722l/20512514._SX98_.jpg"
							/>
						</a>
					</div>
					<div className="gr_grid_book_container">
						<a
							title="Bridgital Nation: Solving Technology's People Problem"
							rel="nofollow"
							href="https://www.goodreads.com/book/show/50905267-bridgital-nation"
						>
							<img
								alt="Bridgital Nation: Solving Technology's People Problem"
								border="0"
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1568871649l/50905267._SX98_SY160_.jpg"
							/>
						</a>
					</div>
					<div className="gr_grid_book_container">
						<a
							title="Creativity, Inc.: Overcoming the Unseen Forces That Stand in the Way of True Inspiration"
							rel="nofollow"
							href="https://www.goodreads.com/book/show/19831497-creativity-inc"
						>
							<img
								alt="Creativity, Inc.: Overcoming the Unseen Forces That Stand in the Way of True Inspiration"
								border="0"
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1394325192l/19831497._SX98_.jpg"
							/>
						</a>
					</div>
					<div className="gr_grid_book_container">
						<a
							title="How to Change Your Mind: What the New Science of Psychedelics Teaches Us about Consciousness, Dying, Addiction, Depression, and Transcendence"
							rel="nofollow"
							href="https://www.goodreads.com/book/show/44774807-how-to-change-your-mind"
						>
							<img
								alt="How to Change Your Mind: What the New Science of Psychedelics Teaches Us about Consciousness, Dying, Addiction, Depression, and Transcendence"
								border="0"
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1554267982l/44774807._SX98_.jpg"
							/>
						</a>
					</div>
					<div className="gr_grid_book_container">
						<a
							title="One of Us: Anders Breivik and the Massacre in Norway"
							rel="nofollow"
							href="https://www.goodreads.com/book/show/28938037-one-of-us"
						>
							<img
								alt="One of Us: Anders Breivik and the Massacre in Norway"
								border="0"
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1454647568l/28938037._SX98_.jpg"
							/>
						</a>
					</div>
					<div className="gr_grid_book_container">
						<a
							title="On Immunity: An Inoculation"
							rel="nofollow"
							href="https://www.goodreads.com/book/show/20613511-on-immunity"
						>
							<img
								alt="On Immunity: An Inoculation"
								border="0"
								src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1393647576l/20613511._SX98_.jpg"
							/>
						</a>
					</div>
				</div>
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