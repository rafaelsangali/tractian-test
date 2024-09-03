import { ICompanies } from '@/interfaces/companies';
import {create} from 'zustand';


// Defina o tipo para o estado da store
interface CompaniesState {
  companies: ICompanies[];
  currentCompanie: ICompanies
  setCurrentCompanie: (companie:ICompanies) => void
  initializeCompanies: (companies: ICompanies[] | null) => void
}

// Crie a store com Zustand
const useCompanies = create<CompaniesState>((set) => ({
  companies: [],
  currentCompanie: {} as ICompanies,
  setCurrentCompanie(companie) {
    set({currentCompanie:companie})
  },
  initializeCompanies: (companies: ICompanies[] | null) => {
    set({companies: companies || [], currentCompanie: companies?.[0]})
  },
}));

export default useCompanies;
