let minimumDifference = function(Student_score, min_student) {
    if (min_student === 1) return 0;

    Student_score.sort((a, b) => a - b);

    let minDiff = Infinity;

    for (let i = 0; i + min_student - 1 < Student_score.length; i++) {
        let diff = Student_score[i + min_student - 1] - Student_score[i];
        minDiff = Math.min(minDiff, diff);
    }

    return minDiff;
};

let Student_score = [9,4,1,7]
let min_student = 2;

console.log(minimumDifference(Student_score,min_student))