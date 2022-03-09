import React from 'react'
import ArticleCard from './ArticleCard'
import { useState } from 'react';

export default function ArticleList() {
const data = [
    {
        id: 1,
        title: "What is React all about?",
        body: "React is all about one-way data flow, the Virtual DOM, and transpiling JSX.",
    },
    {
        id: 2,
        title: "A lovely kid",
        body: "In fact, a kid is also the name of a baby goat!",
    },
    {
        id: 3,
        title: "On placeholder image URLs",
        body: "So yeah, you won't be able to look these images up. They're placeholders",
    },
    ];
    const [articles, set_articles] = useState(data);

    const clearNotifications = () => {
    articles.length ? set_articles([]) : set_articles(data);
    };

    return (
    <div>
        {
        /* TODO */
        articles.map((article) => {
            return (
            <div key={article.id}>
                <ArticleCard title={article.title} content={article.body} />
            </div>
            );
        })
        }
        <p>Here's a lovely list of articles, for your reading pleasure:</p>
        <button onClick={clearNotifications}>Clear Notifications</button>
    </div>
    );
}

