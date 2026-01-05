export const bootstrap = (): void => {
    interface Resume {
        fullName: string;
        email: string;
        skills: Skill[];
        addSkill: (skill: Skill) => boolean
    }   

    interface Skill {
        name: string;
        level: 'beginner' | 'intermediate' | 'advanced'
    }

    interface Resume {
        dateOfBirth?: String;
        sumary?: string
    }


    class MyResume implements Resume{
        constructor(
            public fullName: string,
            public email: string,
            public skills: Skill[],
            public dateOfBirth: String,
            public sumary : string
        ) {

        }

        addSkill(skill: Skill): boolean {
            const initialLength = this.skills.length
            this.skills.push(skill)

            return this.skills.length > initialLength
        };
    }

    const myResume = new MyResume(
        'Vinnicius Açucena', 
        'email@email.com',
        [],
        '12/01/2000',
        'sumario')

    console.log(myResume)

    myResume.addSkill({name: 'Javascript', level: 'advanced'})

    console.log(myResume)


}