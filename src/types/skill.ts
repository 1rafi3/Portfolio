export interface ISkill {
  name: string;
  icon?: string;
  proficiency?: number;
  yearsOfExperience?: number;
  category?: string;
}

export interface ISkillCategory {
  categoryName: string;
  categoryIcon?: string;
  skills: ISkill[];
}
