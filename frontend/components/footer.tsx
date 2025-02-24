

export default function Footer() {
    // linkedin, github, email, CV

    const socials = [
        { text: "LinkedIn", link: "https://www.linkedin.com/in/jose-izarra/" },
        { text: "Github", link: "https://www.github.com/joseizarra" },
    ]

    return (
        <footer className="flex items-center justify-evenly text-center gap-x-3 min-h-[250px] px-2 sm:px-10 lg:px-[5rem]">
            <div className="flex items-center w-1/2 justify-evenly">
                <h3 className="text-lg">© 2024, Jose Izarra</h3>

                <div className="">
                    {/* spotify */}
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-x-12 w-1/3 justify-between gap-y-8">
                <div className="flex flex-col gap-y-2">
                    <h3 className="text-xl text-darker-primary-color font-bold">Socials</h3>
                    <div className="flex flex-col gap-y-3">
                        {socials.map((social, i) => (
                            <a href={social.link} key={i} className="text-secondary-text-color text-sm font-normal">{social.text}</a>
                        ))}

                    </div>
                </div>
                <div className="flex flex-col gap-y-2 ">
                    <h3 className="text-lg text-darker-primary-color font-bold">Contact</h3>
                    <div className="flex flex-col gap-y-3">
                        <a href="mailto:jaiza0912@gmail.com" className="">
                            <p className="text-secondary-text-color text-sm font-sans font-normal">jaiza0912@gmail.com</p>
                        </a>
                        <a href="/mycv" className="">
                            <p className="text-secondary-text-color text-sm font-sans font-normal">CV</p>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
