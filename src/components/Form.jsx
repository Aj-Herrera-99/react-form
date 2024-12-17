import Input from "./Input";

function Form({ formData, handleSubmit, handleInputChange }) {
    return (
        <form
            action="#"
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 max-w-[500px]"
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
                value={formData.checked}
                action={handleInputChange}
                isRequired={false}
            >
                Articolo pubblicato?
            </Input>
            <button
                type="submit"
                className="py-2 text-white bg-blue-500 rounded-2xl hover:bg-blue-600"
            >
                Invia
            </button>
        </form>
    );
}

export default Form;
