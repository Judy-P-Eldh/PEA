export interface Student {
    name: string;
    isActive: boolean;
    age: number;
}

export const students: Student[] = [
   { name: "Emil", isActive: true, age: 20 },
   { name: "Anastasiya", isActive: false, age: 25 },
   { name: "Pernilla", isActive: true, age: 30 },
];