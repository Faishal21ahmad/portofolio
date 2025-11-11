// data/contactData.ts
export interface ContactItem {
    label: string
    value: string
    href?: string
}

export const contactData: ContactItem[] = [
    {
        label: 'Email',
        value: 'faisal2017bahi@gmail.com',
        href: 'mailto:faisal2017bahi@gmail.com',
    },
    {
        label: 'Linkedin',
        value: 'in/faishal-fathuni-436b84209',
        href: 'https://www.linkedin.com/in/faishal-fathuni-436b84209/',
    },
    {
        label: 'Github',
        value: 'https://github.com/Faishal21ahmad',
        href: 'https://github.com/Faishal21ahmad',
    },
    {
        label: 'Portofolio',
        value: 'https://ixal.my.id/',
        href: 'https://ixal.my.id/',
    },
    {
        label: 'Alamat',
        value: 'Cibitung, Bekasi, Jawa Barat, 17520',
    },
    {
        label: 'Domisil',
        value: 'Cibitung, Bekasi, Jawa Barat, 17520',
    },
    // {
    //     label: 'Domisil 2',
    //     value: 'Wuryantoro, Wonogiri, Jawa Tengah',
    // },
    {
        label: 'CV',
        value: 'Download',
        href: 'https://drive.google.com/file/d/16IPQUb-rDZBD9iAGZyCDBOxkyshZQVr_/view?usp=sharing',
    },
]
