export interface IContactInfo {
    logoPath: string,
    contactTitle: string,
    linkTitle: string,
    link: string
}

export const ContactInfos: IContactInfo[] = [
    {
        logoPath: "assets\\contactIcons\\contactMail.svg",
        contactTitle: "Email",
        linkTitle: "kminhnguyen@outlook.com",
        link: "mailto:kminhnguyen@outlook.com"
    },
    {
        logoPath: "assets\\contactIcons\\contactGithub.svg",
        contactTitle: "GitHub",
        linkTitle: "ChipsAKoi",
        link: "https://github.com/ChipsAKoi"
    },
    {
        logoPath: "assets\\contactIcons\\contactLinkedin.svg",
        contactTitle: "LinkedIn",
        linkTitle: "koinguyen",
        link: "https://www.linkedin.com/in/koi-nguyen/"
    },
]
