function Input({ type, name, value, checked, action, isRequired, children }) {
    return (
        <div className="flex flex-col items-start">
            <label htmlFor={name} className="text-xl">
                {children}
            </label>
            <input
                className="px-2 py-1 border-2 border-blue-600 rounded-md caret-blue-500 bg-stone-100 "
                type={type}
                id={name}
                name={name}
                value={value}
                checked={checked}
                onChange={action}
                required={isRequired}
            />
        </div>
    );
}

export default Input;
