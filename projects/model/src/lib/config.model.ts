export interface BacklogContentConfig {
    backlogElementColumns: string[];
    moduleElementColumns: string[];
    moduleColumns: string[];
}

export interface BacklogConfig {
    contentConfig: BacklogContentConfig;
}

export const BacklogContentDefaultConfig: BacklogContentConfig = {
    backlogElementColumns: [],
    moduleElementColumns: [],
    moduleColumns: []
};