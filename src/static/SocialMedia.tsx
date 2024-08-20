import Image from 'next/image';

function SocialMedia({ size }: { size: number }) {

    return (<div className="flex justify-center gap-4 pb-4" style={{ pointerEvents: 'auto' }}>
        <a className="bg-black bg-opacity-50 p-3 rounded-full transition-all hover:scale-100 scale-100" href=""><Image src="/icons/linkedin.png" alt="Icon" width={size} height={size} /></a>
        <a className="bg-black bg-opacity-50 p-3 rounded-full transition-all hover:scale-100 scale-100" href=""><Image src="/icons/github.png" alt="Icon" width={size} height={size} /></a>
        <a className="bg-black bg-opacity-50 p-3 rounded-full transition-all hover:scale-100 scale-100" href=""><Image src="/icons/facebook.png" alt="Icon" width={size} height={size} /></a>
        <a className="bg-black bg-opacity-50 p-3 rounded-full transition-all hover:scale-100 scale-100" href=""><Image src="/icons/fiverr.png" alt="Icon" width={size} height={size} /></a>
        <a className="bg-black bg-opacity-50 p-3 rounded-full transition-all hover:scale-100 scale-100" href=""><Image src="/icons/upwork.png" alt="Icon" width={size} height={size} /></a>
    </div>)
}

export default SocialMedia;