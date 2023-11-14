export interface Student {
  id: string;
  email: string;
  general: {
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
  };
}

export interface StudentGeneralInfo {
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
