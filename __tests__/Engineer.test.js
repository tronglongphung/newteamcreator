const Engineer = require("../src/employee");

describe("Engineer", () => {
  it("should be able to create an engineer", () => {
    const staff = new Engineer("tom", 1, "tr@gmail");

    staff.getName();
    expect(staff.name).toEqual("tom");
  });
});
