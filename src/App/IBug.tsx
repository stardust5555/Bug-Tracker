//Interface which describes the type of bugs that we'll be storing in the list of bugs
export interface IBug{
    id: string,
    description: string,
    priority: BugPriority
}

export enum BugPriority {
    LOW = "Low",
    MEDIUM = "Medium",
    HIGH = "High"
}