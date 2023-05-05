class Department {
  // private id: string
  // private name: string
  private employees: string[] = []

  constructor(private readonly id: string, private readonly name: string) {
    this.id = id
    this.name = name
  }

  describe(this: Department) {
    console.log('Department: ' + this.id + '-' + this.name)
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInfo() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

class ITDepartment extends Department {
  admins: string[]
  constructor(id: string, admins: string[]) {
    super(id, 'IT')
    this.admins = admins
  }
}

class accountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'IT')
  }

  addReport(text: string) {
    this.reports.push(text)
  }

  getReport() {
    console.log(this.reports)
  }
}

const cs = new ITDepartment('D1', ['admin1'])
console.log(cs)

const ac = new accountingDepartment('A1', [])
ac.addReport('report1')
ac.addReport('report2')
ac.getReport()
