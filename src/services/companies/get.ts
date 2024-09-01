import { ICompanies } from "@/interfaces/companies";
import api from "../api";

const getAllCompanies: () => Promise<ICompanies[] | null> = async () => {
  try {
    const { data }: { data: ICompanies[] } = await api.get("/companies");
    if (data) {
      return data;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { getAllCompanies };
