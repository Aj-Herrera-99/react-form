import Article from "./Article";

function ArticlesList({ articles, handleRemoveClick }) {
    return (
        <ul className="flex flex-col w-full gap-4 sm:w-1/2">
            {articles.map((article, index) => (
                <Article
                    key={index}
                    article={article}
                    index={index}
                    handleRemoveClick={handleRemoveClick}
                />
            ))}
        </ul>
    );
}

export default ArticlesList;
