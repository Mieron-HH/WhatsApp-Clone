export interface Theme {
	dark: boolean;
	colors: {
		primary: string;
		background: string;
		modal: string;
		secondary: string;
		card: string;
		text: string;
		secondaryText: string;
		border: string;
		notification: string;
		tab: string;
		activeTab: string;
		activeTabTintColor: string;
		inputContainer: string;
		agent_1: string;
		agent_2: string;
	};
}

export interface Conversation {
	id: string;
	user: string;
	user_profile: string;
	last_conv: string;
	content: Content[];
}

export interface Content {
	message: string;
	agent: Agent;
}

export enum Agent {
	Agent1 = "agent_1",
	Agent2 = "agent_2",
}
