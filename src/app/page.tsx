import Header from "@/components/header";
import { getAllCompanies } from "@/services/companies/get";

export default async function Home() {
  const [companies] = await Promise.all([await getAllCompanies()]);
  return <Header companiesInfo={companies} />;
}
