import { projectsData } from '@/data/projectsData'
import { projectsItem } from '@/types/projectsType'

export function getProjectById(id: number | string) {
    const projects = getAllProjects();
    return projects.find(p => p.id === Number(id) || String(p.id) === String(id)) ?? null;
}

export function getAllProjects(options?: {
    showOnly?: boolean
    category?: string
    year?: number
}): projectsItem[] {
    let result = [...projectsData]

    if (options?.showOnly) {
        result = result.filter(p => p.show)
    }

    if (options?.category) {
        result = result.filter(p => p.category === options.category)
    }

    if (options?.year) {
        result = result.filter(p => p.year === options.year)
    }

    return result
}


