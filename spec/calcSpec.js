describe("Calculator", () => {
beforeEach(function(){
    calc= new Calculator;
})
let calc = new Calculator;
  describe("Addition tests", () => {
    it("should return 42", () => {
        calc.add(20);
        calc.add(22);
      expect(calc.value).toBe(42);
    });
    it("should return 26", () => {
        calc.add(7);
        calc.add(19);
      expect(calc.value).toBe(26);
    });
    it("should return an error if we dont't supply two numbers", () => {
      spyOn(window, "alert");
      calc.add("Hitchhikers");
      expect(window.alert).toHaveBeenCalledWith("Error!")
    });
  });
});

/*
describe("Calculator", () => {
  describe("Addition tests", () => {
    it("should return 42", () => {
      expect(addition(20, 22)).toBe(42);
    });
    it("should return 26", () => {
      expect(addition(7, 19)).toBe(26);
    });
    it("should return an error if we dont't supply two numbers", () => {
      spyOn(window, "alert");
      addition("Hitchhikers", "Guide");
      expect(window.alert).toHaveBeenCalledWith("Error!")
    });
  });
});
*/