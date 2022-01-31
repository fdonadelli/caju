import Benefits from "../../src/domain/entity/Benefits";

test("should create a benefit", function () {
    const benefit = new Benefits("1", "REFEICAO", "8851", "Refeição");

    expect(benefit.id).toBe("1");
    expect(benefit.idType).toBe("REFEICAO");
    expect(benefit.mcc).toBe("8851");
    expect(benefit.description).toBe("Refeição");

})