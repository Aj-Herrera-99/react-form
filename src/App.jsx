import { useState } from "react";

function App() {
    // states
    const [formData, setFormData] = useState({ title: "", author: "", status: true });
    const [articles, setArticles] = useState([]);

    // actions
    const handleTitleChange = (e) => {
        setFormData({ ...formData, title: e.target.value });
    };
    const handleAuthorChange = (e) => {
        setFormData({ ...formData, author: e.target.value });
    };
    const handleStatusChange = (e) => {
        setFormData({ ...formData, status: e.target.checked });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Test");
        setArticles([...articles, formData]);
        setFormData({ title: "", author: "", status: false });
    };

    const handleRemoveClick = (e) => {
        const indexTarget = e.target.closest("li").getAttribute("index");
        const filteredArticles = articles.filter(
            (article, index) => index != indexTarget
        );
        setArticles(filteredArticles);
    };

    return (
        <>
            <header className="p-5 bg-red-300 ">
                <h1 className="text-4xl">React Blog Form</h1>
            </header>

            <main className="p-5 bg-green-300">
                <form
                    action="#"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 max-w-[500px]"
                >
                    <div className="flex flex-col items-start">
                        <label htmlFor="title" className="text-xl">
                            Inserisci titolo
                        </label>
                        <input
                            className="p-1 border-2 border-blue-600 rounded-md bg-stone-200"
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleTitleChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col items-start">
                        <label htmlFor="author" className="text-xl">
                            Inserisci autore
                        </label>
                        <input
                            className="p-1 border-2 border-blue-600 rounded-md bg-stone-200"
                            type="text"
                            id="author"
                            name="author"
                            value={formData.author}
                            onChange={handleAuthorChange}
                            required
                        />
                    </div>
                    <div className="flex items-center gap-3">
                        <label htmlFor="status" className="text-xl">
                            Articolo pubblicato?
                        </label>
                        <input
                            className="p-1 border-2 border-blue-600 rounded-md bg-stone-200"
                            type="checkbox"
                            id="status"
                            name="status"
                            checked={formData.status}
                            onChange={handleStatusChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="py-2 text-white bg-blue-500 rounded-2xl hover:bg-blue-600"
                    >
                        Invia
                    </button>
                </form>
                <ul className="flex flex-col w-1/2 gap-2 my-4 ">
                    {articles.map((article, index) => (
                        <li
                            key={index}
                            index={index}
                            className="relative max-w-[500px] px-4 py-2 border-2 rounded-md border-slate-400"
                        >
                            <div className="flex flex-col">
                                <span>
                                    <span className="font-semibold">
                                        Titolo:{" "}
                                    </span>
                                    {article.title}
                                </span>
                                <span>
                                    <span className="font-semibold">
                                        Autore:{" "}
                                    </span>
                                    {article.author}
                                </span>
                                <span>
                                    <span className="font-semibold">
                                        Stato:{" "}
                                    </span>
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
        </>
    );
}

export default App;
