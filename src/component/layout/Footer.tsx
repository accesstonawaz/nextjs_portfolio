import SocialMedia from "@/static/SocialMedia";

function Footer() {
    return <div id="Contact" className="bg-gradient-to-r from-gradientLeft to-gradientRight">
        <img className="w-full h-44" src="/transitions/transition_grey.svg" alt="transition" />
        <footer className="flex flex-col items-center">
            <div className="pt-5">
                <SocialMedia size={70} />
            </div>
            <div className="flex text-white text-center p-6">&copy; {new Date().getFullYear()} All rights reserved.</div>
        </footer>
    </div>
}

export default Footer;