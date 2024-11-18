import { Project } from "../components/ui/Project";
import { projects } from "../utils/projects";
import { GoProjectSymlink } from "react-icons/go";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

//133790

export function Projects() {
    return (
        <section id="projects">
            <div className="flex items-center gap-3">
                <GoProjectSymlink />
                <h2>Projetos</h2>
            </div>

            <div className="w-full flex items-center px-7 sm:px-0 lg-[1017px]:px-12">
                <Carousel className="w-[87%] lg:w-full mx-auto overflow-visible">
                    <CarouselContent>
                        {projects.map((project) => (
                            <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Project {...project} />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

        </section>
    )
}