import { Service } from '@angular/core';

@Service()
export class Common {
    students: any[] = [
        { "id": 1, "name": "Aarav Sharma", "rollNo": "STU001", "email": "aarav.sharma@example.com", "phone": "9876543210", "course": "Computer Science", "year": 1, "percentage": 88.5, "gender": "Male", "date": "2005-01-15T00:00:00Z" },
        { "id": 2, "name": "Priya Verma", "rollNo": "STU002", "email": "priya.verma@example.com", "phone": "9876543211", "course": "Information Technology", "year": 2, "percentage": 91.2, "gender": "Female", "date": "2004-03-22T00:00:00Z" },
        { "id": 3, "name": "Rahul Singh", "rollNo": "STU003", "email": "rahul.singh@example.com", "phone": "9876543212", "course": "Electronics Engineering", "year": 3, "percentage": 84.7, "gender": "Male", "date": "2003-07-10T00:00:00Z" },
        { "id": 4, "name": "Sneha Gupta", "rollNo": "STU004", "email": "sneha.gupta@example.com", "phone": "9876543213", "course": "Mechanical Engineering", "year": 4, "percentage": 89.1, "gender": "Female", "date": "2002-11-05T00:00:00Z" },
        { "id": 5, "name": "Karan Yadav", "rollNo": "STU005", "email": "karan.yadav@example.com", "phone": "9876543214", "course": "Civil Engineering", "year": 2, "percentage": 82.4, "gender": "Male", "date": "2004-05-18T00:00:00Z" },
        { "id": 6, "name": "Ananya Kapoor", "rollNo": "STU006", "email": "ananya.kapoor@example.com", "phone": "9876543215", "course": "Computer Science", "year": 1, "percentage": 95.3, "gender": "Female", "date": "2005-09-27T00:00:00Z" },
        { "id": 7, "name": "Mohit Kumar", "rollNo": "STU007", "email": "mohit.kumar@example.com", "phone": "9876543216", "course": "Electrical Engineering", "year": 3, "percentage": 86.9, "gender": "Male", "date": "2003-12-12T00:00:00Z" },
        { "id": 8, "name": "Riya Saini", "rollNo": "STU008", "email": "riya.saini@example.com", "phone": "9876543217", "course": "Computer Science", "year": 4, "percentage": 93.8, "gender": "Female", "date": "2002-08-30T00:00:00Z" }
    ];

    getStudents() {
        return this.students;
    }

    addStudents(student: any) {
        const nextId = this.students.length > 0 ? Math.max(...this.students.map(s => s.id)) + 1 : 1;
        this.students.push({ ...student, id: nextId });
    }

    editStudent(updatedStudent: any) {
        const index = this.students.findIndex(student => student.id === updatedStudent.id);
        if (index !== -1) {
            this.students[index] = { ...updatedStudent };
        }
    }

    deleteStudent(id: number) {
        this.students = this.students.filter(
            student => student.id !== id
        );
    }
}
