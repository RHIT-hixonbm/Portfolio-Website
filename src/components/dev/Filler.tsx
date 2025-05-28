export default function Filler() {
    return (
        <div className="bg-white flex min-h-screen flex-col items-center px-4">
        <main className="max-w-3xl mx-auto mt-10 space-y-8">
            {[...Array(20)].map((_, i) => (
            <p key={i} className="text-gray-700 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            ))}
        </main>
        </div>
    );
}