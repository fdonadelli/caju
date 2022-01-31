import PgPromiseConnectionAdapter from "../../src/infra/database/PgPromiseConnectonAdapter";

test("should create a connection with database", async function() {
    const connection = new PgPromiseConnectionAdapter();
    const account = await connection.query("select * from accounts where id = $1", ['1'])
    expect(account).toHaveLength(1);
})