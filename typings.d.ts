interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    secure_url: string | StaticImport;
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

interface Technologies {
    title: ReactNode;
    _id: Key | null | undefined;
    _key: string;
    _ref: string;
    _type: "reference";
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    role: string;
    heroImage: Image;
}

export interface Skill extends SanityBody {
    _type: "skill";
    title: string;
    image: Image;
}

export interface Project extends SanityBody {
    _type: "project";
    title: string;
    image: Image;
    linkToGitHub: string;
    linkToSite: string;
    summary: string;
    technologies: Technologies[];
}