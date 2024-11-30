import { getAllProjets } from "@/lib/wordpress";
import { Section, Container } from "@/components/craft";
import Link from "next/link";

export default async function Projet() {
  const pages = await getAllProjets();

  return (
    <Section>
      <Container>
        <h1>Projets</h1>

        <h2>Tous les projets</h2>
        <div className="grid">
          {pages.map((page: any) => (
            <Link key={page.id} href={`projet/${page.slug}`}>
              {page.title.rendered}
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
