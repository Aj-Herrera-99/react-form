import { useState } from "react";
import Main from "./components/Main";

function App() {
    // states
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        status: false,
    });
    const [articles, setArticles] = useState([]);

    // actions
    const handleInputChange =  (e) => {
        const { type, name, value, checked } = e.target;
        const key = name;
        const val = type == "checkbox" ? checked : value;
        setFormData({ ...formData, [key]: val });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("test");
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

            <Main
                formData={formData}
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
                articles={articles}
                handleRemoveClick={handleRemoveClick}
            ></Main>
        </>
    );
}

export default App;
