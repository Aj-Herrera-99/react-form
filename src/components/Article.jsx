function Article( {article, index, handleRemoveClick}) {
    return (
        <li
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
    );
}

export default Article;
