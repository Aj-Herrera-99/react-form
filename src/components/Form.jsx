import Input from "./Input";

function Form({ formData, handleSubmit, handleInputChange }) {
    return (
        <form
            action="#"
            onSubmit={handleSubmit}
            className="flex flex-col w-full gap-4 sm:w-1/3"
        >
            <Input
                type="text"
                name="title"
                value={formData.title}
                action={handleInputChange}
                isRequired={true}
            >
                Inserisci titolo
            </Input>
            <Input
                type="text"
                name="author"
                value={formData.author}
                action={handleInputChange}
                isRequired={true}
            >
                Inserisci autore
            </Input>
            <Input
                type="checkbox"
                name="status"
                checked={formData.status}
                action={handleInputChange}
                isRequired={false}
            >
                Articolo pubblicato?
            </Input>
            <button
                type="submit"
                className="max-w-[300px] py-2 text-white bg-blue-500 rounded-2xl hover:bg-blue-600"
            >
                Invia
            </button>
        </form>
    );
}

export default Form;
