const QUESTIONS = [
  ...(typeof ADMIN_QUESTIONS !== "undefined" ? ADMIN_QUESTIONS : []),
  ...(typeof ADMIN_EXTRA_QUESTIONS !== "undefined" ? ADMIN_EXTRA_QUESTIONS : []),
  ...(typeof CIVIL_QUESTIONS !== "undefined" ? CIVIL_QUESTIONS : []),
  ...(typeof CONSTITUTION_QUESTIONS !== "undefined" ? CONSTITUTION_QUESTIONS : []),
  ...(typeof COMPANY_QUESTIONS !== "undefined" ? COMPANY_QUESTIONS : []),
  ...(typeof BASIC_GENERAL_WRITING_QUESTIONS !== "undefined" ? BASIC_GENERAL_WRITING_QUESTIONS : [])
];
