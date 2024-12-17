import Form from "./Form";
import ArticlesList from "./ArticlesList";

function Main({
    formData,
    handleSubmit,
    handleInputChange,
    articles,
    handleRemoveClick,
}) {
    return (
        <main className="flex flex-wrap justify-center gap-8 p-5">
            <Form
                formData={formData}
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
            />
            <ArticlesList
                articles={articles}
                handleRemoveClick={handleRemoveClick}
            />
        </main>
    );
}

export default Main;
