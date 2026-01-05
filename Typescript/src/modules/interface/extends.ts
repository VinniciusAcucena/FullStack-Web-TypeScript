export const bootstrap = (): void => {


    type Font = 'roboto' | 'open sans'
    type ColorScheme = 'light' | 'dark'
    type Layout = 'one-column' | 'two-column'


    class MyResume implements Resume{
        constructor(
            public fullName: string,
            public email: string,
            public skills: Skill[],
            public dateOfBirth: Date,
            public sumary : string, 
            public font: Font,
            public colorScheme: ColorScheme,
            public layout: Layout
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
        new Date('01/12/2000'),
        'sumario',
        'roboto',
        'light',
        'one-column'
    )

    console.log(myResume)

    myResume.addSkill({name: 'Javascript', level: 'advanced'})

    console.log(myResume)


}