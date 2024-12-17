function Input({type, name, value, action, isRequired, children}) {
    return (
        <div className="flex flex-col items-start">
            <label htmlFor={name} className="text-xl">
                {children}
            </label>
            <input
                className="p-1 border-2 border-blue-600 rounded-md bg-stone-200"
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={action}
                required={isRequired}
            />
        </div>
    );
}

export default Input;
