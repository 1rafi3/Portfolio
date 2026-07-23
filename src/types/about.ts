export interface IHobby {
  name: string;
  icon?: string;
  description?: string;
}

export interface IAbout {
  biography: string[];
  programmingJourney?: string[];
  careerGoals?: string[];
  interests?: string[];
  hobbies?: IHobby[];
  personality?: string[];
  coreValues?: string[];
  funFacts?: string[];
}
