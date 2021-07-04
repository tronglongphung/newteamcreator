const Manager = require("../lib/manager");

describe("Manager", () => {
  it("should be able to create a Manager", () => {
    const staff = new Manager("tom", 1, "tr@gmail");

    staff.getName();
    expect(staff.name).toEqual("tom");
  });
});
