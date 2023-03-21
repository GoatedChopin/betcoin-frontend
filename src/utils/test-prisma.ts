import { PrismaClient } from '@prisma/client'
// import SurveyProps from '../surveys/view-survey'

// const prisma = new PrismaClient()

// async function add_survey(surveyProps: SurveyProps) {
//   prisma.$connect();
//   prisma.survey.count()
//   const answers = surveyProps.answers.map(answer => {text: answer.text})
//   const today = new Date()
//   const enddate = new Date()
//   const survey = await prisma.survey.create({
//     data: {
//       startdate: today,
//       enddate: new Date(today.getDate() + 7),
//       question: "What is your favorite color?",import { PrismaClient } from '@prisma/client'
// import SurveyProps from '../surveys/view-survey'

// const prisma = new PrismaClient()

// async function add_survey(surveyProps: SurveyProps) {
//   prisma.$connect();
//   prisma.survey.count()
//   const answers = surveyProps.answers.map(answer => {text: answer.text})
//   const today = new Date()
//   const enddate = new Date()
//   const survey = await prisma.survey.create({
//     data: {
//       startdate: today,
//       enddate: new Date(today.getDate() + 7),
//       question: "What is your favorite color?",
//       answers: {create: [
//         {text: "Red"},
//         {text: "Green"},
//         {text: "Blue"}
//       ]},
//   })

//   console.log(survey)
// }

// add_survey()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })

//       answers: {create: [
//         {text: "Red"},
//         {text: "Green"},
//         {text: "Blue"}
//       ]},
//   })

//   console.log(survey)
// }

// add_survey()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })
