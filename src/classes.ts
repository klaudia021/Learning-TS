abstract class Department {
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  // constructor(n: string){ 
  //   this.name = n;
  // }
  //if we don't want to initialize every property manually in the constructor, we can use this:
  constructor(protected readonly id: string, public name: string) {}

  // abstract describe(this: Department) {  //if we pass this we can still call it without parameters
  //   console.log(`Department: ${this.name} - ${this.id}`);
  // }

  abstract describe(this: Department): void;

  addEmployee(employeeName: string) {
    this.employees.push(employeeName);
    //this.id = '2';  //this will not work because id is readonly
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  static createEmployee(name: string) {
    return {name: name}
  }
}

// const accounting = new Department('A1', 'Accounting');
// accounting.describe();

//const accountingCopy = { describe : accounting.describe };
//accountingCopy.describe();  //this will log Department undefined, because the 'this' in the describe function does not refer to the accountingCopy object

//const accountingCopy = { name: 'DUMMY' , describe : accounting.describe };
//accountingCopy.describe(); 

// accounting.addEmployee('Steven');
// accounting.addEmployee('Matt');
// accounting.printEmployeeInformation();

//Inheritance
class ITDepartment extends Department{
  //private dummyField: string;
  constructor(id: string, name: string, public admins: string[]) {
    //this.dummyField = 'Dummy'; //super must be called before property initialization
    super(id, name);
  }

  addEmployee(employeeName: string) {
    if (employeeName === 'Max') {
      return;
    }
    this.employees.push(employeeName);
  }

  describe() {
    console.log('IT Department ID - ' + this.id);
  }
}

const it = new ITDepartment('I1', 'IT', ['Anna', 'Philip', 'Jeff']);
it.describe();
it.addEmployee('Max');
it.printEmployeeInformation();
it.addEmployee('Manuel');
it.printEmployeeInformation();

class AccountingDepartment extends Department {
  private lastReport: string;
  static example: string;
  private static instance: AccountingDepartment;

  get getLastReport() {
    if (this.lastReport) {
      return this.lastReport;
    }

    throw new Error('No report found'); 
  }

  set setLastReport(report: string) {
    if (!report) {
      throw new Error('Report not valid');
    }

    this.addReport(report);
    this.lastReport = report;
    //this.example //this will not work
  }

  private constructor(id: string, private reports: string[]){
    super(id, 'Accounting');
    this.lastReport = reports[reports.length-1];
  }

  addReport(report: string){
    this.reports.push(report);
  }

  printReports() {
    console.log(this.reports);
  }

  describe() {
    console.log('Accounting Department - ID: ' + this.id);
  }

  static getInstance(){
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('A2', ['Report1', 'Report2']);
    return this.instance;
  }
}

//const accountingClass = new AccountingDepartment('A2', ['Report1', 'Report2']); //singleton comment out
const accountingClass = AccountingDepartment.getInstance();
console.log(accountingClass.getLastReport); //we don't call this as a function, we access it as a field
//accountingClass.setLastReport = '';
accountingClass.setLastReport = 'Report 3';
accountingClass.printReports();
accountingClass.describe();

const employee1 = Department.createEmployee('Max');
console.log(employee1);

//Singleton
// Private constructor + private static instance + getInstance method
const accountingClass2 = AccountingDepartment.getInstance();
accountingClass.printReports();
accountingClass.describe();