import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

function Home() {
	React.useEffect(() => {
		const mainWrapper = document.querySelector(".main-wrapper");
		mainWrapper.classList.add(styles.columnFlex);
		return () => mainWrapper.classList.remove(styles.columnFlex);
	}, []);
	return (
		<Layout>
			<main className={styles.mainContainer}>
				There is nothing here at the moment, meanwhile checkout:
				<br />
				<br />
				<ul>
					<li>
						<Link to="/blog/2020/08/21/react-opentable">
							🎉 Checkout <code>react-opentable</code> 🎉
						</Link>
					</li>
					<li>
						<Link to="/blog/2020/08/16/Soft-skills">Review of Soft Skills</Link>
					</li>
					<li>
						<Link to="/books">Books that I'm reading right now</Link>
					</li>
				</ul>
			</main>
		</Layout>
	);
}

export default Home;
