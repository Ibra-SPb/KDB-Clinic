export type Theme = {
	[x: string]: any;
	root: object;
	menuButton: object;
	title: object;
};

declare module '@mui/material/styles' {
	interface Theme {
		root: {
			flexgrow: number;
		};
		menuButton: {
			marginRight: object;
		};
		title: {
			flexgrow: number;
		};
	}
	interface ThemeOptions {
		root?: {
			flexgrow?: number;
		};
		menuButton?: {
			marginRight: object;
		};
		title?: {
			flexgrow?: number;
		};
	}
}
