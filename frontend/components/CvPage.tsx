'use client'
import { Metadata } from "next";
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cv_data } from "@/components/cv_data";
import { ProjectCard } from "@/components/cvProjectCard";



export const metadata: Metadata = {
    title: `${cv_data.name} | ${cv_data.about}`,
    description: cv_data.summary,
  };



export default function CvPage() {
    return (
        <main>
            <header className='flex justify-center items-end min-h-[30vh] pb-16 '>
                <h1 className="text-center ">My Resume</h1>
            </header>
            <section id='cv' className="mx-auto w-full max-w-2xl space-y-8  print:space-y-6 pb-12">
                <div className="flex items-center justify-between">
                <div className="flex-1 space-y-1.5">
                    <h1 className="text-2xl font-bold ">{cv_data.name}</h1>
                    <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground ">
                        {cv_data.about}
                    </p>
                    <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
                    <a
                        className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                        href={cv_data.locationLink}
                        target="_blank"
                    >
                        <GlobeIcon className="size-3" />
                        {cv_data.location}
                    </a>
                    </p>
                    <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
                    {cv_data.contact.email ? (
                        <Button
                        className="size-8"
                        variant="outline"
                        size="icon"
                        asChild
                        >
                        <a href={`mailto:${cv_data.contact.email}`} target="_blank">
                            <MailIcon className="size-4" />
                        </a>
                        </Button>
                    ) : null}
                    {cv_data.contact.tel ? (
                        <Button
                        className="size-8"
                        variant="outline"
                        size="icon"
                        asChild
                        >
                        <a href={`tel:${cv_data.contact.tel}`} target="_blank">
                            <PhoneIcon className="size-4" />
                        </a>
                        </Button>
                    ) : null}
                    {cv_data.contact.social.map((social) => (
                        <Button
                            key={social.name}
                            className="size-8"
                            variant="outline"
                            size="icon"
                            asChild
                        >
                        <a href={social.url} target="_blank">
                            {social.icon}
                        </a>
                        </Button>
                    ))}
                    </div>
                    <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
                    {cv_data.contact.email ? (
                        <a href={`mailto:${cv_data.contact.email}`}>
                        <span className="underline">{cv_data.contact.email}</span>
                        </a>
                    ) : null}
                    {cv_data.contact.tel ? (
                        <a href={`tel:${cv_data.contact.tel}`}>
                        <span className="underline">{cv_data.contact.tel}</span>
                        </a>
                    ) : null}
                    </div>
                </div>

                <Avatar className="size-28">
                    <AvatarImage alt={cv_data.name} src={cv_data.avatarUrl} />
                    <AvatarFallback>{cv_data.initials}</AvatarFallback>
                </Avatar>
                </div>
                <Section>
                <h2 className="text-xl font-bold">About</h2>
                <p className="text-pretty font-mono text-sm text-muted-foreground">
                    {cv_data.summary}
                </p>
                </Section>
                <Section>
                <h2 className="text-xl font-bold">Experience</h2>
                {cv_data.experience.map((work) => {
                    return (
                    <Card key={work.company}>
                        <CardHeader>
                        <div className="flex items-center justify-between gap-x-2 text-base">
                            <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                            <a className="hover:underline text-base font-bold" href={work.link}>
                                {work.company}
                            </a>

                            <span className="inline-flex gap-x-1">
                                {work.badges.map((badge) => (
                                <Badge
                                    variant="secondary"
                                    className="align-middle text-xs "
                                    key={badge}
                                >
                                    {badge}
                                </Badge>
                                ))}
                            </span>
                            </h3>
                            <div className="text-sm tabular-nums text-gray-500">
                            {work.start} - {work.end}
                            </div>
                        </div>

                        <h4 className="font-mono text-sm leading-none">
                            {work.title}
                        </h4>
                        </CardHeader>
                        <CardContent className="mt-2 text-xs">
                        {work.description}
                        </CardContent>
                    </Card>
                    );
                })}
                </Section>
                <Section>
                <h2 className="text-xl font-bold">Education</h2>
                {cv_data.education.map((education) => {
                    return (
                    <Card key={education.school}>
                        <CardHeader>
                        <div className="flex items-center justify-between gap-x-2 text-base">
                            <h3 className="font-semibold leading-none text-base ">
                            {education.school}
                            </h3>
                            <div className="text-sm tabular-nums text-gray-500">
                            {education.start} - {education.expected}
                            </div>
                        </div>
                        </CardHeader>
                        <CardContent className="mt-2">{education.degree}</CardContent>
                    </Card>
                    );
                })}
                </Section>
                <Section>
                <h2 className="text-xl font-bold">Skills</h2>
                <div className="flex flex-wrap gap-1">
                    {cv_data.skills.map((skill) => {
                    return <Badge className='' key={skill}>{skill}</Badge>;
                    })}
                </div>
                </Section>

                <Section className="print-force-new-page scroll-mb-16">
                <h2 className="text-xl font-bold">Projects</h2>
                <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
                    {cv_data.projects.map((project) => {
                    return (
                        <ProjectCard
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        tags={project.techStack}
                        link={"link" in project ? project.link.href : undefined}
                        />
                    );
                    })}
                </div>
                </Section>
                <Section>
                    <h2 className="text-xl font-bold">Languages</h2>
                    <div className="flex flex-wrap gap-1">
                        {cv_data.languages.map((language) => {
                        return <Badge className='bg-teal-900/60 hover:bg-teal-900/70' key={language.name}>{language.name}: {language.level}</Badge>;
                        })}
                    </div>
                </Section>
                <Section >
                    <p><Link href='/' className='underline hover:underline hover:underline-offset-2 '>Back to Home</Link></p>
                </Section>
            </section>

            {/* <CommandMenu
                links={[
                {
                    url: cv_data.personalWebsiteUrl,
                    title: "Personal Website",
                },
                ...cv_data.contact.social.map((socialMediaLink) => ({
                    url: socialMediaLink.url,
                    title: socialMediaLink.name,
                })),
                ]}
            /> */}
        </main>
    )
}
