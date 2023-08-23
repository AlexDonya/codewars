let candidate1 = { minSalary: 120000 },
    job1 = { maxSalary: 130000 },
    job2 = { maxSalary: 80000 },
    candidate2 = { name: 'Bob' },
    job3 = { company: 'Roga i Kopiyta' };


function match(candidate, job) {
    if (candidate.minSalary * 0.9 <= job.maxSalary) {
        return true;
    } else if (!candidate.minSalary || !job.maxSalary) {
        return 'error';
    } else {
        return false;
    }
}

console.log(match(candidate2, job3));
console.log(match(candidate1, job1));
console.log(match(candidate1, job2));