const API = require('./dist/index');

describe("When the client", () => {

	it("is invoked a valid isntance is returned", async () => {
		const client = await new API();
		expect(typeof client).toBe('function');
		expect(typeof client.getBestPodcasts).toBe('function')
	});

	it("is initalized with a key", async () => {
		const key = "keyExample1";
		const client = await new API({ key });
		expect(client.defaults.headers.common["X-ListenAPI-Key"]).toContain(key);
	});

});
