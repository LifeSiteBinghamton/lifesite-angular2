export interface DashboardModel {
    label: string;
    id: string;
    description: string;
    subcategories: SubCategory[];
}

export interface SubCategory {
    label: string;
    id: string;
    active?: boolean;
    tabs: string[];
}
