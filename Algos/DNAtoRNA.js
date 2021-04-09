// DNA to RNA Conversion

// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example: "GCAT" => "GCAU"

// Use replace method to swap the "T" values for "U"


function DNAtoRNA(dna) {
    // return dna.replace("T", "U"); // This will only replace the first instance of "T" with "U"

    return dna.replace(/T/g, "U"); // This will replace every instance of "T" with "U"
}

console.log(DNAtoRNA("TTTT"));
console.log(DNAtoRNA("GCAT"));
console.log(DNAtoRNA("GCCACCGCC"));


