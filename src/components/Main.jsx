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
        <main className="flex justify-around p-5 ">
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
