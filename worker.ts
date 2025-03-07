interface Env {
	NGROK_DOMAIN: string;
}

export default {
	async fetch(request, env) {
		const targetURL = new URL(request.url);
		targetURL.hostname = env.NGROK_DOMAIN;
		const newRequest = new Request(targetURL, request);
		newRequest.headers.set("ngrok-skip-browser-warning", "1");

		return await fetch(newRequest);
	},
} satisfies ExportedHandler<Env>;
