import React, {
	createContext,
	useState,
	useContext,
	FC,
	useEffect,
	ReactNode,
} from "react";
import { useColorScheme } from "react-native";
import { Theme } from "@/constants/Interfaces";
import { DarkTheme, DefaultTheme } from "@/constants/Colors";

interface ThemeContextProps {
	theme: Theme | undefined;
}

interface ThemeProviderProps {
	children: ReactNode;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
	const colorScheme = useColorScheme();
	const [theme, setTheme] = useState<Theme | undefined>(undefined);

	useEffect(() => {
		setTheme(() => (colorScheme === "dark" ? DarkTheme : DefaultTheme));
	}, [colorScheme]);

	return (
		<ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
	);
};

export const useTheme = (): ThemeContextProps => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
