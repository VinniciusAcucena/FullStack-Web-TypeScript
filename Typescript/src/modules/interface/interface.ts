export const bootstrap = (): void => {
    interface Resume {
        fullName: string;
        email: string;
        skills: Skill[];
        addSkill?: (skill: Skill) => boolean
    }   

    interface Skill {
        name: string;
        level: 'beginner' | 'intermediate' | 'advanced'
    }

    const MyResume: Resume = {
        fullName: 'Vinnicius Açucena',
        email: 'email@email.com',
        skills: [
            {name: 'Javascript', level: 'advanced'},
            {name: 'Typescript', level: 'advanced'},
        ]
    }

    console.log(MyResume)
}