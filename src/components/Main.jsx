import Form from "./Form"

function Main( {formData, handleSubmit, handleInputChange, articles, handleRemoveClick}) {
    return (
        <main className="flex justify-around p-5 bg-green-300">
            <Form
                formData={formData}
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
            ></Form>

            <ul className="flex flex-col w-1/2 gap-4">
                {articles.map((article, index) => (
                    <li
                        key={index}
                        index={index}
                        className="relative max-w-[500px] px-4 py-2 border-2 rounded-md border-slate-400"
                    >
                        <div className="flex flex-col">
                            <span>
                                <span className="font-semibold">Titolo: </span>
                                {article.title}
                            </span>
                            <span>
                                <span className="font-semibold">Autore: </span>
                                {article.author}
                            </span>
                            <span>
                                <span className="font-semibold">Stato: </span>
                                {article.status ? "pubblicato" : "bozza"}
                            </span>
                        </div>
                        <div
                            onClick={handleRemoveClick}
                            className="absolute top-[-10px] right-0 text-xl text-red-600 pt-1 pr-1 cursor-pointer hover:scale-125"
                        >
                            x
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default Main;
