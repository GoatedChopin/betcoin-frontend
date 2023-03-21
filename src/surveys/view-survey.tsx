import { link } from "fs";
import SurveyQuestionForm from "./create-survey";
// import SurveyProps from "./create-survey";


type Answer = {
    id: number,
    text: string
};
  
type SurveyProps = {
    question: string, 
    answers: Answer[]
};

const AnswerView: React.FC<Answer> = ({ id, text }) => {
    return(
        <div>
            <input type="radio" value={ text } name={ id.toString() } /> { text }  
        </div>
    );
};

const SurveyQuestion: React.FC<SurveyProps> = ({ question, answers }) => {
    return(
        <div>
            <title>{ question }</title>
            { answers.map((answer) => <AnswerView id={ answer.id } text={ answer.text } />)}
        </div>
    );
};

export default SurveyProps