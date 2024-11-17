export function Navigation() {

    const sections = [
        { name: "home", id: "#home" },
        { name: "tecnologias", id: "#tecnologies" },
        { name: "experiências", id: "#experiencies" },
        { name: "formações", id: "#formations" },
        { name: "projetos", id: "#projects" },
        { name: "contatos", id: "#contacts" },
    ];

    const links = sections.map((section) => (
        <li key={section.id}>
            <a href={section.id} className="link">{section.name}</a>
        </li>
    ))

    return (
        <nav>
            <ul className="gap-1 hidden md:flex">
                { links }
            </ul>
        </nav>
    )
}