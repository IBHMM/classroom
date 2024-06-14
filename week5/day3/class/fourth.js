class Bank {
  #branches;

  constructor(bankName) {
    this.bankName = bankName;
    this.#branches = [];
  }

  addBranch(branchName) {
    this.#branches.push(branchName);
  }

  get branches() {
    return this.#branches;
  }

  removeBranch(branchName) {
    const index = this.#branches.indexOf(branchName);

    if (index === -1) {
      console.log("This branch doesn't exist.");
    } else {
      this.#branches.splice(index, 1);
      console.log("Branch removed successfully.");
    }
  }

  displayBranches() {
    console.log(`Branches of ${this.bankName}:`);
    this.#branches.forEach((branch, index) => {
      console.log(`${index + 1}. ${branch}`);
    });
  }
}

const obj = new Bank("Kapital");

obj.addBranch("Main Branch");
obj.addBranch("Branch 2");
obj.addBranch("Branch 3");
obj.displayBranches()
obj.removeBranch("Branch 2");
obj.displayBranches()
obj.removeBranch("Branch 3")
obj.displayBranches()


obj.displayBranches();
obj.removeBranch("Branch 2");
obj.displayBranches();
