



import ProjectCard from "../ProjectCard"

export default function ProjectsCompact({ }) {

    const dummies = [
        { title: "Project 1" },
        { title: "Project 2" },
        { title: "Project 3" },
        { title: "Project 4" },
        { title: "Project 5" },
    ]
    return (
        <section className="flex flex-col items-center min-h-[80vh] gap-y-6 mt-12">
            <h1 className="text-4xl">What I&apos;ve Done</h1>
            <div className="w-[90%] relative hidden md:flex ">
                {dummies.map((dummy, index) => (
                    <DummyProject
                        title={dummy.title}
                        index={index}
                        key={index}
                        />
                ))}
            </div>
        </section>
    )
}

function DummyProject({ title, index }: { title: string, index: number }) {

    return (
        <div
            className="w-[500px] h-[300px] bg-[#808080] rounded-lg shadow-sm shadow-zinc-100 border  absolute flex flex-col gap-y-2 p-2 transition-all ease-in-out hover:-translate-y-5"
            style={{ zIndex: index , left: `${index * 60 + 300}px` , top: `${index * 60 + 90}px` }}
            onMouseOver={(e)=> e.currentTarget.style.zIndex = "100"}
            onMouseOut={(e)=> e.currentTarget.style.zIndex = index.toString()}
            >
                <div className="flex items-end  gap-x-2 ">
                    <h2 className="text-2xl text-primary-text-color font-bold">{title}</h2>
                    <p className="text-xs pb-1 font-light">Description</p>
                </div>
                <div className="flex justify-between items-center gap-x-2 p-2 h-full w-10/12">
                    <div className="flex flex-col gap-y-1">
                        <p className="text-sm">Tech Stack</p>
                        <p className="text-sm">Status</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Project Image"
                            className="w[150px] h-fit rounded-lg"
                            />
                    </div>
                </div>
        </div>
    )
}
