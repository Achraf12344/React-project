export default function Header() {
    return (
        <header className="h-[300px] bg-slate-500">
            <div className="flex flex-col gap-8 items-center justify-center h-full p-5 w-5/12 mx-auto">
                <h1 className="text-4xl cursor-pointer">Welcome to React</h1>
                <input type="text" className="w-full h-16 p-2 outline-0 rounded-md text-xl" />
            </div>
        </header>

    );
}
