// --- GENERAL INFO INTERFACES
export interface StudentGeneralInfo {
  ownerId: string;
  ownerEmail: string;
  name: string;
  surname: string;
  patronymic: string;
  year: string;
  group: string;
  faculty: string;
  department: string;
  speciality: string;
  profession: string;
  program: string;
  degree: string;
  form: string;
  payment: string;
}

// --- STUDY PLAN INTERFACES
interface StudyPlanSemester {
  semester: string;
  subjects: StudyPlanSubject[];
}

interface StudyPlanSubject {
  name: string;
  year: string;
  semester: string;
  credit: string;
  hours: string;
  type: string;
  department: string;
  departmentAbr: string;
}

export interface StudentStudyPlan {
  ownerId: string;
  ownerEmail: string;
  semesters: StudyPlanSemester[];
}

// --- STUDY PAYMENTS INTERFACES
export interface StudentPayment {
  ownerId: string;
  ownerEmail: string;
  amount: string;
  currency: string;
  paymentDateString: string;
  paymentDateISO: string;
  semester: string;
  contractNumber: string;
  contractISOdate: string;
}

// --- RECORDSBOOK INTERFACES
interface RecordsbookSubject {
  name: string;
  department: string;
  departmentAbr: string;
  type: string;
  lecturer: string;
  grade: string;
  gradeECTS: string;
  gradeNationa: string;
}

interface RecordsbookSemester {
  semester: string;
  subjects: RecordsbookSubject[];
}

export interface StudentRecordsbook {
  ownerId: string;
  ownerEmail: string;
  semesters: RecordsbookSemester[];
}

// --- STUDENT RATING INTERFACES
export interface StudentRatingPlace {
  name: string;
  group: string;
  averageMark: string;
  rating: string;
}

export type StudentRatingSortType = 'asc' | 'desc';

// --- STUDENT DEBTS INTERFACES
interface StudentDebtSubjectList {
  subject: string;
  controlType: string;
  credit: string;
  semester: number;
  year: number;
  department: string;
  departmentAbr: string;
  lecturer: string;
}

export interface StudentDebtInfo {
  ownerId: string;
  ownerEmail: string;
  debts: StudentDebtSubjectList[];
}

// --- STUDY SCHEDULE INTERFACES
interface SubjectsScheduleInfo {
  classTime: number;
  auditory: string;
  subject: string;
  classType: string;
  lecturer: string;
}

export interface StudentStudySchedule {
  ownerId: string;
  ownerEmail: string;
  monday: SubjectsScheduleInfo[];
  tuesday: SubjectsScheduleInfo[];
  wednesday: SubjectsScheduleInfo[];
  thursday: SubjectsScheduleInfo[];
  friday: SubjectsScheduleInfo[];
  saturday: SubjectsScheduleInfo[];
  sunday: SubjectsScheduleInfo[];
}

// --- SPORTS SCHEDULE INTERFACES
export interface SportScheduleInfo {
  day: string;
  classTime: number;
  subject: string;
  coach: string;
  building: string;
}
