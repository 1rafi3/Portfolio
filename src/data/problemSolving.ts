export interface IOnlineJudgePlatform {
  name: string;
  handle: string;
  profileUrl: string;
  category: string;
  description: string;
  badge: string;
  iconName: string;
  accentColor: string;
}

export const problemSolvingData = {
  label: "Problem Solving",
  title: "Competitive Programming & Problem Solving",
  subtitle:
    "Active on online judges to sharpen algorithmic thinking, data structure fundamentals, and time complexity optimization.",
  platforms: [
    {
      name: "Codeforces",
      handle: "1rafi3",
      profileUrl: "https://codeforces.com/profile/1rafi3",
      category: "Contest Platform",
      description: "Participating in timed algorithmic rounds to solve complex logic and graph challenges.",
      badge: "Competitive Programming",
      iconName: "codeforces",
      accentColor: "#318CE7",
    },
    {
      name: "LeetCode",
      handle: "1rafi3",
      profileUrl: "https://leetcode.com/u/1rafi3/",
      category: "DSA & Algorithms",
      description: "Practicing data structures, dynamic programming, two pointers, and SQL optimization.",
      badge: "DSA & Problem Solving",
      iconName: "leetcode",
      accentColor: "#FFA116",
    },
    {
      name: "Beecrowd",
      handle: "1rafi3",
      profileUrl: "https://judge.beecrowd.com/",
      category: "Core Foundations",
      description: "Solving foundational programming problems, mathematics, and data structures in C/C++.",
      badge: "Core Foundations",
      iconName: "beecrowd",
      accentColor: "#00E5FF",
    },
    {
      name: "HackerRank",
      handle: "1rafi3",
      profileUrl: "https://www.hackerrank.com/",
      category: "Skill Verification",
      description: "Earning verified badges in problem solving, C++, Python, and relational database queries.",
      badge: "Skill Badges",
      iconName: "hackerrank",
      accentColor: "#00EA64",
    },
  ],
};
