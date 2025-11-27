import Headline from "./Headline";

export default function Footer() {
  const socials = [
    { text: "LinkedIn", link: "https://www.linkedin.com/in/jose-izarra/" },
    { text: "Github", link: "https://www.github.com/jose-izarra" },
  ];

  return (
    <footer className="flex min-h-[250px] items-center justify-evenly gap-x-3 px-2 text-center sm:px-10 lg:px-20">
      <div className="flex w-1/2 items-center justify-evenly">
        <p className="text-light/65">© {new Date().getFullYear()}, Jose Izarra</p>
      </div>
      <div className="flex w-1/3 flex-col justify-between gap-x-12 gap-y-8 sm:flex-row">
        <div className="flex flex-col gap-y-2">
          <Headline level={3}>Socials</Headline>
          <div className="flex flex-col gap-y-3">
            {socials.map((social, i) => (
              <a href={social.link} key={i} className="text-light/65 text-sm font-normal">
                {social.text}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <Headline level={3}>Contact</Headline>
          <div className="flex flex-col gap-y-3">
            <a href="mailto:jaiza0912@gmail.com" className="">
              <p className="text-light/65 font-inter text-sm font-normal">jaiza0912@gmail.com</p>
            </a>
            <a href="/mycv" className="">
              <p className="text-light/65 font-inter text-sm font-normal">CV</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
