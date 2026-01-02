
export default function Footer() {
    return (
        <footer className="w-full bg-black text-white py-6">
            <div className="container mx-auto px-4 text-center">
                <p className="text-xs tracking-wider">&copy;{new Date().getFullYear()} kidodia.id</p>
            </div>
        </footer>
    )
}