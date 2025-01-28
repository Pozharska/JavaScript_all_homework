const student = {
    id: 3,
    programmingLanguage: 'JavaScript',
    hasExperienceInReact: false,
};

// Add
student.experience = 8;


// Delete

delete student.hasExperienceInReact


// Edit

student.experience = 13;
student.id = 6;

console.log('student', student);