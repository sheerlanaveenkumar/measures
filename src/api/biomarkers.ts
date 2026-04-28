import apiClient from "./apiClient";

export interface BiomarkerContent {
  order: number;
  heading?: string;
  blockType: string;
  content: {
    type: "paragraph" | "list" | "break";
    text?: string;
    items?: string[];
    style?: "unordered" | "ordered";
  };
}

export interface Biomarker {
  loincCode: string;
  name: string;
  displayOrder: number;
  content: BiomarkerContent[];
}

export interface SubPanel {
  name: string;
  biomarkers: Biomarker[];
}

export interface Category {
  category: string;
  displayOrder: number;
  subPanels: SubPanel[];
}

export interface BiomarkerData {
  groupId: number;
  name: string;
  categories: Category[];
}

export const biomarkerService = {
  getBiomarkers: async (): Promise<BiomarkerData> => {
    const response = await apiClient.get<BiomarkerData>("/website/biomarkers");
    return response.data;
  },
};
