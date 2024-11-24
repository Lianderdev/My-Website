export function Navigation() {

    const sections = [
        { name: "home", id: "#home" },
        { name: "tecnologias", id: "#tecnologies" },
        { name: "experiências", id: "#experiences" },
        { name: "projetos", id: "#projects" },
        { name: "formações", id: "#formations" },
        { name: "contatos", id: "#contacts" },
    ];

    return (
        <nav>
            <ul className="gap-1 hidden md:flex">
                {sections.map((section) => (
                    <li key={section.id}>
                        <a href={section.id} className="link">{section.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}