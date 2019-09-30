export interface Question {
    id: number;
    type: number;
    text: string;
    answer: any;
    isRequired?: boolean;
}