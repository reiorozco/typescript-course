// export const person: {
//   name: string;
//   age: number;
//   human: boolean;
//   nickname: string;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Rei Orozco",
//   age: 27,
//   human: true,
//   nickname: "rei",
//   hobbies: ["Video-games", "Lecture"],
//   role: [2, "player"],
// };

export enum License {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

export const person = {
  name: "Rei Orozco",
  age: 27,
  human: true,
  nickname: "rei",
  hobbies: ["Video-games", "Lecture"],
  role: [2, "player"],
  license: License.AUTHOR,
};
