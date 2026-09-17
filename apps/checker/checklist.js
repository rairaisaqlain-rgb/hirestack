export const atsChecks = [
  'Single column layout',
  'Standard section names: Experience, Education, Skills',
  'No tables for core content',
  'File type: DOCX or simple PDF',
  'Job-title keywords in first 1/3 of page 1'
];

export function score(answers) {
  const hit = atsChecks.filter((_, i) => answers[i]).length;
  return Math.round((hit / atsChecks.length) * 100);
}
