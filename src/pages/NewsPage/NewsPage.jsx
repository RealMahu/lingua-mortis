import React, { useState } from 'react'

const NewsPage = () => {
	const [news, setNews] = useState(null)
	
	const url = `http://localhost:5000/`
	
	const fetchNews = async () => {
		const newsUrl = url+"newsposts";

		try {
			const response = await fetch(`${newsUrl}`, {
				method: "GET",
			});
			if (!response.ok){
				throw new Error("Failed to fetch!", response.status)
			}
			const newsData = await response.json();
			setNews(newsData);
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div className={`main-wrapper news-wrapper`}>
			{news && news.map(post => (
				<div className='news-card'>
					{post.img && (<img src="" alt="" />)}
				</div>
			))}
		</div>
	)
}

export default NewsPage