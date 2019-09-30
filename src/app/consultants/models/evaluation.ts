import { Reviewer } from './reviewer';
import { Question } from './question';

export interface Evaluation {
    id: number;
    consultantId: number;
    reviewer: Reviewer;
    totalScore: number;
    questions: Question[];
}