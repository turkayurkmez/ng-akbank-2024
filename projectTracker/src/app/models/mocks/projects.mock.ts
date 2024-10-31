import { Project } from "../project.model";

export const fakeProjects: Project[] = [
    {
        id:1,
        name: 'projECt a',
        description: 'Project A Açıklaması',
        startDate: new Date(2024,9,31),
        completedPercentage:0.35,
        departmentId:1,
        score:80,
        tasks:[
            {id:1, name:'A 1', description:'A 1 açıklama', expectedDate: new Date(2024,10,5), isDone:false,projectId:1},
            {id:2, name:'A 2', description:'A 2 açıklama', expectedDate: new Date(2024,10,6), isDone:false,projectId:1},
            {id:3, name:'A 3', description:'A 3 açıklama', expectedDate: new Date(2024,10,7), isDone:true,projectId:1}
        ]
    },
    {
        id:2,
        name: 'PrOjecT X',
        description: 'Project X Açıklaması',
        startDate: new Date(2024,9,31),
        completedPercentage:0.35,
        departmentId:2,
        score:63,
        tasks:[
            {id:1, name:'X 1', description:'X 1 açıklama', expectedDate: new Date(2024,10,5), isDone:false,projectId:2},
            {id:2, name:'X 2', description:'X 2 açıklama', expectedDate: new Date(2024,10,6), isDone:false,projectId:2},
            {id:3, name:'X 3', description:'X 3 açıklama', expectedDate: new Date(2024,10,7), isDone:true,projectId:2}
        ]
    },
    {
        id:3,
        name: 'PRojeCt Z',
        description: 'Project Z Açıklaması',
        startDate: new Date(2024,9,31),
        completedPercentage:0.35,
        departmentId:3,
        score:75,
        tasks:[
            {id:1, name:'Z 1', description:'Z 1 açıklama', expectedDate: new Date(2024,10,5), isDone:false,projectId:3},
            {id:2, name:'Z 2', description:'Z 2 açıklama', expectedDate: new Date(2024,10,6), isDone:false,projectId:3},
            {id:3, name:'Z 3', description:'Z 3 açıklama', expectedDate: new Date(2024,10,7), isDone:true,projectId:3}
        ]
    }
]