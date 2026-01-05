
export default function Footer() {
    return (
        <footer className="w-full bg-[#1F2937] text-[#E5E7EB] py-3 fixed bottom-0 ">
            <div className="container mx-auto px-4 text-center">
                <p className="text-xs tracking-wider">&copy;{new Date().getFullYear()} kidodia.id</p>
            </div>
        </footer>
    )
}