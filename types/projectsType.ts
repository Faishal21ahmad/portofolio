export interface projectsItem {
    id: number
    title: string
    category: string
    year: number
    description: string
    repo: string
    demo: string
    techIds: string[]
    scopes: string[]
    fiturs: string[]
    images: ProjectImage[]
    show: boolean
}

export interface ProjectImage {
    label: string
    url: string
}