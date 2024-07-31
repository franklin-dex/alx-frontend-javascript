interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const Student1: Student = {
    firstName: 'Frank',
    lastName: 'Excel',
    age: '22',
    location: 'Lagos',
}

const Student2: Student = {
    firstName: 'Anita',
    lastName: 'Jessica',
    age: '20',
    location: 'Owerri',
}

const studentsList: Student[] = [Student1, Student2];