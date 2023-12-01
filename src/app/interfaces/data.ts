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
export interface StudyPlanSubject {
  ownerId: string;
  ownerEmail: string;
  name: string;
  department: string;
  departmentAbr: string;
  type: string;
  year: number;
  semester: number;
  credit: number;
  hours: number;
}

// --- STUDY PAYMENTS INTERFACES
export interface StudentPayment {
  ownerId: string;
  ownerEmail: string;
  amount: string;
  currency: string;
  paymentDateString: string;
  paymentDateISO: string;
  semester: number;
  contractNumber: string;
  contractISOdate: string;
  contractDateString: string;
}

// --- RECORDSBOOK INTERFACES
export interface RecordsbookSubject {
  ownerId: string;
  ownerEmail: string;
  semester: number;
  name: string;
  department: string;
  departmentAbr: string;
  type: string;
  lecturer: string;
  grade: string;
  gradeECTS: string;
  gradeNat: string;
}

// --- STUDENT RATING INTERFACES
export interface StudentRatingPlace {
  name: string;
  ownerEmail: string;
  group: string;
  averageMark: number;
  averageMarkNat: number;
  rating: number;
}

export type SortTypes = 'asc' | 'desc';

export interface StudentDebtInfo {
  ownerId: string;
  ownerEmail: string;
  subject: string;
  controlType: string;
  credit: string;
  semester: number;
  year: number;
  department: string;
  departmentAbr: string;
  lecturer: string;
}

// --- STUDY SCHEDULE INTERFACES

export type WeekDay =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';

export interface SubjectsScheduleInfo {
  day: WeekDay;
  classTime: number;
  classTimeString: string;
  auditory: string;
  subject: string;
  classType: string;
  lecturer: string;
}

export interface StudentStudySchedule {
  ownerId: string;
  ownerEmail: string;
  days: SubjectsScheduleInfo[];
}

// --- SPORTS SCHEDULE INTERFACES
export interface SportScheduleInfo {
  day: string;
  classTime: number;
  subject: string;
  coach: string;
  building: string;
}
