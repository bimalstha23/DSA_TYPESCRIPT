
let isPalindrome = (x: number): boolean => {
    const a: string = x.toString();
    let k: number = a.length;
    for (let i: number = 0; i < k; i++) {
        if (a[i] !== a[k - 1])
            return false;
        k--
    }
    return true;
};