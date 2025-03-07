interface Env {
	TARGET_URL: string;
}

export default {
	async fetch(request, env) {
		const targetURL = new URL(env.TARGET_URL);
		const newRequest = new Request(targetURL, request);
		newRequest.headers.set("ngrok-skip-browser-warning", "1");

		return await fetch(newRequest);
	},
} satisfies ExportedHandler<Env>;
