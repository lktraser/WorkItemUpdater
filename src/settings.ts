export class Settings {
    public buildId: number;
    public projectId: string;
    public releaseId: number | undefined;
    public definitionId: number | undefined;
    public definitionEnvironmentId: number | undefined;
    public requestedFor: string;
    public workitemsSource: string;
    public workitemsSourceQuery: string;
    public workItemType: string;
    public allWorkItemsSinceLastRelease: boolean;
    public workItemState: string;
    public workitemLimit: number | undefined;
    public workItemCurrentState: string;
    public workItemKanbanLane: string;
    public workItemKanbanState: string;
    public workItemDone: boolean;
    public linkBuild: boolean;
    public updateAssignedTo: string;
    public updateAssignedToWith: string;
    public assignedTo: string;
    public addTags: string;
    public removeTags: string;
    public comment: string;
    public updateFields: string;
    public bypassRules: boolean;
    public failTaskIfNoWorkItemsAvailable: boolean;
}
