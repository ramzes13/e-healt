import { StateBase } from '@k5cjs/store';

export type StateDocument = StateBase<Document>;

export interface Document {
  id: number;
  type: string;
  analysisReason: string;
  readyAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface DocumentAnalysis {
  description: string;
  todo: string;
  extra_tests: string[],
  medical_appointments: string[]
}