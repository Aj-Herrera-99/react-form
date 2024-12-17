function Header({ children }) {
    return (
        <header className="p-5 text-center text-white bg-blue-500">
            <h1 className="text-4xl">{children}</h1>
        </header>
    );
}

export default Header;
