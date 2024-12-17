import { useState } from "react";

function App() {
    // states
    const [formData, setFormData] = useState({ title: "" });
    const [articles, setArticles] = useState([]);

    // actions
    const handleTitleChange = (e) => {
        console.log(e.target.value)
        setFormData({ ...formData, title: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("test");
        setArticles([...articles, formData])
    }

    return (
        <>
            <header className="bg-red-300 p-5 ">
                <h1 className="text-4xl">React Blog Form</h1>
            </header>

            <main className="bg-green-300 p-5">
                <form action="#" onSubmit={handleSubmit}>
                    <div className="flex flex-col items-start">
                        <label htmlFor="title">Inserisci titolo articolo</label>
                        <input
                            className="border-2 border-blue-600 bg-stone-200"
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleTitleChange}
                        />
                    </div>
                </form>
                <ul className="flex flex-col gap-2 my-4 w-1/2">
                    {articles.map((article, index) => (
                        <li key={index} className="py-2 px-4 border-2 border-slate-400 rounded-md">Titolo: {article.title}</li>
                    ))}
                </ul>
            </main>
        </>
    );
}

export default App;
