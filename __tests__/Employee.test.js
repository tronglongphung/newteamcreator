const Employee = require("../lib/employee");

describe("Employee", () => {
  it("should be able to create an employee", () => {
    const staff = new Employee("tom", 1, "tr@gmail");

    staff.getName();
    expect(staff.name).toEqual("tom");
  });
});
