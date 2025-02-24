

export default function Footer() {
    // linkedin, github, email, CV

    const socials = [
        { text: "LinkedIn", link: "https://www.linkedin.com/in/jose-izarra/" },
        { text: "Github", link: "https://www.github.com/joseizarra" },
    ]

    const contact = [
        { text: "Email", link: "mailto:jaiza0912@gmail.com" },
        { text: "+34 676-135-616", link: "tel:676135616" },
        { text: "CV", link: "" },
    ]

    return (
        <footer className="flex items-center justify-evenly text-center gap-x-3 min-h-[250px] px-2 sm:px-10 lg:px-[5rem]">
            <div className="flex items-center w-1/2 justify-evenly">
                <h3 className="text-lg">© 2024, Jose Izarra</h3>

                <div className="">
                    {/* spotify */}
                </div>
            </div>
            <div className="flex gap-x-5 w-1/3 justify-between">
                <div className="flex flex-col gap-y-2">
                    <h3 className="text-xl text-darker-primary-color font-bold">Socials</h3>
                    <div className="flex flex-col gap-y-3">
                        {socials.map((social, i) => (
                            <a href={social.link} key={i} className="text-secondary-text-color text-sm font-semibold">{social.text}</a>
                        ))}

                    </div>
                </div>
                <div className="flex flex-col gap-y-2 ">
                    <h3 className="text-lg text-darker-primary-color font-semibold">Contact</h3>
                    <div className="flex flex-col gap-y-3">
                        <a href="mailto:jaiza0912@gmail.com" className="">
                            <p className="text-secondary-text-color text-sm font-sans font-semibold">jaiza0912@gmail.com</p>
                        </a>
                        <p className="text-secondary-text-color text-sm font-sans font-semibold">+34 676-135-616</p>
                        <p className="text-secondary-text-color text-sm font-sans font-semibold">CV</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
