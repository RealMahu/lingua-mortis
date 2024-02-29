import React, { useEffect, useState } from 'react'

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

	useEffect(() => {
		fetchNews()
	}, [])

	return (
		<div className={`main-wrapper news-wrapper`}>
			{news && news.map(post => (
				<div className='news-card'>
					{post.img && (<img className='news-card-thumbnail' src="" alt="" />)}
					<div className='news-card-info'>
						<h3>{post.title}</h3>
						<p>{post.text}</p>
					</div>
					<div className='news-card-bottom'>
						<div className='news-card-info'>
							<small>{post.date}</small>
							<small>{post.creator}</small>
						</div>
						<div className='news-card-author'></div>
					</div>
				</div>
			))}
		</div>
	)
}

export default NewsPage