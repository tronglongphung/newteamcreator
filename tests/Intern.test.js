const Intern = require("../lib/intern");

describe("Intern", () => {
  it("should be able to create an Intern", () => {
    const staff = new Intern("tom", 1, "tr@gmail");

    staff.getName();
    expect(staff.name).toEqual("tom");
  });
});
