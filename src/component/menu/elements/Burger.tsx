function Burger() {
    return (<button aria-label="Burger Menu Button" className="bg-zinc-400 r to border-b-indigo-400 l">
        <div className="absolute space-y-2 z-50 -translate-y-1/2 -translate-x-1/2">
            <div className="w-8 h-1 bg-white animate-pulse"></div>
            <div className="w-8 h-1 bg-white animate-pulse"></div>
            <div className="w-8 h-1 bg-white animate-pulse"></div>
        </div>
    </button>
    )
}
export default Burger;