import { useState } from "react";

function App() {
    // states
    const [formData, setFormData] = useState({ title: "" });
    const [articles, setArticles] = useState([]);

    // actions
    const handleTitleChange = (e) => {
        console.log(e.target.value);
        setFormData({ ...formData, title: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("test");
        setArticles([...articles, formData]);
        setFormData({ title: "" });
    };

    const handleRemoveClick = (e) => {
        const indexTarget = e.target.closest("li").getAttribute("index");
        console.log(indexTarget);
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
                <form action="#" onSubmit={handleSubmit}>
                    <div className="flex flex-col items-start">
                        <label htmlFor="title" className="text-xl">
                            Inserisci titolo articolo
                        </label>
                        <input
                            className="p-1 border-2 border-blue-600 rounded-md bg-stone-200"
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleTitleChange}
                        />
                    </div>
                </form>
                <ul className="flex flex-col w-1/2 gap-2 my-4 ">
                    {articles.map((article, index) => (
                        <li
                            key={index}
                            index={index}
                            className="relative max-w-[500px]"
                        >
                            <div>
                                <div className="px-4 py-2 border-2 rounded-md border-slate-400">
                                    <span className="font-semibold">
                                        Titolo:
                                    </span>
                                    <span> {article.title}</span>
                                </div>
                                <span
                                    onClick={handleRemoveClick}
                                    className="absolute top-[-10px] right-0 text-xl text-red-600 pt-1 pr-1 cursor-pointer hover:scale-125"
                                >
                                    x
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    );
}

export default App;
