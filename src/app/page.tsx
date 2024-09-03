import Header from "@/components/header";
import { Main } from "@/components/main";
import { getAllCompanies } from "@/services/companies/get";

export default async function Home() {
  const [companies] = await Promise.all([await getAllCompanies()]);
  return (
    <>
      <Header companiesInfo={companies} />
      <Main.Container>
        <Main.Title />
        <Main.Tree.Container>a</Main.Tree.Container>
      </Main.Container>
    </>
  );
}
