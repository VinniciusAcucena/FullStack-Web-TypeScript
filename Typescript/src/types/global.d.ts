interface PersonalInfo {
    fullName: string;
    email: string;
    dateOfBirth?: Date;
    sumary?: string
}   
    
interface Resume extends PersonalInfo, Theme{
    skills: Skill[];
     addSkill: (skill: Skill) => boolean
}   

interface Skill {
    name: string;
    level: 'beginner' | 'intermediate' | 'advanced'
}

interface Theme {
        font: Font,
        colorScheme: ColorScheme,
        layout: Layout
    }