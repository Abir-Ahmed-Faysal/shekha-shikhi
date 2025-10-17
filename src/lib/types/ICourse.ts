export interface ICourse {
  _id: string;
  classId: string;
  name: string;
  description: string;
  topicsCount: number;
  icon: string;
  createdAt?: string;
  updatedAt?: string;
}
